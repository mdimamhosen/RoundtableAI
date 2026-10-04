import { Container } from "@/components/ui/Container";
import { Sparkles } from "lucide-react";

export function ProductsHeroSection() {
  return (
    <section className="pt-16 pb-12 relative overflow-hidden text-center">
      <div className="ambient-glow bg-amber-500/20 w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2" />
      <Container size="xl" className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Four Distinct Processing Tiers • Instant AI to Runway Editorial</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Tailored Retouching Levels.{" "}
          <span className="text-gradient-brand">From AI Velocity to Master Craft.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Allocate your studio budget intelligently. Route 90% of high-volume SKUs to our sub-30s neural engine, and escalate hero shots to specialized senior retouchers.
        </p>
      </Container>
    </section>
  );
}
