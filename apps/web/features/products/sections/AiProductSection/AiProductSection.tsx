import { AiProductTitle } from "./AiProductTitle";
import { AiProductFor } from "./AiProductFor";
import { AiProductOut } from "./AiProductOut";
import { AiProductStop } from "./AiProductStop";
import { Container } from "@/components/ui/Container";

export function AiProductSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <AiProductTitle />
          <AiProductFor />
          <AiProductOut />
          <AiProductStop />
        </div>
      </Container>
    </section>
  );
}
