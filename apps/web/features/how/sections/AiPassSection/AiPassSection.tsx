import { AiTitle } from "./AiTitle";
import { AiDoes } from "./AiDoes";
import { AiDoesNot } from "./AiDoesNot";
import { AiTime } from "./AiTime";
import { Container } from "@/components/ui/Container";

export function AiPassSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <AiTitle />
            <AiDoes /></div>
          <div className="mt-8 border-l border-accent pl-5">            <AiDoesNot />
            <AiTime /></div>
        </div>
      </Container>
    </section>
  );
}
