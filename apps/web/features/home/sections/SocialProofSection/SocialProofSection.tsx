import { Container } from "@/components/ui/Container";
import { BrandLogosList } from "./BrandLogosList";
import { MetricHighlights } from "./MetricHighlights";

export function SocialProofSection() {
  return (
    <section className="py-12 border-y border-white/5 bg-surface-50/30">
      <Container size="xl">
        <BrandLogosList />
        <MetricHighlights />
      </Container>
    </section>
  );
}
