"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface YearSliderProps {
  currentYear: number;
  onChange: (year: number) => void;
  years?: number[];
}

export default function YearSlider({
  currentYear,
  onChange,
  years = [2000, 2004, 2008, 2012, 2016, 2020],
}: YearSliderProps) {
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    // Find the closest year in the list to snap to it, or allow smooth sliding
    // Let's snap to integers for smooth scrolling, let's snap specifically to the years array or allow any year
    onChange(val);
  };

  return (
    <div className="w-full py-6 px-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-aero-card relative overflow-hidden">
      {/* Glossy overlay */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-mono text-sky-300">Time Dial</span>
        <span className="text-2xl font-bold font-pixel text-white drop-shadow-[0_2px_4px_rgba(56,189,248,0.5)]">
          {currentYear}
        </span>
        <span className="text-xs font-mono text-emerald-300">Year Slider</span>
      </div>

      {/* Slider input container */}
      <div className="relative flex items-center mb-6">
        <input
          type="range"
          min={minYear}
          max={maxYear}
          step={1}
          value={currentYear}
          onChange={handleSliderChange}
          className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-sky-950/80 border border-sky-400/30 focus:outline-none"
          style={{
            background: `linear-gradient(to right, #0284c7 0%, #0d9488 ${
              ((currentYear - minYear) / (maxYear - minYear)) * 100
            }%, #0c1e36 ${((currentYear - minYear) / (maxYear - minYear)) * 100}%)`,
          }}
        />
        
        {/* custom slider track overlay style (webkit thumb) */}
        <style jsx global>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: radial-gradient(circle at 50% 15%, #93c5fd 0%, #3b82f6 45%, #1d4ed8 75%, #1e3a8a 100%);
            border: 2px solid #ffffff;
            box-shadow: inset 0 2px 4px rgba(255,255,255,0.6), 0 4px 10px rgba(0,0,0,0.4);
            cursor: pointer;
            transition: transform 0.1s ease;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.15);
          }
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: radial-gradient(circle at 50% 15%, #93c5fd 0%, #3b82f6 45%, #1d4ed8 75%, #1e3a8a 100%);
            border: 2px solid #ffffff;
            box-shadow: inset 0 2px 4px rgba(255,255,255,0.6), 0 4px 10px rgba(0,0,0,0.4);
            cursor: pointer;
            transition: transform 0.1s ease;
          }
          input[type="range"]::-moz-range-thumb:hover {
            transform: scale(1.15);
          }
        `}</style>
      </div>

      {/* Timeline labels */}
      <div className="flex justify-between px-1.5 text-xs font-mono">
        {years.map((year) => {
          const isActive = currentYear === year;
          return (
            <button
              key={year}
              onClick={() => onChange(year)}
              className={clsx(
                "relative flex flex-col items-center group transition-colors duration-200 focus:outline-none",
                isActive ? "text-sky-300 font-bold" : "text-slate-400 hover:text-slate-200"
              )}
            >
              {/* Tick marker */}
              <span
                className={clsx(
                  "w-1 h-3 rounded-full mb-1 transition-all duration-300",
                  isActive
                    ? "bg-sky-400 h-4 shadow-[0_0_8px_#38bdf8]"
                    : "bg-slate-500 group-hover:bg-slate-300"
                )}
              />
              <span className={isActive ? "text-sm" : "text-xs"}>{year}</span>

              {/* Orbiting background selection ring */}
              {isActive && (
                <motion.span
                  layoutId="activeTimelineTick"
                  className="absolute -top-1 w-6 h-6 rounded-full border border-sky-400/40 bg-sky-500/10 pointer-events-none z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
