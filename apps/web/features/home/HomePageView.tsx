import { HeroSection } from "./sections/HeroSection/HeroSection";
import { SocialProofSection } from "./sections/SocialProofSection/SocialProofSection";
import { ProductSplitSection } from "./sections/ProductSplitSection/ProductSplitSection";
import { PipelineSection } from "./sections/PipelineSection/PipelineSection";
import { StudioFeaturesSection } from "./sections/StudioFeaturesSection/StudioFeaturesSection";
import { TelemetryBentoSection } from "./sections/TelemetryBentoSection/TelemetryBentoSection";
import { CreditsTeaserSection } from "./sections/CreditsTeaserSection/CreditsTeaserSection";
import { DemoCtaSection } from "./sections/DemoCtaSection/DemoCtaSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { FaqTeaserSection } from "./sections/FaqTeaserSection/FaqTeaserSection";
import { FinalCtaSection } from "./sections/FinalCtaSection/FinalCtaSection";

export function HomePageView() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <SocialProofSection />
      <ProductSplitSection />
      <PipelineSection />
      <StudioFeaturesSection />
      <TelemetryBentoSection />
      <CreditsTeaserSection />
      <DemoCtaSection />
      <TestimonialsSection />
      <FaqTeaserSection />
      <FinalCtaSection />
    </div>
  );
}
