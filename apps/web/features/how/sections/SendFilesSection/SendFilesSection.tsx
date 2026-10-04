import { SendTitle } from "./SendTitle";
import { SendWhat } from "./SendWhat";
import { SendNote } from "./SendNote";
import { SendMinio } from "./SendMinio";
import { Container } from "@/components/ui/Container";

export function SendFilesSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <SendTitle />
          <SendWhat />
          <SendNote />
          <SendMinio />
        </div>
      </Container>
    </section>
  );
}
