import { StandardTitle } from "./StandardTitle";
import { StandardFor } from "./StandardFor";
import { StandardQa } from "./StandardQa";
import { StandardRound } from "./StandardRound";
import { Container } from "@/components/ui/Container";

export function StandardProductSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <StandardTitle />
          <StandardFor />
          <StandardQa />
          <StandardRound />
        </div>
      </Container>
    </section>
  );
}
