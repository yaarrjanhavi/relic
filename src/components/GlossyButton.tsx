import React from "react";
import clsx from "clsx";

interface GlossyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "aqua" | "emerald" | "orange" | "silver";
  className?: string;
  disabled?: boolean;
}

export default function GlossyButton({
  children,
  onClick,
  type = "button",
  variant = "aqua",
  className,
  disabled = false,
}: GlossyButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "emerald":
        return "bg-gradient-to-b from-emerald-400 via-emerald-600 to-emerald-800 text-white border-emerald-500 shadow-aero-button hover:from-emerald-300 hover:to-emerald-700 hover:shadow-aero-button-hover focus:ring-emerald-400";
      case "orange":
        return "bg-gradient-to-b from-orange-400 via-orange-500 to-orange-700 text-white border-orange-500 shadow-aero-button hover:from-orange-300 hover:to-orange-600 hover:shadow-aero-button-hover focus:ring-orange-400";
      case "silver":
        return "bg-gradient-to-b from-white via-zinc-200 to-zinc-400 text-zinc-800 border-zinc-300 shadow-aero-button hover:from-zinc-100 hover:to-zinc-300 hover:shadow-aero-button-hover focus:ring-zinc-400";
      case "aqua":
      default:
        return "bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700 text-white border-blue-400 shadow-aero-button hover:from-sky-300 hover:to-blue-600 hover:shadow-aero-button-hover focus:ring-sky-400";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative rounded-full px-6 py-2.5 font-medium border text-sm transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-950",
        "active:scale-95 active:shadow-inner",
        "disabled:opacity-50 disabled:pointer-events-none disabled:scale-100",
        "flex items-center justify-center gap-2",
        getVariantStyles(),
        className
      )}
    >
      {/* Top half shine */}
      <span className="absolute top-0.5 left-1 right-1 h-3.5 bg-gradient-to-b from-white/45 to-white/5 rounded-t-full pointer-events-none" />
      
      {/* Dynamic glow overlay */}
      <span className="absolute inset-0 w-full h-full bg-sky-200/0 hover:bg-white/10 transition-all rounded-full pointer-events-none" />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
        {children}
      </span>
    </button>
  );
}
