"use client";

import { useState } from "react";
import { Sliders, CheckCircle2, Zap } from "lucide-react";

export function HeroVisual() {
  const [sliderPos, setSliderPos] = useState<number>(55);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Decorative background glow - Warm Solar Amber */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/25 via-yellow-500/20 to-orange-500/25 blur-xl opacity-75" />

      {/* Main interactive visual card */}
      <div className="relative rounded-2xl border border-white/15 bg-surface-100/90 shadow-2xl backdrop-blur-xl overflow-hidden p-4 sm:p-5">
        {/* Top toolbar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
            <span className="font-mono text-slate-400 ml-2">batch_ecom_492.cr3</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            <Zap className="h-3 w-3" />
            0.42s latency
          </div>
        </div>

        {/* Comparison view canvas */}
        <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden mt-3 bg-surface-200 select-none">
          {/* After side (Full background) */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-neutral-900 to-zinc-950 flex flex-col justify-end p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.2),transparent_70%)]" />
            <div className="relative z-10 space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40">
                AI Enhanced + Frequency Split
              </span>
              <p className="text-sm font-semibold text-white">Editorial Skin Texture & Micro-Shadows</p>
              <p className="text-xs text-slate-400">Pores preserved • Color calibrated (Delta-E &lt; 0.8)</p>
            </div>
          </div>

          {/* Before side (clipped) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-stone-950 to-neutral-950 border-r-2 border-white/80 overflow-hidden flex flex-col justify-end p-6"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative z-10 space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-white/10">
                Raw Ingest (Uncorrected)
              </span>
              <p className="text-sm font-semibold text-slate-300">Studio Flash Highlight Clashing</p>
              <p className="text-xs text-slate-400">Color cast + Flyaway stray hair present</p>
            </div>
          </div>

          {/* Draggable slider handle */}
          <div
            className="absolute top-0 bottom-0 -ml-3.5 z-20 flex flex-col items-center justify-center pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="h-8 w-8 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center font-bold text-xs pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
              <Sliders className="h-4 w-4 text-amber-600" />
            </div>
          </div>

          {/* Interactive range input */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-30"
            aria-label="Before/After comparison slider"
          />
        </div>

        {/* Bottom meta stats */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-center text-xs">
          <div className="p-2 rounded bg-surface-200/50">
            <span className="text-slate-400 block text-[10px]">Processing</span>
            <span className="font-mono font-semibold text-emerald-400 flex items-center justify-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> 100% Neural
            </span>
          </div>
          <div className="p-2 rounded bg-surface-200/50">
            <span className="text-slate-400 block text-[10px]">Turnaround</span>
            <span className="font-mono font-semibold text-white">&lt; 30 Seconds</span>
          </div>
          <div className="p-2 rounded bg-surface-200/50">
            <span className="text-slate-400 block text-[10px]">Resolution</span>
            <span className="font-mono font-semibold text-amber-400">Up to 100 MP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
