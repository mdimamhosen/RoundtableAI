import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordionPreview } from "./FaqAccordionPreview";

export function FaqTeaserSection() {
  return (
    <section className="py-20 bg-background relative">
      <Container size="xl">
        <SectionHeading
          badge="Answers & Technical Details"
          title="Got Questions?"
          titleGradient="We Have Clear Answers."
          subtitle="Everything you need to know about ProofDesk integrations, RAW processing, and credit models."
        />
        <FaqAccordionPreview />
      </Container>
    </section>
  );
}
