import { WriteTitle } from "./WriteTitle";
import { WriteCopy } from "./WriteCopy";
import { WriteSign } from "./WriteSign";
import { WriteDemo } from "./WriteDemo";
import { Container } from "@/components/ui/Container";

export function WriteSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <WriteTitle />
            <WriteCopy /></div>
          <div className="mt-8 border-l border-accent pl-5">            <WriteSign />
            <WriteDemo /></div>
        </div>
      </Container>
    </section>
  );
}
