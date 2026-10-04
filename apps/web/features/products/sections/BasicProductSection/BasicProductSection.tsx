import { BasicTitle } from "./BasicTitle";
import { BasicFor } from "./BasicFor";
import { BasicLimit } from "./BasicLimit";
import { BasicTime } from "./BasicTime";
import { Container } from "@/components/ui/Container";

export function BasicProductSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="py-14">
          <div className="max-w-xl">            <BasicTitle />
            <BasicFor /></div>
          <div className="mt-8 border-l border-accent pl-5">            <BasicLimit />
            <BasicTime /></div>
        </div>
      </Container>
    </section>
  );
}
