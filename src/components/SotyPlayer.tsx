"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Music, Disc } from "lucide-react";
import { sotyDatabase, SotySong } from "@/utils/sotyData";
import GlassCard from "./GlassCard";
import GlossyButton from "./GlossyButton";
import { motion } from "framer-motion";

interface SotyPlayerProps {
  year: number;
}

const pitchToFreq: Record<string, number> = {
  "C3": 130.81, "C#3": 138.59, "D3": 146.83, "D#3": 155.56, "E3": 164.81, "F3": 174.61, "F#3": 185.00, "G3": 196.00, "G#3": 207.65, "A3": 220.00, "Bb3": 233.08, "B3": 246.94,
  "C4": 261.63, "C#4": 277.18, "D4": 293.66, "D#4": 311.13, "E4": 329.63, "F4": 349.23, "F#4": 369.99, "G4": 392.00, "G#4": 415.30, "A4": 440.00, "Bb4": 466.16, "B4": 493.88,
  "C5": 523.25, "C#5": 554.37, "D5": 587.33, "D#5": 622.25, "E5": 659.25, "F5": 698.46, "F#5": 739.99, "G5": 783.99, "G#5": 830.61, "A5": 880.00, "Bb5": 932.33, "B5": 987.77,
  "C6": 1046.50, "Eb4": 311.13, "Ab4": 415.30, "Eb5": 622.25
};

export default function SotyPlayer({ year }: SotyPlayerProps) {
  const song: SotySong = sotyDatabase[year] || sotyDatabase[2008];
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const noteTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isPlayingRef = useRef(false);

  // Sync state reference to prevent timeout closures
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Restart song if year changes
  useEffect(() => {
    stopMelody();
    setIsPlaying(false);
    setCurrentLyricIndex(0);
  }, [year]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMelody();
    };
  }, []);

  const getAudioContext = (): AudioContext => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    return ctx;
  };

  const initAnalyser = (ctx: AudioContext): AnalyserNode => {
    if (!analyserRef.current) {
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyser.connect(ctx.destination);
      analyserRef.current = analyser;
    }
    return analyserRef.current;
  };

  const startMelody = () => {
    const ctx = getAudioContext();
    const analyser = initAnalyser(ctx);
    setIsPlaying(true);
    
    let noteIndex = 0;
    setCurrentLyricIndex(0);

    const playNextNote = () => {
      if (!isPlayingRef.current) return;

      const currentSong = sotyDatabase[year] || sotyDatabase[2008];
      const notes = currentSong.notes;
      const note = notes[noteIndex];

      if (!note) {
        // Loop the song back to start
        noteIndex = 0;
        setCurrentLyricIndex(0);
        playNextNote();
        return;
      }

      // Sync lyrics timing roughly based on note playback position
      const lyricLinesCount = currentSong.lyrics.length;
      if (lyricLinesCount > 0) {
        const lyricProgressRatio = noteIndex / notes.length;
        const lineIdx = Math.min(lyricLinesCount - 1, Math.floor(lyricProgressRatio * lyricLinesCount));
        setCurrentLyricIndex(lineIdx);
      }

      const frequency = pitchToFreq[note.pitch] || 440;
      
      // Synthesize note
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Fun retro synth settings (triangle wave feels soft and chiptune-like)
      osc.type = "triangle";
      osc.frequency.setValueAtTime(frequency, now);

      // Volume envelope (ADSR) to avoid audio clicks
      const peakVolume = isMuted ? 0 : 0.08;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(peakVolume, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + (note.duration * (60 / currentSong.bpm)) - 0.03);

      osc.connect(gain);
      gain.connect(analyser);

      osc.start(now);
      osc.stop(now + (note.duration * (60 / currentSong.bpm)));

      // Set timeout for next note
      const durationMs = note.duration * (60 / currentSong.bpm) * 1000;
      noteIndex = (noteIndex + 1) % notes.length;

      noteTimeoutRef.current = setTimeout(playNextNote, durationMs);
    };

    playNextNote();
    startCanvasVisualizer();
  };

  const stopMelody = () => {
    if (noteTimeoutRef.current) {
      clearTimeout(noteTimeoutRef.current);
      noteTimeoutRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopMelody();
    } else {
      startMelody();
    }
  };

  // Canvas visualizer loop
  const startCanvasVisualizer = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasCtx = canvas.getContext("2d");
    if (!canvasCtx) return;

    const analyser = analyserRef.current;
    const bufferLength = analyser ? analyser.frequencyBinCount : 16;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!canvasCtx || !canvas) return;

      const width = canvas.width;
      const height = canvas.height;

      animationFrameRef.current = requestAnimationFrame(draw);

      if (analyser && isPlayingRef.current) {
        analyser.getByteFrequencyData(dataArray);
      } else {
        // Draw idle waving bars
        for (let i = 0; i < bufferLength; i++) {
          dataArray[i] = Math.sin(Date.now() / 150 + i) * 15 + 15;
        }
      }

      canvasCtx.clearRect(0, 0, width, height);

      const barWidth = (width / bufferLength) * 1.6;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        // Map frequency to bar height
        barHeight = (dataArray[i] / 255) * height * 0.95;

        // Aero-inspired blue/teal glossy visualizer bars
        const grad = canvasCtx.createLinearGradient(0, height, 0, height - barHeight);
        grad.addColorStop(0, "rgba(56, 189, 248, 0.4)");  // Soft sky blue
        grad.addColorStop(0.5, "rgba(16, 185, 129, 0.6)"); // Emerald Green accent
        grad.addColorStop(1, "rgba(255, 255, 255, 0.85)"); // Gloss peak

        canvasCtx.fillStyle = grad;
        canvasCtx.fillRect(x, height - barHeight, barWidth - 2, barHeight);

        x += barWidth;
      }
    };

    draw();
  };

  // Play a click sound effect on interaction
  const playClickFeedback = () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {
      // AudioContext disabled
    }
  };

  return (
    <GlassCard className="w-full max-w-[340px] md:max-w-[360px] mx-auto select-none overflow-hidden print:hidden">
      {/* Top Gloss Highlight */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      {/* Header title */}
      <div className="flex items-center gap-1.5 text-xs text-sky-200 font-mono mb-4 pb-2">
        <Music className="w-4 h-4 text-sky-400" />
        <span className="font-bold">SONG OF THE YEAR ({year})</span>
      </div>

      <div className="flex gap-4 items-center mb-4">
        {/* Spinning 3D CD Disc component */}
        <div className="relative flex-shrink-0">
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isPlaying ? { repeat: Infinity, duration: 4, ease: "linear" } : { duration: 0.5 }}
            className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 shadow-lg flex items-center justify-center relative overflow-hidden"
          >
            {/* Holographic cd reflection layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-pink-400/10 to-emerald-400/20 pointer-events-none opacity-80" />
            <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-950/90 border border-sky-400/20" />
            </div>
            {/* Cd vinyl grooves */}
            <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.8]" />
            <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.6]" />
            <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.4]" />
            {isPlaying && (
              <div className="absolute top-1 left-4 text-[6px] text-white/40 font-mono font-bold select-none leading-none rotate-12">
                SOTY
              </div>
            )}
          </motion.div>
          <div className="absolute -bottom-1 -right-1 bg-sky-950 border border-sky-400/30 rounded-full p-1 shadow">
            <Disc className={`w-3 h-3 text-sky-400 ${isPlaying ? "animate-spin" : ""}`} />
          </div>
        </div>

        {/* Marquee Song Title details */}
        <div className="flex-1 min-w-0 text-left">
          <div className="overflow-hidden relative h-5">
            <span className="absolute font-bold text-sm text-white truncate w-full">
              {song.title}
            </span>
          </div>
          <p className="text-xs text-sky-300 font-mono font-medium truncate">
            {song.artist}
          </p>
          <span className="text-[9px] font-mono uppercase bg-sky-900/60 border border-sky-400/30 text-sky-200 px-1.5 py-0.5 rounded inline-block mt-1">
            {song.genre} ({song.bpm} BPM)
          </span>
        </div>
      </div>

      {/* Visualizer Canvas Box */}
      <div className="w-full bg-sky-950/70 border border-sky-400/20 rounded-xl p-2.5 mb-4 relative overflow-hidden">
        <canvas
          ref={canvasRef}
          width={280}
          height={32}
          className="w-full h-8 block"
        />
        <div className="absolute top-1 right-2 text-[8px] font-mono text-slate-500 uppercase tracking-widest pointer-events-none">
          {isPlaying ? "Chiptune FM" : "Visualizer"}
        </div>
      </div>

      {/* Karaoke Lyric Scroller panel */}
      <div className="w-full bg-slate-950/60 border border-white/5 rounded-xl p-3 mb-4 font-mono text-[11px] h-12 flex items-center justify-center text-center relative">
        <div className="absolute top-1 left-2 text-[7px] text-slate-500 uppercase">Lyrics</div>
        <p className="text-slate-100 font-semibold px-2 transition-all duration-300">
          {isPlaying ? song.lyrics[currentLyricIndex] : "Press PLAY to listen to the chiptune hook!"}
        </p>
      </div>

      {/* Audio controls */}
      <div className="flex justify-between items-center gap-3">
        <GlossyButton
          onClick={() => {
            playClickFeedback();
            togglePlay();
          }}
          variant={isPlaying ? "emerald" : "aqua"}
          className="flex-1 py-2 flex items-center justify-center gap-1.5 text-xs font-bold font-mono"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" fill="currentColor" />
              <span>PAUSE HOOK</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" fill="currentColor" />
              <span>PLAY CHIPTUNE</span>
            </>
          )}
        </GlossyButton>

        <button
          onClick={() => {
            playClickFeedback();
            setIsMuted(!isMuted);
          }}
          className="p-2.5 bg-sky-950/50 border border-sky-400/20 hover:border-sky-300/40 text-slate-100 rounded-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-orange-400" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
        </button>
      </div>
    </GlassCard>
  );
}
