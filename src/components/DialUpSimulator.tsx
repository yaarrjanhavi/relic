"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Download, Wifi, CheckCircle2, RefreshCw } from "lucide-react";
import { sotyDatabase, SotySong } from "@/utils/sotyData";
import GlassCard from "./GlassCard";
import GlossyButton from "./GlossyButton";

interface DialUpSimulatorProps {
  year: number;
}

export default function DialUpSimulator({ year }: DialUpSimulatorProps) {
  const song: SotySong = sotyDatabase[year] || sotyDatabase[2008];

  // Song size calculation (e.g. 128kbps MP3 size estimation)
  const songSizeMb = Math.round((4.2 + (year % 5) * 0.7) * 10) / 10;
  const songSizeBytes = songSizeMb * 1024 * 1024;

  const [status, setStatus] = useState<"idle" | "dialing" | "handshake" | "downloading" | "complete">("idle");
  const [logText, setLogText] = useState("Modem ready.");
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadedBytes, setDownloadedBytes] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const downloadIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Reset when year changes
  useEffect(() => {
    resetSimulator();
  }, [year]);

  useEffect(() => {
    return () => {
      if (downloadIntervalRef.current) clearInterval(downloadIntervalRef.current);
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

  const playSynthTone = (freq: number, duration: number, type: OscillatorType = "sine", volume = 0.05) => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration - 0.01);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  };

  const startDialUp = () => {
    if (status !== "idle") return;

    setStatus("dialing");
    setLogText("Dialing ISP (555-4321)...");
    
    // Simulate dialing DTMF tones (beep beep beep)
    let delay = 0;
    const toneFreqs = [941, 697, 770, 852, 941];
    
    toneFreqs.forEach((freq, idx) => {
      setTimeout(() => {
        playSynthTone(freq, 0.15, "sine", 0.08);
      }, delay);
      delay += 250;
    });

    // Move to handshake state
    setTimeout(() => {
      setStatus("handshake");
      setLogText("Carrier detected. Negotiating link speed...");
      
      // Play dial-up screech noise (using a square/sawtooth wave combination)
      playSynthTone(1200, 0.4, "sawtooth", 0.02);
      setTimeout(() => playSynthTone(400, 0.5, "sawtooth", 0.03), 400);
      setTimeout(() => playSynthTone(1800, 0.6, "sawtooth", 0.015), 900);
      
    }, 1800);

    // Move to downloading state
    setTimeout(() => {
      setStatus("downloading");
      setLogText("Connected at 56,000 bps. Commencing transfer...");
      
      let currentProgress = 0;
      let currentBytes = 0;

      downloadIntervalRef.current = setInterval(() => {
        currentProgress += 2.5; // Fast download simulation (around 4-5 seconds total)
        currentBytes = Math.min(songSizeBytes, Math.floor((currentProgress / 100) * songSizeBytes));

        setDownloadProgress(Math.min(100, currentProgress));
        setDownloadedBytes(currentBytes);

        if (currentProgress >= 100) {
          if (downloadIntervalRef.current) clearInterval(downloadIntervalRef.current);
          setStatus("complete");
          setLogText(`Download complete! Saved to C:\\Downloads\\${song.title.replace(/\s+/g, "_")}.mp3`);
          playSynthTone(880, 0.12, "sine", 0.05);
          setTimeout(() => playSynthTone(1100, 0.25, "sine", 0.05), 120);
        }
      }, 100);

    }, 3800);
  };

  const resetSimulator = () => {
    if (downloadIntervalRef.current) clearInterval(downloadIntervalRef.current);
    setStatus("idle");
    setLogText("Modem ready.");
    setDownloadProgress(0);
    setDownloadedBytes(0);
  };

  // Connection speed download estimations
  const formatTime = (seconds: number): string => {
    if (seconds < 1) return `${Math.round(seconds * 1000)} ms`;
    if (seconds < 60) return `${Math.round(seconds)}s`;
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}m ${secs}s`;
  };

  const dialup28kTime = songSizeBytes / 3600; // ~3.5 KB/s
  const dialup56kTime = songSizeBytes / 7000; // ~7 KB/s
  const dsl256kTime = songSizeBytes / 32000;  // ~32 KB/s
  const fiberTime = songSizeBytes / (12.5 * 1024 * 1024); // ~100 Mbps (12.5 MB/s)

  return (
    <GlassCard className="w-full max-w-[340px] md:max-w-[360px] mx-auto select-none overflow-hidden print:hidden text-left">
      {/* Top Gloss Highlight */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      {/* Title */}
      <div className="flex items-center gap-1.5 text-xs text-sky-200 font-mono mb-4 pb-2">
        <Phone className="w-4 h-4 text-emerald-400" />
        <span className="font-bold">56K DIAL-UP SIMULATOR</span>
      </div>

      {/* Info block */}
      <div className="bg-sky-950/65 border border-sky-400/25 rounded-xl p-3.5 mb-4 text-xs font-mono text-slate-300">
        <div className="flex justify-between mb-1.5">
          <span>Target File:</span>
          <span className="text-white truncate max-w-[160px]">{song.title}.mp3</span>
        </div>
        <div className="flex justify-between">
          <span>File Size:</span>
          <span className="text-emerald-300 font-bold">{songSizeMb} MB</span>
        </div>
      </div>

      {/* Simulator terminal */}
      <div className="bg-black/80 border border-emerald-500/20 rounded-xl p-3.5 mb-4 font-mono text-[10px] text-emerald-400 h-28 flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto leading-relaxed">
          <div>ATZ</div>
          <div>OK</div>
          <div>ATDT 5554321</div>
          <div className="text-white mt-1 animate-pulse">&gt; {logText}</div>
          
          {status === "downloading" && (
            <div className="text-sky-300 mt-1">
              Transfer rate: 5.4 KB/sec (Simulated 500x fast-forward)
            </div>
          )}
        </div>

        {/* Progress bar container */}
        {(status === "downloading" || status === "complete") && (
          <div className="mt-2.5">
            <div className="flex justify-between text-[9px] text-slate-400 mb-1">
              <span>{Math.round(downloadedBytes / 1024)} KB / {Math.round(songSizeBytes / 1024)} KB</span>
              <span>{Math.round(downloadProgress)}%</span>
            </div>
            
            {/* Retro segment block progress bar */}
            <div className="w-full bg-slate-900 border border-slate-700 h-4 rounded overflow-hidden p-0.5 flex gap-0.5">
              {Array.from({ length: 15 }).map((_, idx) => {
                const segmentProgress = (idx + 1) * (100 / 15);
                const isActive = downloadProgress >= segmentProgress;
                return (
                  <div
                    key={idx}
                    className={`flex-1 h-full rounded-sm transition-all duration-100 ${
                      isActive 
                        ? "bg-gradient-to-b from-sky-400 to-sky-600 shadow-[0_0_4px_rgba(56,189,248,0.5)]" 
                        : "bg-transparent"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Historical speeds comparison card */}
      <div className="bg-sky-950/45 border border-white/5 rounded-xl p-3.5 mb-4 text-xs font-mono text-slate-300">
        <span className="text-[10px] text-sky-300 uppercase tracking-widest font-bold block mb-2">
          Real-Time Download Estimations:
        </span>
        <div className="flex flex-col gap-1.5 text-[11px]">
          <div className="flex justify-between">
            <span className="text-slate-400">28.8k Modem (1995):</span>
            <span className="text-slate-100">{formatTime(dialup28kTime)}</span>
          </div>
          <div className="flex justify-between font-bold text-sky-200">
            <span>56k Dial-Up (2000):</span>
            <span>{formatTime(dialup56kTime)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">256k Early DSL (2004):</span>
            <span className="text-slate-100">{formatTime(dsl256kTime)}</span>
          </div>
          <div className="flex justify-between text-emerald-400">
            <span>100M Fiber (2020):</span>
            <span>{formatTime(fiberTime)}</span>
          </div>
        </div>
      </div>

      {/* Control button */}
      <div className="flex gap-3">
        {status === "complete" ? (
          <GlossyButton
            onClick={resetSimulator}
            variant="emerald"
            className="w-full py-2 flex items-center justify-center gap-1.5 text-xs font-bold font-mono"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>DOWNLOAD COMPLETE (RESET)</span>
          </GlossyButton>
        ) : (
          <GlossyButton
            onClick={startDialUp}
            disabled={status !== "idle"}
            variant={status === "idle" ? "aqua" : "disabled"}
            className="w-full py-2 flex items-center justify-center gap-1.5 text-xs font-bold font-mono"
          >
            {status === "idle" ? (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>START DIAL-UP DOWNLOAD</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>CONNECTING...</span>
              </>
            )}
          </GlossyButton>
        )}
      </div>
    </GlassCard>
  );
}
