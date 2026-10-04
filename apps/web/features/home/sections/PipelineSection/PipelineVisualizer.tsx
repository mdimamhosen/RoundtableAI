import { CheckCircle2, ArrowRight } from "lucide-react";

export function PipelineVisualizer() {
  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-surface-100/80 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between h-full">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Live Studio Telemetry</span>
        <h3 className="text-2xl font-bold text-white mt-1">Autonomous Quality Scoring</h3>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
          Every photo passing through ProofDesk is evaluated against 28 aesthetic & technical metrics before automatic delivery or queue routing.
        </p>

        <div className="mt-6 space-y-3 font-mono text-xs">
          <div className="p-3 rounded-lg bg-surface-200/60 border border-white/5 flex items-center justify-between">
            <span className="text-slate-300">Clipping & Dynamic Range</span>
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5" /> 99.4% Pass
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-200/60 border border-white/5 flex items-center justify-between">
            <span className="text-slate-300">Skin Texture Frequency Preserved</span>
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5" /> 98.9% Pass
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-200/60 border border-white/5 flex items-center justify-between">
            <span className="text-slate-300">Color Cast Deviation (Delta-E)</span>
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              &lt; 0.62 Normal
            </span>
          </div>

          <div className="p-3 rounded-lg bg-surface-200/60 border border-white/5 flex items-center justify-between">
            <span className="text-slate-300">Ghost Mannequin Alignment</span>
            <span className="text-amber-400 flex items-center gap-1 font-semibold">
              Auto-Seam Routed
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400">Total Studio Savings</span>
          <p className="text-xl font-bold text-white">82% Cost Reduction</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400">Average Turnaround</span>
          <p className="text-xl font-bold text-amber-400 font-mono">28.4 Seconds</p>
        </div>
      </div>
    </div>
  );
}
