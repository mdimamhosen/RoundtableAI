import { FilesTitle } from "./FilesTitle";
import { FilesQ1 } from "./FilesQ1";
import { FilesQ2 } from "./FilesQ2";
import { FilesQ3 } from "./FilesQ3";
import { Container } from "@/components/ui/Container";

export function FilesFaqSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <FilesTitle />
          <FilesQ1 />
          <FilesQ2 />
          <FilesQ3 />
        </div>
      </Container>
    </section>
  );
}
