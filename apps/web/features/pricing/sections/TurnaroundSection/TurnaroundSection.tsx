import { TurnKicker } from "./TurnKicker";
import { TurnTitle } from "./TurnTitle";
import { TurnCaveat } from "./TurnCaveat";
import { TurnLink } from "./TurnLink";
import { Container } from "@/components/ui/Container";

export function TurnaroundSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <TurnKicker />
          <TurnTitle />
          <TurnCaveat />
          <TurnLink />
        </div>
      </Container>
    </section>
  );
}
