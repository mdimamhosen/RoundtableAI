import { Container } from "@/components/ui/Container";
import { DemoPreviewBanner } from "./DemoPreviewBanner";

export function DemoCtaSection() {
  return (
    <section className="py-20 bg-background relative">
      <Container size="xl">
        <DemoPreviewBanner />
      </Container>
    </section>
  );
}
