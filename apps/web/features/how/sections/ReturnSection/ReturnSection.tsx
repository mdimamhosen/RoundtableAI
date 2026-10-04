import { ReturnTitle } from "./ReturnTitle";
import { ReturnColor } from "./ReturnColor";
import { ReturnKeep } from "./ReturnKeep";
import { ReturnDemo } from "./ReturnDemo";
import { Container } from "@/components/ui/Container";

export function ReturnSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <ReturnTitle />
            <ReturnColor /></div>
          <div className="mt-8 border-l border-accent pl-5">            <ReturnKeep />
            <ReturnDemo /></div>
        </div>
      </Container>
    </section>
  );
}
