import { WorksHeroSection } from "./sections/WorksHeroSection/WorksHeroSection";
import { SendFilesSection } from "./sections/SendFilesSection/SendFilesSection";
import { AiPassSection } from "./sections/AiPassSection/AiPassSection";
import { RateBatchSection } from "./sections/RateBatchSection/RateBatchSection";
import { HumanHandoffSection } from "./sections/HumanHandoffSection/HumanHandoffSection";
import { NotesSection } from "./sections/NotesSection/NotesSection";
import { ReturnSection } from "./sections/ReturnSection/ReturnSection";
import { WorksCloseSection } from "./sections/WorksCloseSection/WorksCloseSection";

export function HowPageView() {
  return (
    <>
      <WorksHeroSection />
      <SendFilesSection />
      <AiPassSection />
      <RateBatchSection />
      <HumanHandoffSection />
      <NotesSection />
      <ReturnSection />
      <WorksCloseSection />
    </>
  );
}
