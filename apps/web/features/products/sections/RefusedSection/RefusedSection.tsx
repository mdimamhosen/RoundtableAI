import { RefusedTitle } from "./RefusedTitle";
import { RefusedFake } from "./RefusedFake";
import { RefusedMinor } from "./RefusedMinor";
import { RefusedRaw } from "./RefusedRaw";
import { Container } from "@/components/ui/Container";

export function RefusedSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <RefusedTitle />
            <RefusedFake /></div>
          <div className="mt-8 border-l border-accent pl-5">            <RefusedMinor />
            <RefusedRaw /></div>
        </div>
      </Container>
    </section>
  );
}
