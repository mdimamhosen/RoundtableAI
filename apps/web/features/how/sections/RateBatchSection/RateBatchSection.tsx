import { RateTitle } from "./RateTitle";
import { RateKeep } from "./RateKeep";
import { RateRedo } from "./RateRedo";
import { RateHand } from "./RateHand";
import { Container } from "@/components/ui/Container";

export function RateBatchSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <RateTitle />
          <RateKeep />
          <RateRedo />
          <RateHand />
        </div>
      </Container>
    </section>
  );
}
