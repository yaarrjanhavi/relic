"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Square, Volume2, Music, Tv } from "lucide-react";

interface WindowsMediaPlayerProps {
  title: string;
  youtubeId: string;
  isLocalFallback?: boolean;
}

export default function WindowsMediaPlayer({
  title,
  youtubeId,
  isLocalFallback = false,
}: WindowsMediaPlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [useVisualizer, setUseVisualizer] = useState(isLocalFallback);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [duration, setDuration] = useState("02:45");
  const [currentTime, setCurrentTime] = useState("00:00");

  // Timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && useVisualizer) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 0.6;
          if (next >= 100) {
            handleStop();
            return 0;
          }
          
          // Update timestamp text
          const elapsedSecs = Math.floor((next / 100) * 165);
          const mins = Math.floor(elapsedSecs / 60);
          const secs = elapsedSecs % 60;
          setCurrentTime(`0${mins}:${secs < 10 ? "0" + secs : secs}`);
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, useVisualizer]);

  // Canvas visualizer loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barsCount = 32;
      const barWidth = canvas.width / barsCount;

      // Draw backdrop grid
      ctx.fillStyle = "rgba(6, 18, 36, 0.9)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw animated frequencies
      for (let i = 0; i < barsCount; i++) {
        // Amplitude fluctuates if playing, else remains static
        let amp = isPlaying 
          ? Math.abs(Math.sin(frame * 0.08 + i * 0.25) * 55) + Math.abs(Math.cos(frame * 0.15 + i * 0.8) * 25) 
          : 5;
          
        if (amp > canvas.height - 10) amp = canvas.height - 10;

        // Visualizer colors (Vista media center neon greens and royal blues)
        const grad = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - amp);
        grad.addColorStop(0, "#10b981");   // Green bottom
        grad.addColorStop(0.5, "#38bdf8"); // Sky Blue mid
        grad.addColorStop(1, "#0284c7");   // Deep Blue top

        ctx.fillStyle = grad;
        ctx.fillRect(i * barWidth + 2, canvas.height - amp, barWidth - 4, amp);
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, useVisualizer]);

  // Synthesize Web Audio retro arpeggiator beat!
  const playSynthesizer = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Setup gain node
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime((volume / 100) * 0.12, ctx.currentTime);
      gainNode.connect(ctx.destination);
      gainNodeRef.current = gainNode;

      // Setup repeating note loop
      let noteTime = ctx.currentTime;
      const notes = [261.63, 329.63, 392.00, 523.25, 493.88, 392.00, 329.63]; // C E G C B G E arpeggio
      let idx = 0;

      const scheduleNotes = () => {
        if (!isPlaying) return;
        
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(notes[idx % notes.length], noteTime);
        
        // Soft envelope
        const noteGain = ctx.createGain();
        noteGain.gain.setValueAtTime((volume / 100) * 0.1, noteTime);
        noteGain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.35);
        
        osc.connect(noteGain);
        noteGain.connect(ctx.destination);
        
        osc.start(noteTime);
        osc.stop(noteTime + 0.4);
        
        idx++;
        noteTime += 0.25;
        
        // Loop arpeggiator if still active
        const timeout = (noteTime - ctx.currentTime) * 1000;
        setTimeout(scheduleNotes, timeout > 0 ? timeout : 50);
      };

      scheduleNotes();

    } catch (e) {
      console.warn("Web Audio API synthesis failed:", e);
    }
  };

  const stopSynthesizer = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
      } catch (e) {}
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
  };

  const handlePlayToggle = () => {
    if (useVisualizer) {
      const nextPlaying = !isPlaying;
      setIsPlaying(nextPlaying);
      if (nextPlaying) {
        // Wait briefly for interaction constraints, then trigger synth
        setTimeout(() => playSynthesizer(), 50);
      } else {
        stopSynthesizer();
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("00:00");
    stopSynthesizer();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.setValueAtTime((val / 100) * 0.12, audioContextRef.current.currentTime);
    }
  };

  return (
    <div className="wmp-casing p-3 w-full max-w-lg select-none text-slate-100 print:hidden">
      {/* Player header */}
      <div className="flex justify-between items-center px-1 mb-2">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
          <Music className="w-3.5 h-3.5 text-sky-400" />
          <span>Windows Media Player</span>
        </div>
        
        {/* Toggle Mode */}
        {!isLocalFallback && (
          <button
            onClick={() => {
              handleStop();
              setUseVisualizer(!useVisualizer);
            }}
            className="flex items-center gap-1 text-[10px] font-mono text-sky-300 hover:text-white px-2 py-0.5 rounded border border-sky-400/20 bg-sky-950/60 transition-colors"
          >
            <Tv className="w-3 h-3" />
            {useVisualizer ? "View YouTube Video" : "Play Retro Visualizer"}
          </button>
        )}
      </div>

      {/* Glossy screen container */}
      <div className="wmp-screen-casing rounded-lg aspect-video w-full overflow-hidden relative border border-black">
        {useVisualizer ? (
          // Falling back to the Canvas Audio visualizer
          <div className="w-full h-full relative">
            <canvas ref={canvasRef} className="w-full h-full block" width={480} height={270} />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-1 text-left bg-black/45 p-2 rounded border border-white/5 backdrop-blur-sm pointer-events-none">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">Visualizer Active</span>
              <span className="text-xs font-bold text-white truncate">{title}</span>
              <span className="text-[9px] text-slate-300">Retro fall-back oscillator synthesis playing</span>
            </div>
          </div>
        ) : (
          // Load normal YouTube embed
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-none"
          />
        )}
      </div>

      {/* Slider Progress Bar */}
      <div className="mt-3 px-1 flex items-center gap-2">
        <span className="text-[10px] font-mono text-slate-400">{currentTime}</span>
        <div className="flex-1 h-1.5 rounded-full bg-zinc-800 border border-zinc-700 relative">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_5px_#38bdf8]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[10px] font-mono text-slate-400">{duration}</span>
      </div>

      {/* Control console bar */}
      <div className="mt-3 flex items-center justify-between px-2 py-1.5 border-t border-zinc-800">
        
        {/* Track Title Scrolling ticker */}
        <div className="w-1/3 text-left overflow-hidden relative">
          <div className="text-[11px] font-mono text-emerald-400 whitespace-nowrap animate-[marquee_12s_linear_infinite] hover:animate-none">
            {title} ({useVisualizer ? "Visualizer" : "YouTube"})
          </div>
        </div>

        {/* Media Control Buttons */}
        <div className="flex items-center gap-3 justify-center">
          <button 
            onClick={handleStop}
            className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 active:scale-95 flex items-center justify-center transition-transform"
            title="Stop"
          >
            <Square className="w-3.5 h-3.5 text-zinc-300" fill="currentColor" />
          </button>

          {/* Central Blue play button */}
          <button 
            onClick={handlePlayToggle}
            className="w-10 h-10 rounded-full wmp-play-button flex items-center justify-center text-white cursor-pointer"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            )}
          </button>
        </div>

        {/* Volume controls */}
        <div className="w-1/3 flex items-center gap-2 justify-end">
          <Volume2 className="w-3.5 h-3.5 text-slate-400" />
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
        </div>
      </div>
    </div>
  );
}
