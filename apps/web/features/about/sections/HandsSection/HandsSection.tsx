import { HandsTitle } from "./HandsTitle";
import { HandsClient } from "./HandsClient";
import { HandsEditor } from "./HandsEditor";
import { HandsAdmin } from "./HandsAdmin";
import { Container } from "@/components/ui/Container";

export function HandsSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <HandsTitle />
          <HandsClient />
          <HandsEditor />
          <HandsAdmin />
        </div>
      </Container>
    </section>
  );
}
