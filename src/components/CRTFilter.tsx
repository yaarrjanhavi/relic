"use client";

import React, { useState, useEffect } from "react";
import { Monitor, Tv } from "lucide-react";

interface CRTFilterProps {
  children: React.ReactNode;
}

export default function CRTFilter({ children }: CRTFilterProps) {
  const [crtActive, setCrtActive] = useState(false);

  // Sync state with localstorage if desired
  useEffect(() => {
    const saved = localStorage.getItem("relic-crt-mode");
    if (saved === "true") {
      setCrtActive(true);
    }
  }, []);

  const toggleCRT = () => {
    const nextState = !crtActive;
    setCrtActive(nextState);
    localStorage.setItem("relic-crt-mode", String(nextState));
  };

  return (
    <div className="relative min-h-screen flex flex-col w-full">
      {/* CRT Switch floating button */}
      <button
        onClick={toggleCRT}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-2 p-3 rounded-full border border-sky-400/40 bg-sky-950/70 text-sky-200 hover:text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        title="Toggle Retro CRT Filter"
      >
        {crtActive ? (
          <>
            <Monitor className="w-5 h-5" />
            <span className="text-xs font-mono">Aero Mode</span>
          </>
        ) : (
          <>
            <Tv className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-mono">CRT Mode</span>
          </>
        )}
      </button>

      {/* Screen container */}
      <div
        className={crtActive ? "crt-bezel crt-screen flex-1 w-full" : "flex-1 w-full"}
      >
        {crtActive && <div className="crt-scanlines pointer-events-none" />}
        <div className={crtActive ? "relative z-10 filter contrast-[1.08] brightness-[1.02] saturate-[1.12]" : ""}>
          {children}
        </div>
      </div>
    </div>
  );
}
