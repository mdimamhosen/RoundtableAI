import { AboutCloseTitle } from "./AboutCloseTitle";
import { AboutCloseCopy } from "./AboutCloseCopy";
import { AboutHow } from "./AboutHow";
import { AboutHome } from "./AboutHome";
import { Container } from "@/components/ui/Container";

export function AboutCloseSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="grid gap-6 py-16 md:grid-cols-2">
                    <AboutCloseTitle />
          <AboutCloseCopy />
          <AboutHow />
          <AboutHome />
        </div>
      </Container>
    </section>
  );
}
