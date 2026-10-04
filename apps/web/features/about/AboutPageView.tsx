import { AboutHeroSection } from "./sections/AboutHeroSection/AboutHeroSection";
import { AboutValuesSection } from "./sections/AboutValuesSection/AboutValuesSection";
import { GlobalStudioNetworkBentoSection } from "./sections/GlobalStudioNetworkBentoSection/GlobalStudioNetworkBentoSection";
import { EngineeringArchitectureSection } from "./sections/EngineeringArchitectureSection/EngineeringArchitectureSection";
import { AboutCtaSection } from "./sections/AboutCtaSection/AboutCtaSection";

export function AboutPageView() {
  return (
    <div className="flex flex-col w-full">
      <AboutHeroSection />
      <AboutValuesSection />
      <GlobalStudioNetworkBentoSection />
      <EngineeringArchitectureSection />
      <AboutCtaSection />
    </div>
  );
}
