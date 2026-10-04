import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-sm mb-6 animate-pulse-slow">
      <Sparkles className="h-3.5 w-3.5 text-amber-400" />
      <span>Next-Gen Autonomous Candidate Interviews • Real-Time Voice & Rubrics</span>
    </div>
  );
}
