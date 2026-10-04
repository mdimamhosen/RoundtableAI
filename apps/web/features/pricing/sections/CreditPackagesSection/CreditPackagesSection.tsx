import { Container } from "@/components/ui/Container";
import { PackageCard, PackageData } from "./PackageCard";

export function CreditPackagesSection() {
  const packages: PackageData[] = [
    {
      id: "starter",
      name: "Starter Pack",
      credits: 500,
      price: "$89",
      perCredit: "$0.178 / credit",
      features: [
        "Up to 500 AI processed photos",
        "Or 50 Human Standard retouches",
        "Full 16-bit TIFF / layered PSD export",
        "Credits never expire",
        "Web upload portal access",
      ],
    },
    {
      id: "studio",
      name: "Studio Production",
      credits: 2500,
      price: "$349",
      perCredit: "$0.139 / credit",
      badge: "Save 22%",
      popular: true,
      features: [
        "Up to 2,500 AI processed photos",
        "Or 250 Human Standard retouches",
        "Priority neural processing queues",
        "Unlimited studio team members",
        "MinIO / AWS S3 direct folder sync",
        "Dedicated QA escalation lead",
      ],
    },
    {
      id: "catalog",
      name: "Catalog Scale",
      credits: 10000,
      price: "$1,190",
      perCredit: "$0.119 / credit",
      badge: "Save 33%",
      features: [
        "Up to 10,000 AI processed photos",
        "Or 1,000 Human Standard retouches",
        "Custom brand LUT calibration",
        "Fast-track human desk queue SLA",
        "REST API & Webhooks access",
        "Invoicing & Net-30 payment terms",
      ],
    },
  ];

  return (
    <section className="py-12 bg-background relative">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Container>
    </section>
  );
}
