import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineStepList } from "./PipelineStepList";
import { PipelineVisualizer } from "./PipelineVisualizer";

export function PipelineSection() {
  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative">
      <Container size="xl">
        <SectionHeading
          badge="High-Throughput Architecture"
          title="From Raw Shutter Click"
          titleGradient="to Finished Catalog Asset."
          subtitle="An industrial-grade pipeline designed for 50,000+ photos/week with zero human bottlenecks on standard catalog imagery."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6">
            <PipelineStepList />
          </div>
          <div className="lg:col-span-6">
            <PipelineVisualizer />
          </div>
        </div>
      </Container>
    </section>
  );
}
