"use client";

import React from "react";
import { YearData } from "@/utils/relicData";
import GlassCard from "./GlassCard";
import { Calendar, Laptop, Quote, Compass, HelpCircle } from "lucide-react";

interface ComparePanelProps {
  leftData: YearData;
  rightData: YearData;
}

export default function ComparePanel({ leftData, rightData }: ComparePanelProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {/* Left Year Column */}
      <div className="flex flex-col gap-6">
        <div className="text-center py-4 bg-sky-950/40 border border-sky-400/20 rounded-2xl backdrop-blur-md">
          <span className="text-sm font-mono text-sky-300">ERA ONE</span>
          <h2 className="text-6xl font-extrabold font-pixel text-white mt-1 drop-shadow-[0_2px_4px_rgba(2,132,199,0.8)]">
            {leftData.year}
          </h2>
          <span className="text-xs bg-sky-900/60 border border-sky-400/30 px-3 py-1 rounded-full text-sky-200 mt-2 inline-block">
            {leftData.moodBadge}
          </span>
        </div>

        {/* Mood Comparison */}
        <GlassCard className="flex-1">
          <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-sky-400" />
            The Internet Mood
          </h3>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {leftData.mood}
          </p>
        </GlassCard>

        {/* Headlines */}
        <GlassCard>
          <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-sky-400" />
            Major Events
          </h3>
          <ul className="flex flex-col gap-3">
            {leftData.headlines.slice(0, 3).map((h, i) => (
              <li key={i} className="border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block mb-0.5">
                  {h.category}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">{h.title}</h4>
                <p className="text-xs text-slate-300 leading-snug">{h.summary}</p>
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* Slang Chat */}
        <GlassCard>
          <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2 mb-4">
            <Quote className="w-5 h-5 text-sky-400" />
            Slang & Dialogue
          </h3>
          <div className="bg-slate-950/60 border border-white/10 rounded-xl p-4 font-mono text-xs flex flex-col gap-2 max-h-[200px] overflow-y-auto">
            <div className="text-[10px] text-slate-500 mb-2 border-b border-white/5 pb-1">
              Channel: #{leftData.slang[0]?.channel.toUpperCase() || "CHAT"}
            </div>
            {leftData.slang[0] ? (
              <>
                <div className="text-sky-300">
                  &lt;{leftData.slang[0].user1}&gt; {leftData.slang[0].text1}
                </div>
                <div className="text-emerald-300">
                  &lt;{leftData.slang[0].user2}&gt; {leftData.slang[0].text2}
                </div>
                <div className="mt-2 text-[10px] text-slate-400 italic">
                  Key slang word: <span className="text-white font-bold">"{leftData.slang[0].word}"</span> - {leftData.slang[0].meaning}
                </div>
              </>
            ) : (
              <div className="text-slate-500 italic">No slang logs found.</div>
            )}
          </div>
        </GlassCard>

        {/* Tech */}
        <GlassCard>
          <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2 mb-4">
            <Laptop className="w-5 h-5 text-sky-400" />
            Trending Tech
          </h3>
          <div className="flex flex-col gap-3">
            {leftData.tech.slice(0, 2).map((t, i) => (
              <div key={i} className="flex gap-3 bg-white/5 border border-white/10 p-3 rounded-xl">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white flex justify-between items-center">
                    <span>{t.name}</span>
                    <span className="text-[10px] font-mono text-sky-300 bg-sky-900/60 px-2 py-0.5 rounded-full border border-sky-400/30">
                      {t.releaseDate}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-snug">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Right Year Column */}
      <div className="flex flex-col gap-6">
        <div className="text-center py-4 bg-teal-950/40 border border-teal-400/20 rounded-2xl backdrop-blur-md">
          <span className="text-sm font-mono text-teal-300">ERA TWO</span>
          <h2 className="text-6xl font-extrabold font-pixel text-white mt-1 drop-shadow-[0_2px_4px_rgba(13,148,136,0.8)]">
            {rightData.year}
          </h2>
          <span className="text-xs bg-teal-900/60 border border-teal-400/30 px-3 py-1 rounded-full text-teal-200 mt-2 inline-block">
            {rightData.moodBadge}
          </span>
        </div>

        {/* Mood Comparison */}
        <GlassCard className="flex-1">
          <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2 mb-3">
            <Compass className="w-5 h-5 text-teal-400" />
            The Internet Mood
          </h3>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {rightData.mood}
          </p>
        </GlassCard>

        {/* Headlines */}
        <GlassCard>
          <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-teal-400" />
            Major Events
          </h3>
          <ul className="flex flex-col gap-3">
            {rightData.headlines.slice(0, 3).map((h, i) => (
              <li key={i} className="border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block mb-0.5">
                  {h.category}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">{h.title}</h4>
                <p className="text-xs text-slate-300 leading-snug">{h.summary}</p>
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* Slang Chat */}
        <GlassCard>
          <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2 mb-4">
            <Quote className="w-5 h-5 text-teal-400" />
            Slang & Dialogue
          </h3>
          <div className="bg-slate-950/60 border border-white/10 rounded-xl p-4 font-mono text-xs flex flex-col gap-2 max-h-[200px] overflow-y-auto">
            <div className="text-[10px] text-slate-500 mb-2 border-b border-white/5 pb-1">
              Channel: #{rightData.slang[0]?.channel.toUpperCase() || "CHAT"}
            </div>
            {rightData.slang[0] ? (
              <>
                <div className="text-sky-300">
                  &lt;{rightData.slang[0].user1}&gt; {rightData.slang[0].text1}
                </div>
                <div className="text-emerald-300">
                  &lt;{rightData.slang[0].user2}&gt; {rightData.slang[0].text2}
                </div>
                <div className="mt-2 text-[10px] text-slate-400 italic">
                  Key slang word: <span className="text-white font-bold">"{rightData.slang[0].word}"</span> - {rightData.slang[0].meaning}
                </div>
              </>
            ) : (
              <div className="text-slate-500 italic">No slang logs found.</div>
            )}
          </div>
        </GlassCard>

        {/* Tech */}
        <GlassCard>
          <h3 className="text-lg font-bold text-teal-300 flex items-center gap-2 mb-4">
            <Laptop className="w-5 h-5 text-teal-400" />
            Trending Tech
          </h3>
          <div className="flex flex-col gap-3">
            {rightData.tech.slice(0, 2).map((t, i) => (
              <div key={i} className="flex gap-3 bg-white/5 border border-white/10 p-3 rounded-xl">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white flex justify-between items-center">
                    <span>{t.name}</span>
                    <span className="text-[10px] font-mono text-teal-300 bg-teal-900/60 px-2 py-0.5 rounded-full border border-teal-400/30">
                      {t.releaseDate}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-snug">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
