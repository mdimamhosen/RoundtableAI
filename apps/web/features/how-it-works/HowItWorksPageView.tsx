import { HowItWorksHeroSection } from "./sections/HowItWorksHeroSection/HowItWorksHeroSection";
import { StepArchitectureBentoSection } from "./sections/StepArchitectureBentoSection/StepArchitectureBentoSection";
import { AiNeuralPathSection } from "./sections/AiNeuralPathSection/AiNeuralPathSection";
import { HumanDeskPathSection } from "./sections/HumanDeskPathSection/HumanDeskPathSection";
import { QualityAssuranceSection } from "./sections/QualityAssuranceSection/QualityAssuranceSection";
import { HowItWorksCtaSection } from "./sections/HowItWorksCtaSection/HowItWorksCtaSection";

export function HowItWorksPageView() {
  return (
    <div className="flex flex-col w-full">
      <HowItWorksHeroSection />
      <StepArchitectureBentoSection />
      <AiNeuralPathSection />
      <HumanDeskPathSection />
      <QualityAssuranceSection />
      <HowItWorksCtaSection />
    </div>
  );
}
