import { OrdersTitle } from "./OrdersTitle";
import { OrdersQ1 } from "./OrdersQ1";
import { OrdersQ2 } from "./OrdersQ2";
import { OrdersQ3 } from "./OrdersQ3";
import { Container } from "@/components/ui/Container";

export function OrdersFaqSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <OrdersTitle />
          <OrdersQ1 />
          <OrdersQ2 />
          <OrdersQ3 />
        </div>
      </Container>
    </section>
  );
}
