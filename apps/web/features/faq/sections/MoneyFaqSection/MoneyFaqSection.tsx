import { MoneyTitle } from "./MoneyTitle";
import { MoneyQ1 } from "./MoneyQ1";
import { MoneyQ2 } from "./MoneyQ2";
import { MoneyQ3 } from "./MoneyQ3";
import { Container } from "@/components/ui/Container";

export function MoneyFaqSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <MoneyTitle />
          <MoneyQ1 />
          <MoneyQ2 />
          <MoneyQ3 />
        </div>
      </Container>
    </section>
  );
}
