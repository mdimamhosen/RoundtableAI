import { RoomTitle } from "./RoomTitle";
import { RoomStack } from "./RoomStack";
import { RoomLocal } from "./RoomLocal";
import { RoomName } from "./RoomName";
import { Container } from "@/components/ui/Container";

export function RoomSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <RoomTitle />
          <RoomStack />
          <RoomLocal />
          <RoomName />
        </div>
      </Container>
    </section>
  );
}
