"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function RoiCalculatorBentoSection() {
  const [volume, setVolume] = useState<number>(3000);

  // Calculations
  const traditionalCost = Math.round(volume * 3.8); // $3.80 / photo average studio agency cost
  const proofdeskCost = Math.round(volume * 0.42); // $0.42 / photo blended ProofDesk cost
  const monthlySavings = traditionalCost - proofdeskCost;
  const annualSavings = monthlySavings * 12;
  const hoursSaved = Math.round(volume * 0.25); // 15 mins saved per photo

  return (
    <section className="py-20 relative overflow-hidden bg-surface-50/50">
      <div className="ambient-glow bg-amber-500/10 w-[500px] h-[500px] top-1/2 left-0 pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Calculator className="h-3.5 w-3.5 text-amber-400" />
            <span>Interactive ROI & Batch Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Calculate Your <span className="text-gradient-brand">Studio Savings</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Drag the slider to match your studio catalog volume and see instant cost and turnaround time reductions.
          </p>
        </div>

        {/* Complex Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Bento Item 1: Interactive Volume Slider (col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-surface-100/90 border border-white/10 backdrop-blur-2xl shadow-glass flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Monthly Catalog Volume</span>
                <span className="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-400 font-mono font-bold text-sm border border-amber-500/30">
                  {volume.toLocaleString()} Photos / month
                </span>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-surface-300 accent-amber-500 cursor-pointer"
                  aria-label="Monthly image volume"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>500 photos</span>
                  <span>5,000</span>
                  <span>10,000</span>
                  <span>20,000+ photos</span>
                </div>
              </div>
            </div>

            {/* Comparison Cost Bars */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Traditional Agency Desk ($3.80 / shot)</span>
                  <span className="text-slate-300 line-through">${traditionalCost.toLocaleString()} / mo</span>
                </div>
                <div className="w-full h-3 rounded-full bg-surface-300 overflow-hidden">
                  <div className="h-full bg-slate-500 rounded-full w-full" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    ProofDesk Dual-Track (${(proofdeskCost / volume).toFixed(2)} / shot)
                  </span>
                  <span className="text-amber-400 font-bold">${proofdeskCost.toLocaleString()} / mo</span>
                </div>
                <div className="w-full h-3 rounded-full bg-surface-300 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(12, (proofdeskCost / traditionalCost) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="p-4 rounded-2xl bg-surface-200/50 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Turnaround SLA: 0.28s AI + 12h Master Human
              </span>
              <span className="text-slate-400">Unlimited tethered seats</span>
            </div>
          </div>

          {/* Bento Item 2: Calculated Savings Display (col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-surface-100/90 via-surface-200/80 to-amber-950/20 border border-amber-500/30 backdrop-blur-2xl shadow-glass flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-amber-400/90 font-bold tracking-wider">
                Projected Annual Net Savings
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight text-gradient-brand">
                ${annualSavings.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">
                Based on ${monthlySavings.toLocaleString()} monthly reduction in retouching overhead.
              </p>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="p-3.5 rounded-2xl bg-surface-100/80 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-amber-400" />
                  <span>Time Saved</span>
                </div>
                <div className="text-xl font-mono font-bold text-white">
                  {hoursSaved.toLocaleString()} hrs
                </div>
                <span className="text-[10px] text-slate-400 font-mono">per month</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-100/80 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Margin Boost</span>
                </div>
                <div className="text-xl font-mono font-bold text-emerald-400">
                  +89.2%
                </div>
                <span className="text-[10px] text-slate-400 font-mono">cost efficiency</span>
              </div>
            </div>

            {/* CTA */}
            <Link href="/sign-up" className="w-full">
              <Button variant="glow" size="lg" className="w-full">
                Claim 50 Free Trial Credits
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
