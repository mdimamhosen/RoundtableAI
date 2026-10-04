import { NotesTitle } from "./NotesTitle";
import { NotesScope } from "./NotesScope";
import { NotesWrite } from "./NotesWrite";
import { NotesChat } from "./NotesChat";
import { Container } from "@/components/ui/Container";

export function NotesSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <NotesTitle />
          <NotesScope />
          <NotesWrite />
          <NotesChat />
        </div>
      </Container>
    </section>
  );
}
