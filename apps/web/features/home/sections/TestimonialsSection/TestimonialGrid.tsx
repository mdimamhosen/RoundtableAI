import { TestimonialCard } from "./TestimonialCard";

export function TestimonialGrid() {
  const testimonials = [
    {
      quote: "ProofDesk turned our multi-day lookbook retouching bottleneck into a coffee-break operation. The Delta-E color consistency across all 1,200 SKUs was flawless.",
      author: "Elena Rostova",
      role: "Global Head of Studio Operations",
      company: "Nordic Apparel Co.",
    },
    {
      quote: "The ability to have automated AI batch processing for 95% of catalog shots with instant escalation to senior human retouchers for hero banners is unprecedented.",
      author: "Marcus Vance",
      role: "Creative Production Director",
      company: "Studio Aura NY",
    },
    {
      quote: "We compared ProofDesk against standard manual overseas post-production houses. We saved $32,000 on our fall collection while cutting delivery time from 5 days to 2 minutes.",
      author: "Sarah Chen",
      role: "VP of E-Commerce",
      company: "Lumiere Eyewear",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <TestimonialCard key={idx} {...t} />
      ))}
    </div>
  );
}
