import { ExtrasTitle } from "./ExtrasTitle";
import { ExtrasPath } from "./ExtrasPath";
import { ExtrasColor } from "./ExtrasColor";
import { ExtrasRush } from "./ExtrasRush";
import { Container } from "@/components/ui/Container";

export function ExtrasSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <ExtrasTitle />
          <ExtrasPath />
          <ExtrasColor />
          <ExtrasRush />
        </div>
      </Container>
    </section>
  );
}
