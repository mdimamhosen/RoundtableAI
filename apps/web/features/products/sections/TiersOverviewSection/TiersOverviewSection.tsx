import { Container } from "@/components/ui/Container";
import { TierCard, TierData } from "./TierCard";

export function TiersOverviewSection() {
  const tiers: TierData[] = [
    {
      id: "ai-auto",
      name: "AI Autonomous",
      type: "AI",
      badge: "Sub-30s Neural",
      credits: 1,
      estPrice: "~ $0.15 / photo",
      turnaround: "< 30 sec",
      idealFor: "E-commerce lookbooks, catalog grids, packshots & ghost mannequins",
      features: [
        "Automated subject clipping & clean background",
        "Natural skin pore texture & blemish clearing",
        "Studio lighting & highlight leveling",
        "Color calibration against test swatches",
        "Lossless 16-bit TIFF / layered PSD export",
      ],
      popular: true,
    },
    {
      id: "human-basic",
      name: "Human Basic",
      type: "HUMAN",
      badge: "Specialist Ingest",
      credits: 5,
      estPrice: "~ $0.75 / photo",
      turnaround: "12 - 24 hrs",
      idealFor: "Standard apparel with intricate folds, simple ghost mannequins",
      features: [
        "Hand-drawn pen tool vector clipping path",
        "Garment de-wrinkling & symmetry alignment",
        "Stray flyaway hair removal",
        "Basic color-matching to physical garment fabric",
        "Double QA verification before release",
      ],
    },
    {
      id: "human-standard",
      name: "Human Standard",
      type: "HUMAN",
      badge: "Senior Retoucher",
      credits: 10,
      estPrice: "~ $1.50 / photo",
      turnaround: "12 - 24 hrs",
      idealFor: "Commercial beauty, high-end apparel & reflective hard goods",
      features: [
        "Everything in Human Basic",
        "Bespoke frequency separation & micro dodge & burn",
        "Jewelry reflection polish & gemstone clarity",
        "Detailed shoe & leather creasing reduction",
        "Full 16-bit PSD with labeled adjustment layers",
      ],
    },
    {
      id: "human-advanced",
      name: "Human Advanced",
      type: "HUMAN",
      badge: "Editorial Master",
      credits: 20,
      estPrice: "~ $3.00 / photo",
      turnaround: "24 hrs SLA",
      idealFor: "Hero billboard campaigns, magazine covers & luxury lookbooks",
      features: [
        "Everything in Human Standard",
        "Art Director 1-on-1 revision markup iterations",
        "Complex creative composites & background replacements",
        "Runway-level couture detail perfection",
        "Dedicated lead master retoucher assignment",
      ],
    },
  ];

  return (
    <section className="py-12 bg-background relative">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </Container>
    </section>
  );
}
