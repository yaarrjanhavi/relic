"use client";

import React, { useRef, useState } from "react";
import { Download, Sparkles, Trophy, Quote, Calendar } from "lucide-react";
import { YearData } from "@/utils/relicData";
import GlossyButton from "./GlossyButton";

interface TimeCapsuleCardProps {
  data: YearData;
}

export default function TimeCapsuleCard({ data }: TimeCapsuleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within card
    const y = e.clientY - rect.top;  // y coordinate within card
    
    // Calculate rotation (-15 to 15 degrees)
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 15;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 15;
    
    // Calculate shine percentage
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, shineX, shineY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
  };

  const triggerExport = () => {
    // Generate a downloadable HTML/SVG file representing the collectible card
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0284c7" />
            <stop offset="50%" stop-color="#0d9488" />
            <stop offset="100%" stop-color="#0d1e36" />
          </linearGradient>
          <linearGradient id="orb" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0.3" />
          </linearGradient>
        </defs>
        
        <!-- Card Background -->
        <rect width="400" height="600" rx="24" fill="url(#bg)" stroke="#ffffff" stroke-width="3" stroke-opacity="0.3"/>
        
        <!-- Vista Wave Design -->
        <path d="M 0 250 Q 150 150 400 200 L 400 600 L 0 600 Z" fill="url(#orb)" />
        
        <!-- Holographic Border -->
        <rect x="15" y="15" width="370" height="570" rx="16" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="10 5" opacity="0.6"/>

        <!-- Header -->
        <text x="200" y="70" font-family="'Courier New', monospace" font-weight="bold" font-size="42" fill="#ffffff" text-anchor="middle" letter-spacing="2">${data.year}</text>
        <text x="200" y="100" font-family="sans-serif" font-size="14" fill="#a5f3fc" text-anchor="middle" font-style="italic">${data.moodBadge}</text>
        
        <!-- Rarity Badge -->
        <rect x="150" y="120" width="100" height="24" rx="12" fill="#e0f2fe" opacity="0.2"/>
        <text x="200" y="136" font-family="sans-serif" font-weight="bold" font-size="12" fill="#38bdf8" text-anchor="middle">RARITY: ${data.rarityScore}%</text>

        <!-- Main Landmark -->
        <text x="35" y="200" font-family="sans-serif" font-weight="bold" font-size="16" fill="#38bdf8">KEY EVENT</text>
        <text x="35" y="225" font-family="sans-serif" font-size="14" fill="#ffffff" width="330">
          ${data.headlines[0]?.title.substring(0, 45) || "A Year to Remember"}...
        </text>

        <!-- Internet Slang -->
        <text x="35" y="290" font-family="sans-serif" font-weight="bold" font-size="16" fill="#38bdf8">IRC / MSN SLANG</text>
        <text x="35" y="315" font-family="'Courier New', monospace" font-size="18" fill="#a7f3d0" font-weight="bold">"${data.slang[0]?.word || "N/A"}"</text>
        <text x="35" y="340" font-family="sans-serif" font-size="12" fill="#94a3b8" width="330">${data.slang[0]?.meaning || "No meaning documented"}</text>

        <!-- Pop Tech -->
        <text x="35" y="400" font-family="sans-serif" font-weight="bold" font-size="16" fill="#38bdf8">TRENDING TECH</text>
        <text x="35" y="425" font-family="sans-serif" font-weight="bold" font-size="14" fill="#ffffff">${data.tech[0]?.name || "iPod Era"}</text>
        <text x="35" y="445" font-family="sans-serif" font-size="12" fill="#cbd5e1">${data.tech[0]?.description.substring(0, 60) || ""}...</text>

        <!-- Footer Card Details -->
        <rect x="25" y="500" width="350" height="70" rx="10" fill="#000000" fill-opacity="0.3"/>
        <text x="200" y="525" font-family="sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">RELIC TIME DIGITAL ARCHIVE</text>
        <text x="200" y="545" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">No. #${data.year} - Collected digitally via Vercel Host</text>
      </svg>
    `;

    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Relic_Capsule_${data.year}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[340px] md:max-w-[360px] mx-auto print:block">
      {/* 3D Holo Card container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl transition-all duration-150 cursor-pointer select-none bg-sky-950/80 border-2 border-white/20"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.02)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic shifting shine overlay */}
        <div
          className="absolute inset-0 z-30 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%), 
                        linear-gradient(${tilt.rotateY * 4}deg, rgba(56, 189, 248, 0.4) 0%, rgba(16, 185, 129, 0.4) 50%, rgba(249, 115, 22, 0.4) 100%)`,
          }}
        />

        {/* Glossy top-half curve highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-3xl z-20 pointer-events-none" />

        {/* Aurora wave pattern */}
        <div className="absolute -bottom-10 -left-10 -right-10 h-2/3 bg-gradient-to-tr from-sky-400/30 via-emerald-400/20 to-transparent blur-xl pointer-events-none z-0" />

        {/* Card Border glow */}
        <div className="absolute inset-2 border border-sky-400/30 rounded-2xl pointer-events-none z-20" />

        {/* Card Content Wrapper (preserve-3d) */}
        <div className="relative z-10 p-6 flex flex-col justify-between h-full" style={{ transform: "translateZ(30px)" }}>
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-sky-300 tracking-widest uppercase block mb-1">Time Capsule</span>
              <h3 className="text-5xl font-extrabold tracking-wider text-white font-pixel drop-shadow-[0_2px_4px_rgba(2,132,199,0.8)]">
                {data.year}
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <span className="flex items-center gap-1 text-xs text-sky-200 bg-sky-900/60 border border-sky-400/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                Score: {data.rarityScore}%
              </span>
            </div>
          </div>

          {/* Core capsule statistics */}
          <div className="flex-1 flex flex-col justify-center gap-4 my-4 text-left">
            {/* Headlines */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs text-sky-300 font-bold mb-1">
                <Calendar className="w-3.5 h-3.5" />
                KEY HISTORICAL FACT
              </div>
              <p className="text-xs text-slate-100 font-medium leading-relaxed">
                {data.headlines[0]?.title || "A historical year."}
              </p>
            </div>

            {/* Slang */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs text-sky-300 font-bold mb-1">
                <Quote className="w-3.5 h-3.5" />
                POPULAR PHRASE
              </div>
              <p className="text-lg font-bold font-retro text-emerald-300 leading-none">
                "{data.slang[0]?.word || "N/A"}"
              </p>
              <p className="text-[10px] text-slate-300 mt-1">
                {data.slang[0]?.meaning || ""}
              </p>
            </div>

            {/* Tech */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-xs text-sky-300 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                TRENDING TECHNOLOGY
              </div>
              <p className="text-xs text-slate-100 font-bold">
                {data.tech[0]?.name || "iPod Mini"}
              </p>
              <p className="text-[10px] text-slate-300 leading-snug">
                {data.tech[0]?.description.substring(0, 75) || ""}...
              </p>
            </div>
          </div>

          {/* Card footer details */}
          <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-slate-400">
            <span>RELIC TIME EXPEDITIONS</span>
            <span>NO. #{data.year}</span>
          </div>
        </div>
      </div>

      {/* Action button */}
      <GlossyButton
        variant="aqua"
        onClick={triggerExport}
        className="w-full text-xs font-mono py-2"
      >
        <Download className="w-4 h-4" />
        Download Collectible Card
      </GlossyButton>
    </div>
  );
}
