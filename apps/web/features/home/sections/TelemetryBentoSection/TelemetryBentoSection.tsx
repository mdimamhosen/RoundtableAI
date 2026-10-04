"use client";

import { Container } from "@/components/ui/Container";
import { 
  Activity, 
  Cpu, 
  Globe2, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Database,
  Sliders,
  TrendingUp,
  Clock
} from "lucide-react";
import { useState } from "react";

export function TelemetryBentoSection() {
  const [activeCity, setActiveCity] = useState("London");

  const cities = [
    { name: "London", zone: "GMT+1", retouchers: 18, sla: "3.8h avg", status: "Active" },
    { name: "New York", zone: "EST", retouchers: 24, sla: "4.1h avg", status: "Peak" },
    { name: "Tokyo", zone: "JST", retouchers: 14, sla: "2.9h avg", status: "Active" },
    { name: "Paris", zone: "CET", retouchers: 12, sla: "3.4h avg", status: "Active" },
  ];

  const qaChecks = [
    "Pure White RGB(255,255,255) Background",
    "Dynamic Range Skin Highlight Falloff",
    "Fabric Texture Moiré Elimination",
    "Bespoke ICC Delta-E < 0.4 Compliance",
    "Ghost Mannequin Symmetry Alignment",
    "High-Res DPI Aspect Ratio Padding",
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="ambient-glow bg-amber-500/10 w-[600px] h-[600px] top-1/4 -left-40 pointer-events-none" />
      <div className="ambient-glow bg-orange-600/10 w-[500px] h-[500px] bottom-10 right-0 pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Activity className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span>Autonomous Studio Operations Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineered for <span className="text-gradient-brand">Commercial Scale</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Real-time telemetry from our neural vision pipeline, distributed GPU clusters, and global master human editing desks.
          </p>
        </div>

        {/* Complex Bento Grid (12-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Bento Item 1: High-Speed Ingest & GPU Cluster (span 7) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-surface-100/90 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-2xl shadow-glass relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/15 transition-all" />

            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      <Zap className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-300">
                      Distributed Ingest Telemetry
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Optimal 2.4 GB/s
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  High-Throughput 16-Bit RAW Pipeline
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  Concurrent GPU nodes normalize sensor profiles and debayer Hasselblad, PhaseOne, Canon, and Sony camera RAW files in sub-second cycles.
                </p>
              </div>

              {/* Animated Progress Gauge Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                <div className="p-3.5 rounded-2xl bg-surface-200/50 border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">GPU Cluster Load</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-mono font-bold text-white">41.8%</span>
                    <span className="text-[10px] font-mono text-emerald-400">Stable</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-300 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[42%] animate-pulse" />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-200/50 border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Neural Pass Speed</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-mono font-bold text-amber-400">0.24s</span>
                    <span className="text-[10px] font-mono text-slate-400">per frame</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-300 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[88%]" />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-200/50 border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Delta-E Precision</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-mono font-bold text-emerald-400">0.38 ΔE</span>
                    <span className="text-[10px] font-mono text-emerald-400">&lt; 0.8 SLA</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-300 overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[94%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Delta-E Color Accuracy Dial (span 5) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-surface-100/90 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-2xl shadow-glass flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Sliders className="h-4 w-4" />
                </span>
                <span className="text-xs font-mono font-semibold text-slate-300">
                  Color Calibration Standard
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Master ICC Gamut Profiling
              </h3>
              <p className="text-sm text-slate-300">
                Guaranteed color fidelity for luxury fashion & cosmetics. Zero chromatic drift across displays.
              </p>
            </div>

            {/* Circular Gauge Representation */}
            <div className="p-4 rounded-2xl bg-surface-200/50 border border-white/5 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400">Target Standard:</span>
                <p className="text-lg font-bold text-white">CIE2000 ProPhoto</p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Calibrated to Pantone Spec</span>
                </div>
              </div>

              {/* Visual Dial */}
              <div className="relative w-20 h-20 rounded-full border-4 border-surface-300 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin duration-[4000ms]" />
                <span className="text-sm font-mono font-black text-amber-400">99.8%</span>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Global Master Desk Dispatch Map (span 6) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-surface-100/90 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-2xl shadow-glass space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Globe2 className="h-4 w-4" />
                </span>
                <span className="text-xs font-mono font-semibold text-slate-300">
                  Human Desk 24/7 Follow-the-Sun
                </span>
              </div>
              <span className="text-xs font-mono text-amber-400">68 Senior Retouchers</span>
            </div>

            <p className="text-sm text-slate-300">
              When hero lookbook shots require high-touch human dodge and burn, jobs dispatch automatically to top certified editors across international timezones.
            </p>

            {/* Interactive City Desk Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {cities.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveCity(c.name)}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    activeCity === c.name
                      ? "bg-amber-500/20 border-amber-500/50 shadow-glow"
                      : "bg-surface-200/50 border-white/5 hover:bg-surface-200"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>{c.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block pt-1">{c.sla}</span>
                  <span className="text-[10px] font-mono text-amber-400">{c.retouchers} Active</span>
                </button>
              ))}
            </div>
          </div>

          {/* Bento Item 4: 28-Point Automated QA Checklist (span 6) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-surface-100/90 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-2xl shadow-glass space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span className="text-xs font-mono font-semibold text-slate-300">
                  Automated Quality Assurance
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                28-Point Audit
              </span>
            </div>

            <p className="text-sm text-slate-300">
              Every exported batch undergoes autonomous computer vision audits before being synced to your S3 bucket or marketplace catalog.
            </p>

            {/* QA Micro Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {qaChecks.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-200/50 border border-white/5 hover:border-amber-500/30 transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-300 truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
