"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Music, Disc, Loader2 } from "lucide-react";
import { sotyDatabase, SotySong } from "@/utils/sotyData";
import GlassCard from "./GlassCard";
import GlossyButton from "./GlossyButton";
import { motion, AnimatePresence } from "framer-motion";

interface SotyPlayerProps {
  year: number;
}

interface iTunesTrack {
  previewUrl: string;
  artworkUrl100: string;
  trackViewUrl: string;
}

export default function SotyPlayer({ year }: SotyPlayerProps) {
  const song: SotySong = sotyDatabase[year] || sotyDatabase[2008];

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [trackInfo, setTrackInfo] = useState<iTunesTrack | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lyricsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch real track preview from iTunes Search API
  useEffect(() => {
    let active = true;
    setIsLoading(true);
    setTrackInfo(null);
    stopAudio();

    const fetchTrack = async () => {
      try {
        const query = `${song.title} ${song.artist}`;
        const res = await fetch(
          `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=1`
        );
        const data = await res.json();
        
        if (active && data.results && data.results.length > 0) {
          const track = data.results[0];
          setTrackInfo({
            previewUrl: track.previewUrl,
            artworkUrl100: track.artworkUrl100,
            trackViewUrl: track.trackViewUrl,
          });
        }
      } catch (err) {
        console.error("iTunes fetch failed", err);
      } finally {
        if (active) setIsLoading(false);
      }
    };

    fetchTrack();

    return () => {
      active = false;
    };
  }, [year]);

  // Handle lyrics progression synced to the audio duration
  useEffect(() => {
    if (lyricsTimerRef.current) {
      clearInterval(lyricsTimerRef.current);
    }

    if (isPlaying && song.lyrics.length > 0) {
      setCurrentLyricIndex(0);
      const totalDuration = 30; // iTunes previews are 30s
      const intervalDuration = (totalDuration / song.lyrics.length) * 1000;

      lyricsTimerRef.current = setInterval(() => {
        setCurrentLyricIndex((prev) => (prev + 1) % song.lyrics.length);
      }, intervalDuration);
    } else {
      setCurrentLyricIndex(0);
    }

    return () => {
      if (lyricsTimerRef.current) clearInterval(lyricsTimerRef.current);
    };
  }, [isPlaying, year]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const setupWebAudio = (audioElement: HTMLAudioElement) => {
    if (audioCtxRef.current) return;

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyserRef.current = analyser;

      // Connect source to analyser and output
      const source = ctx.createMediaElementSource(audioElement);
      sourceNodeRef.current = source;
      
      source.connect(analyser);
      analyser.connect(ctx.destination);
    } catch (e) {
      console.warn("Web Audio API setup failed (likely CORS or context block). Falling back to simulated visualizer.", e);
    }
  };

  const startAudio = () => {
    if (!trackInfo) return;

    // Create or reuse HTML5 Audio Element
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio();
      audio.crossOrigin = "anonymous"; // Essential for Web Audio API node connection
      audioRef.current = audio;
    }

    audio.src = trackInfo.previewUrl;
    audio.loop = true;
    audio.muted = isMuted;

    // Initialize audio node graph on first play gesture
    setupWebAudio(audio);

    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    audio.play()
      .then(() => {
        setIsPlaying(true);
        startCanvasVisualizer();
      })
      .catch((err) => {
        console.error("Audio playback blocked:", err);
      });
  };

  const stopAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const togglePlay = () => {
    playClickFeedback();
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const toggleMute = () => {
    playClickFeedback();
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    if (audioRef.current) {
      audioRef.current.muted = newMuteState;
    }
  };

  // Canvas frequency visualizer
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

      if (analyser && isPlaying) {
        analyser.getByteFrequencyData(dataArray);
      } else if (isPlaying) {
        // Fallback simulated visualizer if CORS blocks audio node extraction
        for (let i = 0; i < bufferLength; i++) {
          dataArray[i] = Math.sin(Date.now() / 120 + i) * 60 + 80;
        }
      } else {
        canvasCtx.clearRect(0, 0, width, height);
        return;
      }

      canvasCtx.clearRect(0, 0, width, height);

      const barWidth = (width / bufferLength) * 1.6;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * height * 0.95;

        const grad = canvasCtx.createLinearGradient(0, height, 0, height - barHeight);
        grad.addColorStop(0, "rgba(56, 189, 248, 0.45)");  // Sky Blue
        grad.addColorStop(0.5, "rgba(16, 185, 129, 0.65)"); // Green Accent
        grad.addColorStop(1, "rgba(255, 255, 255, 0.9)");   // Gloss Peak

        canvasCtx.fillStyle = grad;
        canvasCtx.fillRect(x, height - barHeight, barWidth - 2, barHeight);

        x += barWidth;
      }
    };

    draw();
  };

  const playClickFeedback = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
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
    } catch (e) {}
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

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-10 gap-2">
          <Loader2 className="w-8 h-8 text-sky-400 animate-spin" />
          <span className="text-[10px] font-mono text-slate-400">CONNECTING TO ITUNES...</span>
        </div>
      ) : (
        <>
          <div className="flex gap-4 items-center mb-4">
            {/* CD Disc artwork */}
            <div className="relative flex-shrink-0">
              <motion.div
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={isPlaying ? { repeat: Infinity, duration: 5, ease: "linear" } : { duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 shadow-lg flex items-center justify-center relative overflow-hidden"
              >
                {/* Artwork overlay if fetched */}
                {trackInfo ? (
                  <img
                    src={trackInfo.artworkUrl100}
                    alt="Album Cover"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-pink-400/10 to-emerald-400/20 opacity-80" />
                )}
                
                <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-950/90 border border-sky-400/20" />
                </div>
                
                <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.8]" />
                <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.6]" />
                <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.4]" />
              </motion.div>
              <div className="absolute -bottom-1 -right-1 bg-sky-950 border border-sky-400/30 rounded-full p-1 shadow">
                <Disc className={`w-3 h-3 text-sky-400 ${isPlaying ? "animate-spin" : ""}`} />
              </div>
            </div>

            {/* Song title marquee */}
            <div className="flex-1 min-w-0 text-left">
              <h4 className="font-bold text-sm text-white truncate">
                {song.title}
              </h4>
              <p className="text-xs text-sky-300 font-mono font-medium truncate">
                {song.artist}
              </p>
              <span className="text-[9px] font-mono uppercase bg-sky-900/60 border border-sky-400/20 text-sky-200 px-1.5 py-0.5 rounded inline-block mt-1">
                {song.genre}
              </span>
            </div>
          </div>

          {/* Visualizer */}
          <div className="w-full bg-sky-950/70 border border-sky-400/20 rounded-xl p-2.5 mb-4 relative overflow-hidden">
            <canvas
              ref={canvasRef}
              width={280}
              height={32}
              className="w-full h-8 block"
            />
            <div className="absolute top-1 right-2 text-[8px] font-mono text-slate-500 uppercase tracking-widest pointer-events-none">
              {isPlaying ? "Dolby Digital" : "Visualizer"}
            </div>
          </div>

          {/* Lyric scroller */}
          <div className="w-full bg-slate-950/60 border border-white/5 rounded-xl p-3 mb-4 font-mono text-[11px] h-12 flex items-center justify-center text-center relative">
            <div className="absolute top-1 left-2 text-[7px] text-slate-500 uppercase">Lyrics</div>
            <p className="text-slate-100 font-semibold px-2 transition-all duration-300">
              {isPlaying ? song.lyrics[currentLyricIndex] : "Press PLAY to listen to the original track preview!"}
            </p>
          </div>

          {/* Audio Controls */}
          <div className="flex justify-between items-center gap-3">
            <GlossyButton
              onClick={togglePlay}
              variant={isPlaying ? "emerald" : "aqua"}
              className="flex-1 py-2 flex items-center justify-center gap-1.5 text-xs font-bold font-mono"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" fill="currentColor" />
                  <span>PAUSE TRACK</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" fill="currentColor" />
                  <span>PLAY PREVIEW</span>
                </>
              )}
            </GlossyButton>

            <button
              onClick={toggleMute}
              className="p-2.5 bg-sky-950/50 border border-sky-400/20 hover:border-sky-300/40 text-slate-100 rounded-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-orange-400" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
            </button>
          </div>
        </>
      )}
    </GlassCard>
  );
}
