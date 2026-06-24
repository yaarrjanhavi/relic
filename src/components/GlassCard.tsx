import React from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glossy?: boolean;
  onClick?: () => void;
  id?: string;
}

export default function GlassCard({
  children,
  className,
  hoverable = false,
  glossy = true,
  onClick,
  id,
}: GlassCardProps) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={clsx(
        "aero-glass-panel rounded-2xl relative overflow-hidden transition-all duration-300",
        glossy && "aero-glossy-reflection",
        hoverable && "hover:translate-y-[-4px] hover:shadow-aero-button-hover cursor-pointer hover:border-sky-300/40",
        onClick && "cursor-pointer active:scale-[0.98]",
        className
      )}
    >
      {/* Light glow corner indicator */}
      <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-white to-transparent opacity-80" />
      <div className="absolute top-0 left-0 w-[2px] h-12 bg-gradient-to-b from-white to-transparent opacity-80" />
      
      {/* Dynamic back reflection texture */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
      
      {/* Inner Card Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
