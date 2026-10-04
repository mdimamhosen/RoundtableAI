import { PaygKicker } from "./PaygKicker";
import { PaygTitle } from "./PaygTitle";
import { PaygCopy } from "./PaygCopy";
import { PaygExample } from "./PaygExample";
import { Container } from "@/components/ui/Container";

export function PaygSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <PaygKicker />
            <PaygTitle /></div>
          <div className="mt-8 border-l border-accent pl-5">            <PaygCopy />
            <PaygExample /></div>
        </div>
      </Container>
    </section>
  );
}
