"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Butterfly {
  id: number;
  size: number;
  startX: number;
  startY: number;
  color: string;
  duration: number;
}

export default function ButterflySwarm() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    const list: Butterfly[] = [
      { id: 1, size: 28, startX: 10, startY: 60, color: "#3b82f6", duration: 15 }, // Vista Blue
      { id: 2, size: 22, startX: 75, startY: 45, color: "#10b981", duration: 18 }, // Meadow Green
      { id: 3, size: 25, startX: 30, startY: 20, color: "#f97316", duration: 22 }, // Solar Orange
      { id: 4, size: 20, startX: 85, startY: 70, color: "#a855f7", duration: 16 }, // Purple Twilight
    ];
    setButterflies(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {butterflies.map((bf) => {
        // SVG representation of a flapping butterfly
        return (
          <motion.div
            key={bf.id}
            className="absolute"
            style={{
              width: bf.size,
              height: bf.size,
              left: `${bf.startX}%`,
              top: `${bf.startY}%`,
            }}
            animate={{
              // Floating random path
              x: [0, 80, -60, 40, 0],
              y: [0, -120, -40, -160, 0],
              rotate: [0, 45, -25, 30, 0],
            }}
            transition={{
              duration: bf.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              viewBox="0 0 64 64"
              width="100%"
              height="100%"
              className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Left Wing */}
              <path
                d="M 32 32 C 15 15 5 20 10 38 C 12 45 25 45 32 35 Z"
                fill={bf.color}
                fillOpacity="0.85"
                stroke="#ffffff"
                strokeWidth="1.5"
                className="butterfly-wing-left"
              />
              <path
                d="M 32 32 C 20 25 15 30 20 38 Z"
                fill="#ffffff"
                fillOpacity="0.4"
                className="butterfly-wing-left"
              />

              {/* Right Wing */}
              <path
                d="M 32 32 C 49 15 59 20 54 38 C 52 45 39 45 32 35 Z"
                fill={bf.color}
                fillOpacity="0.85"
                stroke="#ffffff"
                strokeWidth="1.5"
                className="butterfly-wing-right"
              />
              <path
                d="M 32 32 C 44 25 49 30 44 38 Z"
                fill="#ffffff"
                fillOpacity="0.4"
                className="butterfly-wing-right"
              />

              {/* Body */}
              <path
                d="M 31 16 C 31 16 32 12 33 16 L 33 46 C 33 46 32 48 31 46 Z"
                fill="#27272a"
              />
              
              {/* Antennae */}
              <path
                d="M 31 16 Q 26 8 24 10"
                fill="none"
                stroke="#27272a"
                strokeWidth="1"
              />
              <path
                d="M 33 16 Q 38 8 40 10"
                fill="none"
                stroke="#27272a"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
