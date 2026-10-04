"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { 
  Cpu, 
  Layers, 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  HardDrive
} from "lucide-react";

export function StepArchitectureBentoSection() {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const phases = [
    {
      num: 1,
      title: "Phase 1: Tether & MinIO Ingest",
      badge: "2.4 GB/s Buffer",
      description: "Direct Capture One tethering or automated S3 sync. Assets are debayered without compression.",
      specs: ["16-Bit RAW Preserved", "ICC Profiling", "SHA-256 Checksums"],
      color: "border-amber-500/40 bg-amber-500/10",
      pill: "0.08s",
    },
    {
      num: 2,
      title: "Phase 2: Neural Frequency Separation",
      badge: "GPU Inference",
      description: "Vision models isolate low-frequency tone layers from high-frequency pore and fabric textures.",
      specs: ["Pore Preservation", "Flyaway Elimination", "Blemish Removal"],
      color: "border-yellow-500/40 bg-yellow-500/10",
      pill: "0.28s",
    },
    {
      num: 3,
      title: "Phase 3: 28-Point QA Auto-Audit",
      badge: "Quality Gate",
      description: "Computer vision checks pure white RGB(255,255,255) backgrounds, moiré, and color accuracy.",
      specs: ["Delta-E < 0.4", "Cast Shadow Check", "Border Bleed Zero"],
      color: "border-emerald-500/40 bg-emerald-500/10",
      pill: "0.12s",
    },
    {
      num: 4,
      title: "Phase 4: CDN Sync & Human Escalation",
      badge: "Final Delivery",
      description: "Catalog-ready outputs are pushed instantly via Webhooks or routed to the master human desk.",
      specs: ["Shopify / S3 Sync", "12h Master SLA", "Multi-Res Derivatives"],
      color: "border-orange-500/40 bg-orange-500/10",
      pill: "Instant",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-surface-50/50">
      <div className="ambient-glow bg-amber-500/10 w-[550px] h-[550px] top-1/2 left-1/4 -translate-x-1/2 pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Workflow className="h-3.5 w-3.5 text-amber-400" />
            <span>Interactive Production Pipeline Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The 4-Stage <span className="text-gradient-brand">Autonomous Engine</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Click any phase to inspect technical guarantees, telemetry speeds, and processing stages.
          </p>
        </div>

        {/* 4-Step Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => {
            const isSelected = selectedPhase === phase.num;
            return (
              <button
                key={phase.num}
                onClick={() => setSelectedPhase(phase.num)}
                className={`text-left rounded-3xl p-6 sm:p-7 transition-all duration-300 backdrop-blur-2xl shadow-glass flex flex-col justify-between space-y-6 relative border ${
                  isSelected
                    ? "bg-surface-100 border-amber-400 shadow-glow"
                    : "bg-surface-100/70 border-white/10 hover:border-white/20 hover:bg-surface-100"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-9 h-9 rounded-2xl flex items-center justify-center font-mono font-bold text-sm border ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 border-amber-300"
                          : "bg-surface-200 text-slate-300 border-white/10"
                      }`}
                    >
                      0{phase.num}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-surface-200/80 text-amber-400 border border-white/5">
                      {phase.pill}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {phase.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight pt-1">
                      {phase.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  {phase.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
