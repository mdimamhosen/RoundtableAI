import { FaqCloseTitle } from "./FaqCloseTitle";
import { FaqCloseCopy } from "./FaqCloseCopy";
import { FaqProducts } from "./FaqProducts";
import { FaqAbout } from "./FaqAbout";
import { Container } from "@/components/ui/Container";

export function FaqCloseSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <FaqCloseTitle />
          <FaqCloseCopy />
          <FaqProducts />
          <FaqAbout />
        </div>
      </Container>
    </section>
  );
}
