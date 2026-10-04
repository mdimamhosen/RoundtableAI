import { Container } from "@/components/ui/Container";
import { ComparisonHeader } from "./ComparisonHeader";
import { AiTrackCard } from "./AiTrackCard";
import { HumanDeskCard } from "./HumanDeskCard";

export function ProductSplitSection() {
  return (
    <section className="py-20 bg-background relative">
      <Container size="xl">
        <ComparisonHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AiTrackCard />
          <HumanDeskCard />
        </div>
      </Container>
    </section>
  );
}
