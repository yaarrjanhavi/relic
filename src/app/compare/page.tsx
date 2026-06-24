"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, GitCompare } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GlossyButton from "@/components/GlossyButton";
import ComparePanel from "@/components/ComparePanel";
import { getYearData, YearData } from "@/utils/relicData";

function CompareContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [year1, setYear1] = useState(2008);
  const [year2, setYear2] = useState(2016);
  
  const [data1, setData1] = useState<YearData | null>(null);
  const [data2, setData2] = useState<YearData | null>(null);

  // Sync state with URL params if available
  useEffect(() => {
    const y1 = parseInt(searchParams.get("year1") || "2008", 10);
    const y2 = parseInt(searchParams.get("year2") || "2016", 10);
    
    if (!isNaN(y1) && y1 >= 2000 && y1 <= 2020) setYear1(y1);
    if (!isNaN(y2) && y2 >= 2000 && y2 <= 2020) setYear2(y2);
  }, [searchParams]);

  // Load datasets when states change
  useEffect(() => {
    setData1(getYearData(year1));
    setData2(getYearData(year2));
  }, [year1, year2]);

  const yearRange = Array.from({ length: 21 }).map((_, i) => 2000 + i);

  const handleYear1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseInt(e.target.value, 10);
    setYear1(val);
    router.push(`/compare?year1=${val}&year2=${year2}`, { scroll: false });
  };

  const handleYear2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseInt(e.target.value, 10);
    setYear2(val);
    router.push(`/compare?year1=${year1}&year2=${val}`, { scroll: false });
  };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 relative z-10">
      {/* Top Navigation Header */}
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

        <span className="text-sm font-mono text-white flex items-center gap-2">
          <GitCompare className="w-4 h-4 text-sky-300" /> Compare Eras
        </span>
        <div className="w-20" /> {/* spacer */}
      </div>

      {/* Selectors Card */}
      <GlassCard>
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <div className="flex flex-col gap-1.5 text-left w-full sm:w-auto">
            <label htmlFor="year1-select" className="text-xs font-mono text-sky-300 uppercase tracking-widest">
              Choose Era One
            </label>
            <select
              id="year1-select"
              value={year1}
              onChange={handleYear1Change}
              className="bg-sky-950/80 border border-sky-400/40 rounded-full px-5 py-2.5 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {yearRange.map((y) => (
                <option key={y} value={y} className="bg-sky-950 text-white">
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div className="text-lg font-bold font-pixel text-slate-400 hidden sm:block">
            VS
          </div>

          <div className="flex flex-col gap-1.5 text-left w-full sm:w-auto">
            <label htmlFor="year2-select" className="text-xs font-mono text-sky-300 uppercase tracking-widest">
              Choose Era Two
            </label>
            <select
              id="year2-select"
              value={year2}
              onChange={handleYear2Change}
              className="bg-sky-950/80 border border-sky-400/40 rounded-full px-5 py-2.5 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              {yearRange.map((y) => (
                <option key={y} value={y} className="bg-sky-950 text-white">
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </GlassCard>

      {/* Comparison Grid Panels */}
      {data1 && data2 ? (
        <ComparePanel leftData={data1} rightData={data2} />
      ) : (
        <div className="flex-1 flex items-center justify-center py-24">
          <div className="w-12 h-12 border-4 border-sky-400/20 border-t-sky-400 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center py-24">
        <div className="w-12 h-12 border-4 border-sky-400/20 border-t-sky-400 rounded-full animate-spin" />
      </div>
    }>
      <CompareContent />
    </Suspense>
  );
}
