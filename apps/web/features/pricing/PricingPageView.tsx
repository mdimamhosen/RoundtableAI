import { PricingHeroSection } from "./sections/PricingHeroSection/PricingHeroSection";
import { CreditPackagesSection } from "./sections/CreditPackagesSection/CreditPackagesSection";
import { RoiCalculatorBentoSection } from "./sections/RoiCalculatorBentoSection/RoiCalculatorBentoSection";
import { CreditConsumptionGuideSection } from "./sections/CreditConsumptionGuideSection/CreditConsumptionGuideSection";
import { PricingFaqSection } from "./sections/PricingFaqSection/PricingFaqSection";
import { PricingCtaSection } from "./sections/PricingCtaSection/PricingCtaSection";

export function PricingPageView() {
  return (
    <div className="flex flex-col w-full">
      <PricingHeroSection />
      <CreditPackagesSection />
      <RoiCalculatorBentoSection />
      <CreditConsumptionGuideSection />
      <PricingFaqSection />
      <PricingCtaSection />
    </div>
  );
}
