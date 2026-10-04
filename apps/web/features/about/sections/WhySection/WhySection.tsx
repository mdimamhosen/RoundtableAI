import { WhyTitle } from "./WhyTitle";
import { WhyDull } from "./WhyDull";
import { WhyTaste } from "./WhyTaste";
import { WhyClient } from "./WhyClient";
import { Container } from "@/components/ui/Container";

export function WhySection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <WhyTitle />
          <WhyDull />
          <WhyTaste />
          <WhyClient />
        </div>
      </Container>
    </section>
  );
}
