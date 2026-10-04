import { WorksCloseTitle } from "./WorksCloseTitle";
import { WorksCloseCopy } from "./WorksCloseCopy";
import { WorksSignup } from "./WorksSignup";
import { WorksPricing } from "./WorksPricing";
import { Container } from "@/components/ui/Container";

export function WorksCloseSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <WorksCloseTitle />
          <WorksCloseCopy />
          <WorksSignup />
          <WorksPricing />
        </div>
      </Container>
    </section>
  );
}
