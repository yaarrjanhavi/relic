"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

interface Sparkle {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
}

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate bubbles only on client side to avoid hydration mismatch
    const generatedBubbles: Bubble[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      size: Math.random() * 90 + 35, // sizes between 35px and 125px
      x: Math.random() * 100, // percentage of screen width
      y: Math.random() * 100, // percentage of screen height
      duration: Math.random() * 24 + 18, // 18s to 42s
      delay: Math.random() * -30, // Negative delay so they start scattered
    }));
    setBubbles(generatedBubbles);

    // Generate green sparkles/stars resembling reference images
    const generatedSparkles: Sparkle[] = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      size: Math.random() * 12 + 6,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * -10,
    }));
    setSparkles(generatedSparkles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Sun Ray Beams (radiating from top right, as in reference image 1) */}
      <div 
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(56,189,248,0.4) 30%, rgba(34,197,94,0.1) 60%, rgba(255,255,255,0) 100%)",
          transform: "translate(20%, -20%)"
        }}
      />
      
      {/* Sun Core Light Spot */}
      <div 
        className="absolute top-8 right-8 w-40 h-40 rounded-full pointer-events-none mix-blend-screen opacity-90 animate-shine-glow"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, #a5f3fc 20%, #38bdf8 50%, rgba(255,255,255,0) 80%)",
          boxShadow: "0 0 80px rgba(56, 189, 248, 0.6)"
        }}
      />

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => {
        // Calculate a light mouse repulsion offset
        const rawOffset = 0.05; // intensity
        const centerX = (bubble.x / 100) * (typeof window !== "undefined" ? window.innerWidth : 1000);
        const centerY = (bubble.y / 100) * (typeof window !== "undefined" ? window.innerHeight : 800);
        
        const dx = mousePos.x - centerX;
        const dy = mousePos.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let repulseX = 0;
        let repulseY = 0;
        
        if (distance < 280) {
          const force = (280 - distance) / 280;
          repulseX = -dx * force * rawOffset;
          repulseY = -dy * force * rawOffset;
        }

        return (
          <motion.div
            key={bubble.id}
            className="glass-bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
            }}
            animate={{
              y: ["0vh", "-120vh"],
              x: ["0vw", `${Math.sin(bubble.id) * 8}vw`, "0vw"],
              translateX: repulseX,
              translateY: repulseY,
            }}
            transition={{
              y: {
                duration: bubble.duration,
                repeat: Infinity,
                ease: "linear",
                delay: bubble.delay,
              },
              x: {
                duration: bubble.duration * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              translateX: { type: "spring", stiffness: 45, damping: 18 },
              translateY: { type: "spring", stiffness: 45, damping: 18 },
            }}
          />
        );
      })}

      {/* Sparkling Twinkles (Meadow/Aero style) */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="aero-sparkle"
          style={{
            width: sp.size,
            height: sp.size,
            left: `${sp.x}%`,
            top: `${sp.y}%`,
            animationDelay: `${sp.delay}s`,
            background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(74,222,128,0.7) 40%, rgba(255,255,255,0) 80%)"
          }}
        />
      ))}
      
      {/* Light Aurora shift */}
      <div className="absolute inset-0 bg-aero-aurora animate-aurora-shift opacity-50 bg-[length:200%_200%] mix-blend-screen pointer-events-none" />
    </div>
  );
}
