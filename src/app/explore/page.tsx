"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Compass, Calendar, Laptop, 
  Quote, Play, Gamepad, Globe, MessageSquare 
} from "lucide-react";
import clsx from "clsx";
import GlassCard from "@/components/GlassCard";
import GlossyButton from "@/components/GlossyButton";
import YearSlider from "@/components/YearSlider";
import TimeCapsuleCard from "@/components/TimeCapsuleCard";
import ButterflySwarm from "@/components/ButterflySwarm";
import WindowsMediaPlayer from "@/components/WindowsMediaPlayer";
import Soundboard from "@/components/Soundboard";
import SotyPlayer from "@/components/SotyPlayer";
import { fetchYearDetails } from "@/utils/api";
import { YearData } from "@/utils/relicData";

function ExploreContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawYear = searchParams.get("year");
  
  const [year, setYear] = useState(2008);
  const [data, setData] = useState<YearData | null>(null);
  const [loading, setLoading] = useState(true);
  const [nudgeActive, setNudgeActive] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    const parsed = parseInt(rawYear || "2008", 10);
    if (!isNaN(parsed) && parsed >= 2000 && parsed <= 2020) {
      setYear(parsed);
    }
  }, [rawYear]);

  // Load data when year updates
  useEffect(() => {
    let active = true;
    setLoading(true);
    
    fetchYearDetails(year).then((res) => {
      if (active) {
        setData(res);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [year]);

  const handleYearChange = (newYear: number) => {
    router.push(`/explore?year=${newYear}`, { scroll: false });
  };

  const triggerNudge = () => {
    setNudgeActive(true);
    setTimeout(() => setNudgeActive(false), 400);
  };

  if (!data) return null;

  return (
    <div className={clsx(
      "flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 relative z-10 transition-transform",
      nudgeActive && "nudge-shake"
    )}>
      {/* Fluttering SVG butterflies swarm */}
      <ButterflySwarm />

      {/* Top Header Navigation */}
      <div className="flex justify-between items-center bg-white/10 border border-white/20 p-4 rounded-2xl backdrop-blur-md shadow-aero-card">
        {/* Clickable Brand Logo Home Link */}
        <div 
          onClick={() => router.push("/")} 
          className="flex items-center gap-2 cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all bg-sky-950/70 border border-sky-400/40 px-3.5 py-1.5 rounded-full shadow-aero-glass"
          title="Back to Landing Page"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-sky-200" />
          <img src="/logo.png" alt="Relic Logo" className="h-6 object-contain filter drop-shadow-[0_1px_3px_rgba(56,189,248,0.5)]" />
          <span className="font-pixel text-[9px] text-white tracking-widest ml-1 hidden sm:inline-block">RELIC</span>
        </div>

        <span className="text-sm font-mono text-white">
          Coordinates: <strong className="text-sky-300 font-pixel drop-shadow-[0_1px_4px_rgba(56,189,248,0.5)] ml-1">{year}</strong>
        </span>
        
        <GlossyButton variant="aqua" onClick={() => router.push(`/compare?year1=${year}`)} className="px-4 py-1.5 text-xs font-mono">
          Compare Eras
        </GlossyButton>
      </div>

      {/* Dynamic Slider Control */}
      <YearSlider currentYear={year} onChange={handleYearChange} />

      {/* Main Exploration Layout grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Museum Content */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-8"
            >
              {/* INTERNET MOOD SUMMARY */}
              <GlassCard className="relative overflow-hidden">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 font-mono">
                  <Compass className="w-5 h-5 text-sky-300" />
                  <span>Internet Mood Snapshot</span>
                </h3>
                
                {/* MSN Style Chat Avatar layout */}
                <div className="flex flex-col sm:flex-row gap-4 items-start bg-sky-950/50 p-4 border border-sky-400/20 rounded-2xl">
                  
                  {/* MSN Buddy icon mockup */}
                  <div className="w-14 h-14 rounded-full border-2 border-white/60 bg-gradient-to-br from-emerald-400 to-sky-500 shadow-aero-gloss flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                    <div className="w-7 h-7 rounded-full bg-sky-300/80 absolute top-2 left-2 shadow-inner" />
                    <div className="w-8 h-8 rounded-full bg-emerald-300/80 absolute bottom-1.5 right-1.5 shadow-inner" />
                    <div className="absolute inset-0 bg-aero-gloss-grad opacity-60" />
                    <div className="absolute bottom-0 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow" title="Online" />
                  </div>
                  
                  <div className="text-left">
                    <span className="text-xs font-bold text-emerald-300 block mb-1">MSN Buddy Guide:</span>
                    <p className="text-sm text-slate-100 italic leading-relaxed font-medium">
                      "{data.mood}"
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* WORLD HEADLINES & DIALOGUE CHAT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Headlines */}
                <GlassCard>
                  <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4 font-mono">
                    <span className="text-xl">📰</span>
                    <span>Major Headlines</span>
                  </h3>
                  <div className="flex flex-col gap-4 text-left">
                    {data.headlines.map((headline, idx) => (
                      <div key={idx} className="pb-3 mb-3 last:pb-0 last:mb-0">
                        <span className="text-[9px] font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-400/20 px-2 py-0.5 rounded-full inline-block mb-1">
                          {headline.category}
                        </span>
                        <h4 className="text-sm font-bold text-white mb-1 leading-snug">{headline.title}</h4>
                        <p className="text-xs text-slate-200 leading-snug">{headline.summary}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* MSN/IRC Messenger Chat */}
                <GlassCard className="flex flex-col h-full">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4 font-mono">
                    <span className="text-xl">💬</span>
                    <span>Chat Dialogue</span>
                  </h3>
                  <div className="flex-1 bg-slate-950/70 border border-white/10 rounded-xl p-4 font-mono text-xs flex flex-col justify-between min-h-[220px]">
                    <div>
                      <div className="text-[10px] text-slate-500 mb-3 pb-1 flex justify-between">
                        <span>#LOBBY_{year}</span>
                        <span className="text-emerald-400">● 2 users online</span>
                      </div>
                      
                      {data.slang[0] && (
                        <div className="flex flex-col gap-2 text-left">
                          <div>
                            <span className="text-sky-300">&lt;{data.slang[0].user1}&gt;</span> {data.slang[0].text1}
                          </div>
                          <div>
                            <span className="text-emerald-300">&lt;{data.slang[0].user2}&gt;</span> {data.slang[0].text2}
                          </div>
                        </div>
                      )}
                    </div>

                    {data.slang[0] && (
                      <div className="mt-4 pt-3 text-[11px] text-left">
                        <span className="text-sky-400 font-bold block mb-0.5">Slang Word: "{data.slang[0].word}"</span>
                        <span className="text-slate-300 leading-tight block">{data.slang[0].meaning}</span>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </div>

              {/* POPULAR WEBSITES */}
              <GlassCard>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 font-mono">
                  <span className="text-xl">🌐</span>
                  <span>Popular Websites</span>
                </h3>
                
                {/* Wayback Archive URL Search integration */}
                <div className="bg-sky-950/65 border border-sky-400/25 rounded-2xl p-4 text-left flex flex-col sm:flex-row gap-3 items-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-aero-gloss-grad opacity-10 pointer-events-none" />
                  <div className="flex-shrink-0 text-xs font-mono text-sky-200 uppercase tracking-widest font-bold">
                    🔍 Wayback Search ({year}):
                  </div>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formElements = e.currentTarget.elements;
                      const input = formElements.namedItem("wayback-url") as HTMLInputElement;
                      const inputVal = input.value.trim();
                      if (inputVal) {
                        const cleanUrl = inputVal.replace(/^https?:\/\//i, "");
                        window.open(`https://web.archive.org/web/${year}0615000000/${cleanUrl}`, "_blank");
                      }
                    }}
                    className="flex-1 w-full flex gap-2 z-10"
                  >
                    <input
                      name="wayback-url"
                      type="text"
                      placeholder="Enter any domain (e.g. google.com)"
                      className="flex-1 bg-sky-950/80 border border-sky-400/40 rounded-full px-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400 shadow-aero-inset"
                    />
                    <GlossyButton type="submit" variant="aqua" className="py-1.5 px-4 text-xs font-mono">
                      Visit Archive
                    </GlossyButton>
                  </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.websites.map((web, idx) => (
                    <div key={idx} className="bg-sky-950/50 border border-sky-400/20 rounded-xl overflow-hidden shadow-sm flex flex-col h-full hover:border-sky-300/40 transition-colors">
                      {/* Browser mock topbar */}
                      <div className="bg-sky-950/90 border-b border-sky-400/20 px-3 py-1.5 flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <div className="flex-1 bg-sky-900/60 rounded px-1.5 py-0.5 text-[9px] text-slate-400 truncate select-all font-mono ml-2">
                          {web.url}
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between text-left">
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                            {web.name}
                            <span className="text-[9px] font-mono bg-sky-900/50 text-sky-300 px-1.5 py-0.5 rounded border border-sky-400/20">
                              {web.category}
                            </span>
                          </h4>
                          <p className="text-xs text-slate-200 leading-snug">{web.description}</p>
                        </div>
                        <a 
                          href={`https://web.archive.org/web/${year}0615000000/${web.url.replace(/^https?:\/\//i, "")}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono text-sky-300 hover:text-white mt-3 block text-right hover:underline"
                        >
                          Visit Archive &rarr;
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* VIRAL VIDEOS: Emulating WMP11 */}
              <GlassCard>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 font-mono">
                  <span className="text-xl">💿</span>
                  <span>Viral Videos of {year}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                  {data.videos.map((vid, idx) => (
                    <div key={idx} className="w-full flex justify-center">
                      <WindowsMediaPlayer
                        title={vid.title}
                        youtubeId={vid.youtubeId}
                        isLocalFallback={vid.isLocalFallback}
                      />
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* GAMES & TECH SNAPSHOT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Games We Played */}
                <GlassCard>
                  <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4 font-mono">
                    <span className="text-xl">🎮</span>
                    <span>Games We Played</span>
                  </h3>
                  <div className="flex flex-col gap-3 text-left">
                    {data.games.map((game, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                        <h4 className="text-xs font-bold text-white flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase bg-emerald-950/60 border border-emerald-400/30 text-emerald-300 px-1.5 py-0.5 rounded">
                            {game.type}
                          </span>
                          {game.name}
                        </h4>
                        <p className="text-xs text-slate-200 mt-1 leading-snug">{game.description}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Technology Snapshot with Web Stats */}
                <GlassCard>
                  <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4 font-mono">
                    <span className="text-xl">📁</span>
                    <span>Tech Snapshot</span>
                  </h3>
                  
                  {/* Historical Web Stats Table */}
                  <div className="mb-4 bg-sky-950/60 border border-sky-400/25 rounded-xl p-3.5 text-left relative overflow-hidden">
                    <div className="absolute inset-0 bg-aero-gloss-grad opacity-10 pointer-events-none" />
                    <span className="text-[10px] font-mono text-sky-300 font-bold block mb-2.5 uppercase tracking-wider pb-1.5">
                      🌐 Historical Internet Stats
                    </span>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Global Users:</span>
                        <span className="font-bold text-white leading-snug">{data.stats.globalUsers}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">Top Browser:</span>
                        <span className="font-bold text-emerald-300 leading-snug">{data.stats.topBrowser}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">Avg Connection:</span>
                        <span className="font-bold text-white leading-snug">{data.stats.connectionSpeed}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block">Connection Type:</span>
                        <span className="font-bold text-sky-300 leading-snug">{data.stats.connectionType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 text-left">
                    {data.tech.map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                        <h4 className="text-xs font-bold text-white flex justify-between items-center">
                          <span>{item.name}</span>
                          <span className="text-[9px] font-mono text-sky-300 bg-sky-900/60 px-2 py-0.5 rounded-full border border-sky-400/30">
                            {item.releaseDate}
                          </span>
                        </h4>
                        <p className="text-xs text-slate-200 mt-1 leading-snug">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Collectible Time Capsule Trading Card & Soundboard */}
        <div className="lg:col-span-1 flex flex-col gap-6 items-center">
          <div className="w-full text-center lg:text-left">
            {/* Desktop Dolphin Sticker */}
            <div className="flex items-center gap-2 mb-3 bg-sky-950/50 p-2 rounded-xl border border-sky-400/20 max-w-fit mx-auto lg:mx-0">
              <span className="text-xl animate-bounce">🐬</span>
              <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">AERO COLLECTIBLE</span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 font-mono flex items-center justify-center lg:justify-start gap-2">
              <span>Time Card & Desk</span>
            </h3>
            <p className="text-xs text-slate-200 max-w-sm mx-auto lg:mx-0 leading-relaxed mb-6">
              Move your mouse cursor over the card to rotate it. Play with the soundboard below to hear synthesized retro soundwaves!
            </p>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={year}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center mb-2"
            >
              <TimeCapsuleCard data={data} />
            </motion.div>
          </AnimatePresence>

          {/* Soundboard Component */}
          <Soundboard onNudge={triggerNudge} />

          {/* Song of the Year Player */}
          <SotyPlayer year={year} />
        </div>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center py-24">
        <div className="w-16 h-16 border-4 border-sky-400/20 border-t-sky-400 rounded-full animate-spin" />
      </div>
    }>
      <ExploreContent />
    </Suspense>
  );
}
