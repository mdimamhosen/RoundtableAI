import { AdvancedTitle } from "./AdvancedTitle";
import { AdvancedFor } from "./AdvancedFor";
import { AdvancedAsk } from "./AdvancedAsk";
import { AdvancedNo } from "./AdvancedNo";
import { Container } from "@/components/ui/Container";

export function AdvancedProductSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="max-w-2xl py-16">
                    <AdvancedTitle />
          <AdvancedFor />
          <AdvancedAsk />
          <AdvancedNo />
        </div>
      </Container>
    </section>
  );
}
