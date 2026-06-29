"use client";

import React, { useRef } from "react";
import { Volume2, AlertCircle, RefreshCw, Phone, Play } from "lucide-react";
import GlossyButton from "./GlossyButton";

interface SoundboardProps {
  onNudge: () => void;
}

export default function Soundboard({ onNudge }: SoundboardProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);

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

  // Play MSN Messenger message "ding" chime
  const playMsnMessage = () => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(880, now); // A5 note
    osc1.frequency.exponentialRampToValueAtTime(1320, now + 0.12); // Arpeggiating slide

    osc2.type = "sine";
    osc2.frequency.setValueAtTime(1100, now + 0.05); // C#6 note

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.4);
    osc2.start(now + 0.05);
    osc2.stop(now + 0.4);
  };

  // Play MSN Messenger Nudge "buzz" buzzer
  const playMsnNudge = () => {
    onNudge(); // Trigger screen shaking wiggles
    
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(95, now);
    // Vibrating pulse frequency modulation
    osc.frequency.linearRampToValueAtTime(105, now + 0.1);
    osc.frequency.linearRampToValueAtTime(90, now + 0.25);
    osc.frequency.linearRampToValueAtTime(100, now + 0.4);

    gain.gain.setValueAtTime(0.2, now);
    // Pulse volume envelope
    gain.gain.linearRampToValueAtTime(0.01, now + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.45);
  };

  // Play Dial-up Internet Connecting tones
  const playDialupSound = () => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Phase 1: DTMF phone numbers dialing (Beep, Beep, Beep...)
    const dialNotes = [
      { f1: 697, f2: 1209 }, // '1'
      { f1: 770, f2: 1336 }, // '5'
      { f1: 852, f2: 1477 }, // '9'
      { f1: 941, f2: 1336 }, // '0'
    ];

    let toneTime = now;
    dialNotes.forEach((notes, idx) => {
      const oscA = ctx.createOscillator();
      const oscB = ctx.createOscillator();
      const gain = ctx.createGain();

      oscA.frequency.setValueAtTime(notes.f1, toneTime);
      oscB.frequency.setValueAtTime(notes.f2, toneTime);

      gain.gain.setValueAtTime(0.04, toneTime);
      gain.gain.setValueAtTime(0.001, toneTime + 0.15); // beep duration

      oscA.connect(gain);
      oscB.connect(gain);
      gain.connect(ctx.destination);

      oscA.start(toneTime);
      oscA.stop(toneTime + 0.18);
      oscB.start(toneTime);
      oscB.stop(toneTime + 0.18);

      toneTime += 0.22; // gap
    });

    // Phase 2: Ringback chime (brrr... brrr...)
    const ringTime = toneTime + 0.15;
    const oscRing1 = ctx.createOscillator();
    const oscRing2 = ctx.createOscillator();
    const gainRing = ctx.createGain();

    oscRing1.frequency.setValueAtTime(440, ringTime);
    oscRing2.frequency.setValueAtTime(480, ringTime);

    gainRing.gain.setValueAtTime(0.03, ringTime);
    gainRing.gain.linearRampToValueAtTime(0.03, ringTime + 0.8);
    gainRing.gain.exponentialRampToValueAtTime(0.001, ringTime + 0.95);

    oscRing1.connect(gainRing);
    oscRing2.connect(gainRing);
    gainRing.connect(ctx.destination);

    oscRing1.start(ringTime);
    oscRing1.stop(ringTime + 0.95);
    oscRing2.start(ringTime);
    oscRing2.stop(ringTime + 0.95);

    // Phase 3: Screeching carrier static handshake (shhh... kkkk...)
    const handshakeTime = ringTime + 1.1;
    
    // Noise buffer generation for static
    const bufferSize = ctx.sampleRate * 1.5; // 1.5 seconds static
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Bandpass filter to make it sound like a telephone wire speaker
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, handshakeTime);
    filter.frequency.exponentialRampToValueAtTime(3200, handshakeTime + 0.6);
    filter.frequency.exponentialRampToValueAtTime(600, handshakeTime + 1.2);

    const gainNoise = ctx.createGain();
    gainNoise.gain.setValueAtTime(0.06, handshakeTime);
    gainNoise.gain.linearRampToValueAtTime(0.04, handshakeTime + 1.0);
    gainNoise.gain.exponentialRampToValueAtTime(0.001, handshakeTime + 1.5);

    noiseSource.connect(filter);
    filter.connect(gainNoise);
    gainNoise.connect(ctx.destination);

    noiseSource.start(handshakeTime);
    noiseSource.stop(handshakeTime + 1.5);

    // Also overlay a high-pitched beep tone during static
    const oscScreech = ctx.createOscillator();
    const gainScreech = ctx.createGain();
    oscScreech.frequency.setValueAtTime(2200, handshakeTime + 0.3);
    oscScreech.frequency.linearRampToValueAtTime(1800, handshakeTime + 1.0);
    
    gainScreech.gain.setValueAtTime(0.015, handshakeTime + 0.3);
    gainScreech.gain.exponentialRampToValueAtTime(0.001, handshakeTime + 1.0);
    
    oscScreech.connect(gainScreech);
    gainScreech.connect(ctx.destination);
    oscScreech.start(handshakeTime + 0.3);
    oscScreech.stop(handshakeTime + 1.0);
  };

  // Play XP/Vista-inspired startup chime
  const playStartupTheme = () => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const baseFrequencies = [196, 261.63, 329.63, 392, 523.25]; // G4, C5, E5, G5, C6
    
    baseFrequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      // Delay note start for arpeggio chime effect
      const noteStart = now + idx * 0.14;
      osc.frequency.setValueAtTime(freq, noteStart);
      
      // Soft ambient wash envelope
      gain.gain.setValueAtTime(0.05, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.05, noteStart + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteStart);
      osc.stop(noteStart + 1.4);
    });
  };

  // Play retro system error chord
  const playErrorChord = () => {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Short detuned dual square waves
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = "triangle";
    osc1.frequency.setValueAtTime(145, now);
    
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(148, now);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.22);
    osc2.start(now);
    osc2.stop(now + 0.22);
  };

  return (
    <div className="aero-glass-panel rounded-2xl relative overflow-hidden w-full max-w-[340px] md:max-w-[360px] mx-auto p-5 text-left border border-white/20 select-none print:hidden">
      {/* Top Gloss highlight */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center gap-1.5 text-xs text-sky-200 font-mono mb-4 pb-2">
        <Volume2 className="w-4 h-4 text-emerald-400" />
        <span className="font-bold">RETRO SYSTEM SOUNDS</span>
      </div>

      {/* Buttons layout */}
      <div className="flex flex-col gap-2.5 relative z-10">
        
        {/* Nudge buzzer (with shake hook callback) */}
        <button
          onClick={playMsnNudge}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-sky-950/45 border border-sky-400/20 hover:border-sky-300/40 hover:bg-sky-400/10 text-slate-100 rounded-xl transition-all duration-200 active:scale-[0.98] font-mono text-xs text-left"
        >
          <span className="flex items-center gap-2">
            <span className="text-base">🔔</span>
            <span>MSN Guide Nudge</span>
          </span>
          <span className="text-[9px] text-emerald-300 border border-emerald-400/30 bg-emerald-950/60 px-2 py-0.5 rounded-full uppercase">
            Shake Screen
          </span>
        </button>

        {/* MSN alert chime */}
        <button
          onClick={playMsnMessage}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-sky-950/45 border border-sky-400/20 hover:border-sky-300/40 hover:bg-sky-400/10 text-slate-100 rounded-xl transition-all duration-200 active:scale-[0.98] font-mono text-xs text-left"
        >
          <span className="flex items-center gap-2">
            <span className="text-base">💬</span>
            <span>MSN Message Chime</span>
          </span>
          <span className="text-[9px] text-slate-400">Play</span>
        </button>

        {/* Dial-up modem connector */}
        <button
          onClick={playDialupSound}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-sky-950/45 border border-sky-400/20 hover:border-sky-300/40 hover:bg-sky-400/10 text-slate-100 rounded-xl transition-all duration-200 active:scale-[0.98] font-mono text-xs text-left"
        >
          <span className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>Dial-Up Handshake</span>
          </span>
          <span className="text-[9px] text-slate-400">1.8s audio</span>
        </button>

        {/* Retro chimes startup */}
        <button
          onClick={playStartupTheme}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-sky-950/45 border border-sky-400/20 hover:border-sky-300/40 hover:bg-sky-400/10 text-slate-100 rounded-xl transition-all duration-200 active:scale-[0.98] font-mono text-xs text-left"
        >
          <span className="flex items-center gap-2">
            <Play className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" />
            <span>Retro Startup Chime</span>
          </span>
          <span className="text-[9px] text-slate-400">Play</span>
        </button>

        {/* Error warning chime */}
        <button
          onClick={playErrorChord}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-sky-950/45 border border-sky-400/20 hover:border-sky-300/40 hover:bg-sky-400/10 text-slate-100 rounded-xl transition-all duration-200 active:scale-[0.98] font-mono text-xs text-left"
        >
          <span className="flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-orange-400" />
            <span>System Error Alert</span>
          </span>
          <span className="text-[9px] text-slate-400">Play</span>
        </button>

      </div>
    </div>
  );
}
