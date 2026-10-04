"use client";

import { Container } from "@/components/ui/Container";
import { 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  Layers, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

interface FaqBentoTopicsProps {
  onSelectCategory: (cat: string) => void;
}

export function FaqBentoTopicsSection({ onSelectCategory }: FaqBentoTopicsProps) {
  const topics = [
    {
      category: "AI Pipeline",
      title: "Frequency Separation & Pore Integrity",
      stat: "24-Point Neural Mesh",
      description: "How our multi-band diffusion maintains 100% genuine skin pores and prevents artificial plastic artifacts.",
      icon: Sparkles,
      color: "from-amber-500/20 to-transparent",
    },
    {
      category: "Security & Ingest",
      title: "Zero-Retention Privacy Guarantee",
      stat: "SOC2 & GDPR Compliant",
      description: "Your RAW catalog assets are never used to train public models. Isolated memory instances with AES-256.",
      icon: ShieldCheck,
      color: "from-emerald-500/20 to-transparent",
    },
    {
      category: "Human Desk",
      title: "Haute Couture & Master Retouchers",
      stat: "5+ Years Experience",
      description: "Certified senior colorists in London, Paris, and NYC provide bespoke dodge and burn within 12 hours.",
      icon: Users,
      color: "from-orange-500/20 to-transparent",
    },
    {
      category: "Billing & Credits",
      title: "Credit Lifespan & Volume Discounts",
      stat: "Never Expire",
      description: "Pre-purchase credits ahead of peak seasonal shoots without worrying about expiration or tier lock-ins.",
      icon: CreditCard,
      color: "from-yellow-500/20 to-transparent",
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-background">
      <Container size="xl" className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold">Quick Navigation</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Essential Studio FAQs
            </h3>
          </div>
        </div>

        {/* 4-Item Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((t, idx) => {
            const Icon = t.icon;
            return (
              <button
                key={idx}
                onClick={() => onSelectCategory(t.category)}
                className="text-left rounded-3xl p-6 bg-surface-100/90 border border-white/10 hover:border-amber-500/40 hover:bg-surface-100 transition-all duration-300 backdrop-blur-2xl shadow-glass flex flex-col justify-between space-y-4 relative group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-30 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-surface-200/80 px-2 py-0.5 rounded-lg border border-white/5">
                      {t.stat}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {t.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.description}
                  </p>
                </div>

                <div className="relative z-10 pt-2 flex items-center justify-between text-xs font-mono text-amber-400 font-semibold">
                  <span>Explore topic</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
