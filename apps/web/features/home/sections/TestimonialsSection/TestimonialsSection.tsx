import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialGrid } from "./TestimonialGrid";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative">
      <Container size="xl">
        <SectionHeading
          badge="Verified Studio Feedback"
          title="Loved by Creative Directors"
          titleGradient="and Post-Production Heads."
          subtitle="Real results from enterprise e-commerce brands and commercial photography production studios."
        />
        <TestimonialGrid />
      </Container>
    </section>
  );
}
