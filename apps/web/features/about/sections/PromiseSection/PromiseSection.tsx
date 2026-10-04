import { PromiseTitle } from "./PromiseTitle";
import { PromiseCopy } from "./PromiseCopy";
import { PromisePrice } from "./PromisePrice";
import { PromiseLimit } from "./PromiseLimit";
import { Container } from "@/components/ui/Container";

export function PromiseSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <PromiseTitle />
            <PromiseCopy /></div>
          <div className="mt-8 border-l border-accent pl-5">            <PromisePrice />
            <PromiseLimit /></div>
        </div>
      </Container>
    </section>
  );
}
