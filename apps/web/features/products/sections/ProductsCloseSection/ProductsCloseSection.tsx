import { ProductsCloseTitle } from "./ProductsCloseTitle";
import { ProductsCloseCopy } from "./ProductsCloseCopy";
import { ProductsDemo } from "./ProductsDemo";
import { ProductsPrice } from "./ProductsPrice";
import { Container } from "@/components/ui/Container";

export function ProductsCloseSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <ProductsCloseTitle />
          <ProductsCloseCopy />
          <ProductsDemo />
          <ProductsPrice />
        </div>
      </Container>
    </section>
  );
}
