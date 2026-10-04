import { CreditTitle } from "./CreditTitle";
import { CreditRule } from "./CreditRule";
import { CreditRedo } from "./CreditRedo";
import { CreditLater } from "./CreditLater";
import { Container } from "@/components/ui/Container";

export function CreditMeaningSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="max-w-2xl py-16">
                    <CreditTitle />
          <CreditRule />
          <CreditRedo />
          <CreditLater />
        </div>
      </Container>
    </section>
  );
}
