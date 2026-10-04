"use client";

import { Container } from "@/components/ui/Container";
import { 
  Globe2, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Server, 
  CheckCircle2,
  Users2
} from "lucide-react";

export function GlobalStudioNetworkBentoSection() {
  const cards = [
    {
      title: "Distributed GPU Cluster",
      span: "lg:col-span-7",
      tag: "Compute Infrastructure",
      stat: "14ms Neural Inference",
      description:
        "Dedicated NVIDIA Tensor Core clusters deployed across US-East, Frankfurt, and Tokyo. Processes uncompressed 16-bit RAW assets with sub-second turnaround.",
      icon: Cpu,
      accent: "from-amber-500/20 via-orange-500/10 to-transparent",
      metrics: [
        { label: "Pore Split Depth", val: "4 Octaves" },
        { label: "Throughput", val: "2.4 GB/s" },
        { label: "Uptime SLA", val: "99.98%" },
      ],
    },
    {
      title: "Zero-Retention Privacy",
      span: "lg:col-span-5",
      tag: "Data Isolation",
      stat: "AES-256 Vaulted",
      description:
        "Commercial photography is your proprietary IP. Ingested assets process in ephemeral memory and are never retained for AI foundation model training.",
      icon: ShieldCheck,
      accent: "from-emerald-500/20 via-amber-500/10 to-transparent",
      metrics: [
        { label: "Retention Policy", val: "0 Days" },
        { label: "Compliance", val: "SOC2 Type II" },
      ],
    },
    {
      title: "Master Colorist Guild",
      span: "lg:col-span-5",
      tag: "Human Editorial Desk",
      stat: "14 Timezones",
      description:
        "Our human desk isn't outsourced to generic click farms. Every editor is an accredited commercial retoucher trained in high-fashion dodge and burn.",
      icon: Users2,
      accent: "from-yellow-500/20 via-amber-500/10 to-transparent",
      metrics: [
        { label: "Vetted Senior Leads", val: "68 Artists" },
        { label: "Turnaround SLA", val: "Guaranteed 12h" },
      ],
    },
    {
      title: "Direct S3 & Studio Tethering",
      span: "lg:col-span-7",
      tag: "Studio Integration",
      stat: "MinIO & AWS Ready",
      description:
        "Seamless presigned URLs eliminate multi-gigabyte upload wait times. Capture One hot folders stream RAW files straight into the neural queue as you shoot.",
      icon: Server,
      accent: "from-amber-600/20 via-stone-800/10 to-transparent",
      metrics: [
        { label: "Max File Resolution", val: "100 MP" },
        { label: "Color Gamut", val: "ProPhoto RGB" },
        { label: "Tether Sync", val: "Real-Time" },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-surface-50/50">
      <div className="ambient-glow bg-amber-500/10 w-[600px] h-[600px] top-1/4 -right-20 pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Globe2 className="h-3.5 w-3.5 text-amber-400" />
            <span>Studio Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for the Most <span className="text-gradient-brand">Demanding Studios</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            High-fashion houses and global catalog retailers trust ProofDesk for zero-compromise optical fidelity and enterprise-grade data protection.
          </p>
        </div>

        {/* Complex Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className={`${c.span} rounded-3xl p-6 sm:p-8 bg-surface-100/90 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-2xl shadow-glass flex flex-col justify-between space-y-6 relative group overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-30 group-hover:opacity-80 transition-opacity pointer-events-none`} />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-xs font-mono text-slate-400">{c.tag}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-surface-200 text-amber-400 text-xs font-mono font-bold border border-white/10">
                      {c.stat}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {c.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 flex flex-wrap gap-3">
                  {c.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="px-3 py-1.5 rounded-xl bg-surface-200/80 border border-white/5 space-y-0.5"
                    >
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">{m.label}</span>
                      <span className="text-xs font-mono font-bold text-white">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
