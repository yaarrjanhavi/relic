"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Compass, ArrowRight, GitCompare, MessageSquare } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GlossyButton from "@/components/GlossyButton";
import ButterflySwarm from "@/components/ButterflySwarm";
import { getRandomYear } from "@/utils/relicData";

export default function Home() {
  const router = useRouter();
  const [yearInput, setYearInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedYear = parseInt(yearInput.trim(), 10);
    
    if (isNaN(parsedYear) || parsedYear < 2000 || parsedYear > 2020) {
      setErrorMsg("Please enter a year between 2000 and 2020");
      return;
    }
    
    router.push(`/explore?year=${parsedYear}`);
  };

  const handleRandomTravel = () => {
    const randomYear = getRandomYear();
    router.push(`/explore?year=${randomYear}`);
  };

  const suggestionYears = [2004, 2008, 2012, 2016];

  return (
    <main className="flex-1 flex flex-col justify-center items-center px-4 py-16 relative overflow-hidden">
      {/* Fluttering SVG butterflies swarm */}
      <ButterflySwarm />

      {/* Background soft sun glow spot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/20 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Outer wrapper */}
      <div className="w-full max-w-2xl text-center z-10 flex flex-col items-center">
        
        {/* Desktop Dolphin Icon Indicator */}
        <motion.div 
          className="mb-6 flex flex-col items-center cursor-pointer group"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 bg-sky-950/50 border border-sky-400/30 rounded-2xl flex items-center justify-center shadow-aero-glass backdrop-blur-md relative overflow-hidden group-hover:scale-105 transition-transform duration-200">
            {/* Gloss shine */}
            <div className="absolute inset-0 bg-aero-gloss-grad opacity-50" />
            <span className="text-3xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">🐬</span>
          </div>
          <span className="text-[10px] font-mono text-sky-200 mt-1 uppercase tracking-widest bg-sky-950/60 border border-sky-400/20 px-2.5 py-0.5 rounded-full">
            relic.exe
          </span>
        </motion.div>

        {/* Logo and title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-4 flex flex-col items-center"
        >
          <span className="text-[10px] font-bold font-mono tracking-[0.3em] text-emerald-300 uppercase block mb-4 animate-shine-glow">
            ★ SYSTEM TEMPORAL EXPEDITION ★
          </span>
          
          {/* User Logo Asset with dynamic glossy glass border highlights */}
          <div className="relative p-4 rounded-3xl bg-white/5 border border-white/20 shadow-aero-glass max-w-[280px] overflow-hidden mb-4">
            <div className="absolute inset-0 bg-aero-gloss-grad opacity-40 pointer-events-none" />
            <img 
              src="/logo.png" 
              alt="Relic Logo" 
              className="max-h-24 object-contain filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white font-pixel select-none drop-shadow-[0_4px_10px_rgba(255,255,255,0.4)]">
            RELIC
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-white font-bold mb-10 tracking-wide max-w-lg aero-text-shadow"
        >
          Explore the internet as it once was.
        </motion.p>

        {/* Main Input Card (Windows Installer Dialog look) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-md mb-8"
        >
          <GlassCard className="p-8 border-t-white/50 border-l-white/40">
            {/* Small XP loading banner mockup */}
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-sky-200 flex items-center gap-1.5 font-bold">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                TIMELINE COORDINATES
              </span>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_4px_#34d399]" />
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_4px_#38bdf8]" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label htmlFor="year-input" className="text-left text-xs font-mono text-white uppercase tracking-widest block mb-1">
                Destination Coordinates (2000 - 2020)
              </label>
              
              <div className="flex gap-3 relative">
                <input
                  id="year-input"
                  type="text"
                  pattern="[0-9]*"
                  maxLength={4}
                  placeholder="e.g. 2008"
                  value={yearInput}
                  onChange={(e) => {
                    setYearInput(e.target.value);
                    setErrorMsg("");
                  }}
                  className="flex-1 bg-sky-950/90 border border-sky-400/40 rounded-full px-5 py-3 text-white placeholder-sky-300/40 font-mono text-base focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-aero-inset"
                />
                
                <GlossyButton type="submit" variant="aqua" className="h-full px-7">
                  Go <ArrowRight className="w-4 h-4" />
                </GlossyButton>
              </div>

              {errorMsg && (
                <span className="text-xs text-orange-300 text-left font-mono mt-1 animate-pulse">
                  ⚠ {errorMsg}
                </span>
              )}
            </form>

            {/* Quick Suggestions (Orb Buttons) */}
            <div className="mt-8 pt-6 border-t border-white/10 text-left">
              <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mb-3">
                Temporal Anchor Presets
              </span>
              <div className="grid grid-cols-4 gap-3">
                {suggestionYears.map((year, idx) => {
                  // Alternate orb colors (Aqua, Emerald, Orange, Aqua)
                  const orbStyle = 
                    idx === 1 
                      ? "aero-emerald-orb hover:brightness-110 text-white" 
                      : idx === 2 
                      ? "aero-orange-orb hover:brightness-110 text-white" 
                      : "aero-aqua-orb hover:brightness-110 text-white";
                  return (
                    <button
                      key={year}
                      onClick={() => router.push(`/explore?year=${year}`)}
                      className={`py-2 rounded-full text-xs font-mono font-bold shadow-lg border border-white/20 active:scale-95 transition-all duration-200 ${orbStyle}`}
                    >
                      {year}
                    </button>
                  );
                })}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
        >
          <GlossyButton
            variant="emerald"
            onClick={handleRandomTravel}
            className="flex-1 py-3 text-xs font-mono"
          >
            <Compass className="w-4 h-4" />
            Take Me Somewhere
          </GlossyButton>

          <GlossyButton
            variant="silver"
            onClick={() => router.push("/compare")}
            className="flex-1 py-3 text-xs font-mono"
          >
            <GitCompare className="w-4 h-4" />
            Compare Eras
          </GlossyButton>
        </motion.div>

        {/* Introduction / Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xs text-white font-mono max-w-sm leading-relaxed bg-black/45 px-4 py-2 border border-white/10 backdrop-blur-sm rounded-xl mt-16 aero-text-shadow"
        >
          A digital time capsule mapping web aesthetics, slang, and devices. Designed with glossy orbs, sways, and butterflies in 2026.
        </motion.p>
      </div>
    </main>
  );
}
