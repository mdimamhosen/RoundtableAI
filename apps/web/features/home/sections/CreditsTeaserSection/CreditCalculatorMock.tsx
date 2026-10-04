"use client";

import { useState } from "react";
import { Coins, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CreditCalculatorMock() {
  const [photoCount, setPhotoCount] = useState<number>(500);

  const aiCost = Math.round(photoCount * 0.15);
  const agencyOldCost = Math.round(photoCount * 4.5);
  const savings = agencyOldCost - aiCost;

  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-surface-100/90 border border-white/10 backdrop-blur-xl">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-amber-400" />
          <h4 className="text-base font-bold text-white">Interactive Cost Estimator</h4>
        </div>
        <span className="text-xs font-mono text-amber-400">Flexible Pay-As-You-Go</span>
      </div>

      <div className="py-6 space-y-4">
        <div>
          <div className="flex justify-between text-xs text-slate-300 mb-2">
            <span>Monthly Studio Ingest Volume</span>
            <span className="font-mono font-bold text-white text-sm">{photoCount.toLocaleString()} Photos</span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={photoCount}
            onChange={(e) => setPhotoCount(Number(e.target.value))}
            className="w-full h-2 bg-surface-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-surface-200/50 border border-white/5">
            <span className="text-xs text-slate-400">ProofDesk AI Cost</span>
            <p className="text-2xl font-black text-amber-400 mt-1">${aiCost.toLocaleString()}</p>
            <span className="text-[10px] text-slate-500 font-mono">1 credit per asset</span>
          </div>
          <div className="p-4 rounded-xl bg-surface-200/50 border border-white/5">
            <span className="text-xs text-slate-400">Traditional Agency</span>
            <p className="text-2xl font-black text-slate-400 line-through mt-1">${agencyOldCost.toLocaleString()}</p>
            <span className="text-[10px] text-slate-500 font-mono">Avg $4.50/shot manual</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Estimated Monthly Studio Savings: ${savings.toLocaleString()} ({( (savings / agencyOldCost) * 100 ).toFixed(0)}%)
          </span>
        </div>
      </div>

      <Link href="/pricing">
        <Button variant="glow" className="w-full">
          View Detailed Credit Packages
          <ArrowRight className="h-4 w-4 ml-1.5" />
        </Button>
      </Link>
    </div>
  );
}
