import { CloseTitle } from "./CloseTitle";
import { CloseCopy } from "./CloseCopy";
import { CloseFaq } from "./CloseFaq";
import { CloseProducts } from "./CloseProducts";
import { Container } from "@/components/ui/Container";

export function PricingCloseSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <CloseTitle />
          <CloseCopy />
          <CloseFaq />
          <CloseProducts />
        </div>
      </Container>
    </section>
  );
}
