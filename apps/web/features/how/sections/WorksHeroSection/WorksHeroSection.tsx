import { WorksKicker } from "./WorksKicker";
import { WorksHeadline } from "./WorksHeadline";
import { WorksLead } from "./WorksLead";
import { WorksStatus } from "./WorksStatus";
import { Container } from "@/components/ui/Container";

export function WorksHeroSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="max-w-2xl py-16">
                    <WorksKicker />
          <WorksHeadline />
          <WorksLead />
          <WorksStatus />
        </div>
      </Container>
    </section>
  );
}
