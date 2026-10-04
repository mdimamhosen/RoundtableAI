import { QualityTitle } from "./QualityTitle";
import { QualityQ1 } from "./QualityQ1";
import { QualityQ2 } from "./QualityQ2";
import { QualityQ3 } from "./QualityQ3";
import { Container } from "@/components/ui/Container";

export function QualityFaqSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <QualityTitle />
            <QualityQ1 /></div>
          <div className="mt-8 border-l border-accent pl-5">            <QualityQ2 />
            <QualityQ3 /></div>
        </div>
      </Container>
    </section>
  );
}
