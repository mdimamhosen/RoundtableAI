import { AccountTitle } from "./AccountTitle";
import { AccountQ1 } from "./AccountQ1";
import { AccountQ2 } from "./AccountQ2";
import { AccountQ3 } from "./AccountQ3";
import { Container } from "@/components/ui/Container";

export function AccountFaqSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <AccountTitle />
            <AccountQ1 /></div>
          <div className="mt-8 border-l border-accent pl-5">            <AccountQ2 />
            <AccountQ3 /></div>
        </div>
      </Container>
    </section>
  );
}
