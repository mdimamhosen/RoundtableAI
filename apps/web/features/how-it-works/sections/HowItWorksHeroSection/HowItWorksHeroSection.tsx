import { Container } from "@/components/ui/Container";
import { Sparkles, Cpu, Users } from "lucide-react";

export function HowItWorksHeroSection() {
  return (
    <section className="pt-16 pb-12 relative overflow-hidden text-center">
      <div className="ambient-glow bg-amber-500/20 w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2" />
      <Container size="xl" className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>The Dual-Track Studio Pipeline</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          How ProofDesk Operates.{" "}
          <span className="text-gradient-brand">From Ingest to Delivery.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Discover how our proprietary neural processing architecture works hand-in-hand with an international desk of master studio retouchers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-100 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Cpu className="h-4 w-4" />
            Track A: Autonomous Neural (&lt; 30 sec)
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-100 border border-orange-500/30 text-xs font-mono text-orange-400">
            <Users className="h-4 w-4" />
            Track B: Human Editorial Desk (12-24 hrs)
          </div>
        </div>
      </Container>
    </section>
  );
}
