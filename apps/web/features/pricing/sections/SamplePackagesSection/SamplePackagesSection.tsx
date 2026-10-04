import { PackageIntro } from "./PackageIntro";
import { PackageAi } from "./PackageAi";
import { PackageHuman } from "./PackageHuman";
import { PackageFoot } from "./PackageFoot";
import { Container } from "@/components/ui/Container";

export function SamplePackagesSection() {
  return (
    <section className="border-t border-line bg-[#ebe6dc]">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr]">
                    <PackageIntro />
          <PackageAi />
          <PackageHuman />
          <PackageFoot />
        </div>
      </Container>
    </section>
  );
}
