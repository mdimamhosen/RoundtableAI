import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureGrid } from "./FeatureGrid";

export function StudioFeaturesSection() {
  return (
    <section className="py-20 bg-background relative">
      <Container size="xl">
        <SectionHeading
          badge="Engineered For Commercial Standards"
          title="Studio Retouching Tools"
          titleGradient="Built Without Compromise."
          subtitle="Everything modern high-volume commercial photo studios need to replace repetitive manual pen-tool clipping and frequency separation."
        />
        <FeatureGrid />
      </Container>
    </section>
  );
}
