import { Container } from "@/components/ui/Container";
import { HeroBadge } from "./HeroBadge";
import { HeroHeadline } from "./HeroHeadline";
import { HeroCtaGroup } from "./HeroCtaGroup";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Dynamic ambient backgrounds - Warm Amber */}
      <div className="ambient-glow bg-amber-500/20 w-[500px] h-[500px] -top-32 -left-32 animate-pulse-slow" />
      <div className="ambient-glow bg-orange-600/20 w-[600px] h-[600px] top-1/4 -right-40" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <HeroBadge />
            <HeroHeadline />
            <HeroCtaGroup />
          </div>
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
