import { LimitsTitle } from "./LimitsTitle";
import { LimitsFace } from "./LimitsFace";
import { LimitsKids } from "./LimitsKids";
import { LimitsScope } from "./LimitsScope";
import { Container } from "@/components/ui/Container";

export function LimitsSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="max-w-2xl py-16">
                    <LimitsTitle />
          <LimitsFace />
          <LimitsKids />
          <LimitsScope />
        </div>
      </Container>
    </section>
  );
}
