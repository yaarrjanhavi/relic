"use client";

import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GlossyButton from "@/components/GlossyButton";

export default function ExploreError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Glass dialogue resembling standard Vista Error warning */}
        <GlassCard className="p-8 text-center border-red-500/30">
          <div className="w-16 h-16 rounded-full bg-red-950/50 border border-red-500/50 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          
          <h2 className="text-xl font-bold text-white mb-2 font-mono">
            TEMPORAL FLUX ERROR
          </h2>
          
          <p className="text-xs text-slate-400 font-mono mb-6">
            Error Signature: {error.digest || "ERR_AERO_CRASH"}
          </p>

          <p className="text-sm text-slate-200 mb-8 leading-relaxed">
            The space-time coordinates for your destination could not be stabilized. This may be caused by an API query timeout or network disconnection.
          </p>

          <div className="flex gap-4 justify-center">
            <GlossyButton variant="silver" onClick={() => window.location.href = "/"}>
              Go Home
            </GlossyButton>
            <GlossyButton variant="aqua" onClick={reset}>
              <RefreshCw className="w-4 h-4" /> Try Again
            </GlossyButton>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
