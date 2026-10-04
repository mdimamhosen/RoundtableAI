import { ProductsHeroSection } from "./sections/ProductsHeroSection/ProductsHeroSection";
import { TiersOverviewSection } from "./sections/TiersOverviewSection/TiersOverviewSection";
import { CatalogVerticalBentoSection } from "./sections/CatalogVerticalBentoSection/CatalogVerticalBentoSection";
import { FeatureMatrixSection } from "./sections/FeatureMatrixSection/FeatureMatrixSection";
import { StudioIntegrationSection } from "./sections/StudioIntegrationSection/StudioIntegrationSection";
import { ProductsCtaSection } from "./sections/ProductsCtaSection/ProductsCtaSection";

export function ProductsPageView() {
  return (
    <div className="flex flex-col w-full">
      <ProductsHeroSection />
      <TiersOverviewSection />
      <CatalogVerticalBentoSection />
      <FeatureMatrixSection />
      <StudioIntegrationSection />
      <ProductsCtaSection />
    </div>
  );
}
