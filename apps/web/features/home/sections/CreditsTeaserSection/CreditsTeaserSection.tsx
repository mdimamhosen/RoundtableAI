import { Container } from "@/components/ui/Container";
import { CreditCalculatorMock } from "./CreditCalculatorMock";
import { CreditFeatureList } from "./CreditFeatureList";

export function CreditsTeaserSection() {
  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <CreditFeatureList />
          </div>
          <div className="lg:col-span-6">
            <CreditCalculatorMock />
          </div>
        </div>
      </Container>
    </section>
  );
}
