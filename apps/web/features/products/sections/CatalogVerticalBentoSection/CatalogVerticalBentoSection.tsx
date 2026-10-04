"use client";

import { Container } from "@/components/ui/Container";
import { 
  Sparkles, 
  Layers, 
  Gem, 
  Shirt, 
  ShoppingBag, 
  Camera, 
  CheckCircle2, 
  ArrowRight,
  Sliders,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CatalogVerticalBentoSection() {
  const verticals = [
    {
      title: "Fine Jewelry & Horology",
      icon: Gem,
      span: "lg:col-span-7",
      badge: "High-Precision Specular Engine",
      description:
        "Sub-pixel dust removal on brushed gold, mirror reflection enhancement on platinum bezels, and prism dispersion sparkle on faceted gemstones without over-saturation.",
      specs: ["100% Facet Refraction Retention", "Brushed Metal Polish", "Zero Micro-Scratches"],
      accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
      tag: "ΔE < 0.25",
    },
    {
      title: "Haute Couture & Editorial",
      icon: Camera,
      span: "lg:col-span-5",
      badge: "Master Dodge & Burn",
      description:
        "Preserve authentic skin pore depth across 4 frequency octaves. Clean flyaways, tone contours, and sculpt editorial lighting curves with human artist sign-off.",
      specs: ["4-Band Frequency Split", "Authentic Pores", "12h Turnaround SLA"],
      accent: "from-orange-500/20 via-amber-500/10 to-transparent",
      tag: "Haute Desk",
    },
    {
      title: "Ghost Mannequin & Symmetry",
      icon: Shirt,
      span: "lg:col-span-5",
      badge: "3D Inner Collar Reconstruction",
      description:
        "Autonomous assembly of front shot and inside neck collar with perspective warp and fabric shadow continuity. Consistent hemline drape on every garment.",
      specs: ["Inner Collar Compositing", "Hem Alignment", "Crease Reduction"],
      accent: "from-amber-600/20 via-stone-800/10 to-transparent",
      tag: "Apparel SLA",
    },
    {
      title: "High-Volume Catalog E-Commerce",
      icon: ShoppingBag,
      span: "lg:col-span-7",
      badge: "Pure White RGB(255,255,255)",
      description:
        "Batch background extraction compliant with Amazon, Farfetch, Shopify, and SSENSE standards. Natural contact shadow preservation with zero halo artifacts.",
      specs: ["RGB(255,255,255) Guarantee", "Cast Shadow Preservation", "0.28s / Image"],
      accent: "from-emerald-500/15 via-amber-500/10 to-transparent",
      tag: "5,000+ / hr",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
      <div className="ambient-glow bg-amber-500/10 w-[600px] h-[600px] top-1/3 -right-40 pointer-events-none" />

      <Container size="xl" className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Layers className="h-3.5 w-3.5 text-amber-400" />
            <span>Specialized Studio Processing Engines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tuned for Every <span className="text-gradient-brand">Category Matrix</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Each commercial vertical presents distinct optical challenges. ProofDesk applies specialized neural models calibrated for jewelry, apparel, and lookbooks.
          </p>
        </div>

        {/* Complex Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {verticals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.span} rounded-3xl p-6 sm:p-8 bg-surface-100/90 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-2xl shadow-glass flex flex-col justify-between space-y-6 relative group overflow-hidden`}
              >
                {/* Subtle gradient hover highlight */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-mono text-slate-400">{item.badge}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-surface-200 text-amber-400 text-xs font-mono font-bold border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {item.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-xl bg-surface-200/80 border border-white/5 text-[11px] font-mono text-slate-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
