import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aero: {
          light: "#e0f2fe", // Light aqua backdrop
          sky: "#38bdf8",   // Sky blue
          blue: "#0284c7",  // Windows Vista royal blue
          deep: "#0369a1",  // Deeper blue
          teal: "#0d9488",  // Aqua teal
          emerald: "#059669", // Vista green accent
          grass: "#16a34a", // Grass green (XP style)
          orange: "#ea580c", // Windows Vista orange select highlight
          yellow: "#ca8a04", // Sun highlight
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        retro: ["var(--font-retro)", "Courier New", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        "aero-glass": "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
        "aero-card": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(0, 50, 120, 0.15)",
        "aero-inset": "inset 0 2px 8px 0 rgba(0, 0, 0, 0.08)",
        "aero-gloss": "inset 0 12px 12px -4px rgba(255, 255, 255, 0.6), inset 0 -4px 12px 0 rgba(0, 0, 0, 0.05), 0 4px 12px 0 rgba(0, 0, 0, 0.1)",
        "aero-button": "inset 0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 0 rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "aero-button-hover": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.8), inset 0 -2px 0 0 rgba(0, 0, 0, 0.08), 0 10px 15px -3px rgba(14, 165, 233, 0.3), 0 4px 6px -4px rgba(14, 165, 233, 0.3)",
      },
      backgroundImage: {
        "aero-aurora": "radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
        "aero-gloss-grad": "linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.02) 50%, rgba(255, 255, 255, 0.15) 100%)",
        "aero-aqua": "linear-gradient(180deg, #5ac8fa 0%, #34aadc 40%, #007aff 50%, #005ec4 100%)",
        "aero-grass-bg": "linear-gradient(180deg, #9ae6b4 0%, #48bb78 50%, #2f855a 100%)",
        "aero-silver": "linear-gradient(180deg, #ffffff 0%, #f2f2f2 45%, #e6e6e6 50%, #cccccc 100%)",
      },
      animation: {
        "float-slow": "floatSlow 18s ease-in-out infinite",
        "float-medium": "floatMedium 12s ease-in-out infinite",
        "float-fast": "floatFast 8s ease-in-out infinite",
        "aurora-shift": "auroraShift 25s ease infinite alternate",
        "scanline-scroll": "scanlineScroll 8s linear infinite",
        "shine-glow": "shineGlow 3s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "33%": { transform: "translateY(-40px) translateX(20px) scale(1.05)" },
          "66%": { transform: "translateY(-20px) translateX(-20px) scale(0.95)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "40%": { transform: "translateY(-60px) translateX(-30px) scale(0.92)" },
          "70%": { transform: "translateY(-30px) translateX(35px) scale(1.08)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "50%": { transform: "translateY(-80px) translateX(40px) scale(1.12)" },
        },
        auroraShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        scanlineScroll: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" },
        },
        shineGlow: {
          "0%, 100%": { opacity: "0.5", filter: "brightness(1)" },
          "50%": { opacity: "0.85", filter: "brightness(1.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
