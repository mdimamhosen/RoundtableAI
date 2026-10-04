import { PeopleTitle } from "./PeopleTitle";
import { PeopleQ1 } from "./PeopleQ1";
import { PeopleQ2 } from "./PeopleQ2";
import { PeopleQ3 } from "./PeopleQ3";
import { Container } from "@/components/ui/Container";

export function PeopleFaqSection() {
  return (
    <section className="border-t border-line">
      <Container>
        <div className="max-w-2xl py-16">
                    <PeopleTitle />
          <PeopleQ1 />
          <PeopleQ2 />
          <PeopleQ3 />
        </div>
      </Container>
    </section>
  );
}
