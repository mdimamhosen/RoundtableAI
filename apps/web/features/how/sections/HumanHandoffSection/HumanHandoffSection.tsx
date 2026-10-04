import { HandTitle } from "./HandTitle";
import { HandWho } from "./HandWho";
import { HandQa } from "./HandQa";
import { HandRoles } from "./HandRoles";
import { Container } from "@/components/ui/Container";

export function HumanHandoffSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="max-w-2xl py-16">
                    <HandTitle />
          <HandWho />
          <HandQa />
          <HandRoles />
        </div>
      </Container>
    </section>
  );
}
