import { Container } from "@/components/ui/Container";

export function PricingFaqSection() {
  const faqs = [
    {
      q: "Do purchased credits ever expire?",
      a: "Never. Credits purchased on ProofDesk remain in your studio balance indefinitely, through off-seasons and ramp-up cycles.",
    },
    {
      q: "Can I share my credit balance with my team?",
      a: "Yes. ProofDesk permits unlimited team member logins under a single client organisation. Digital techs, art directors, and studio managers all draw from the shared credit pool.",
    },
    {
      q: "Do you offer enterprise invoicing or purchase orders?",
      a: "Yes. For volume commitments above $2,500, we provide Net-30 invoicing, wire transfer options, and dedicated procurement onboarding.",
    },
    {
      q: "What is your refund policy on quality?",
      a: "If an automated shot or human delivery fails to match your brand style guide or Delta-E color benchmarks, we offer instant free re-runs or a full credit refund for that asset.",
    },
  ];

  return (
    <section className="py-20 bg-background border-t border-white/5 relative">
      <Container size="md">
        <h3 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Billing Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-surface-100/60 border border-white/5 space-y-2">
              <h5 className="text-sm font-semibold text-white">{faq.q}</h5>
              <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
