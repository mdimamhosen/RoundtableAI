import { Container } from "@/components/ui/Container";
import { SignupActionGroup } from "./SignupActionGroup";

export function FinalCtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-surface-100/40 to-background border-t border-white/5">
      <div className="ambient-glow bg-amber-500/15 w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container size="xl" className="relative z-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
          Ready to transform your studio turnaround times into seconds?
        </h2>
        <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10">
          Join leading fashion labels, jewelry brands, and commercial studios. Test 50 photos on us today.
        </p>
        <SignupActionGroup />
      </Container>
    </section>
  );
}
