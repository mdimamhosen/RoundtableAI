import { CompareTitle } from "./CompareTitle";
import { CompareAi } from "./CompareAi";
import { CompareBasic } from "./CompareBasic";
import { CompareAdvanced } from "./CompareAdvanced";
import { Container } from "@/components/ui/Container";

export function CompareLinesSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <CompareTitle />
          <CompareAi />
          <CompareBasic />
          <CompareAdvanced />
        </div>
      </Container>
    </section>
  );
}
