import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HumanDeskPathSection() {
  const workflow = [
    {
      role: "Desk Dispatcher",
      action: "Triage & Art Director Brief Ingest",
      desc: "Assigns the job to a vetted specialist based on category expertise (jewelry, high fashion, footwear, beauty).",
    },
    {
      role: "Senior Retoucher",
      action: "Precision Vector Pen & Manual Sculpting",
      desc: "Performs complex hand-drawn paths, ghost mannequin interior stitching, reflective metal smoothing, and custom dodge & burn.",
    },
    {
      role: "Quality Assurance Lead",
      action: "Double-Blind Verification & Delta-E Audit",
      desc: "Strictly compares final PSD layers against original RAW color charts and client brand guidelines before sign-off.",
    },
    {
      role: "Client Review Portal",
      action: "1-Click Approvals & Annotation Tools",
      desc: "Review high-res side-by-side proofs directly in your browser. Request free targeted touch-up revisions in 1 click.",
    },
  ];

  return (
    <section className="py-20 bg-background border-t border-white/5 relative">
      <Container size="xl">
        <SectionHeading
          badge="Track B — Human Editorial Desk"
          title="When You Need Master Artistry."
          titleGradient="Escalate in 1 Click."
          subtitle="Our specialized desk retouchers are certified industry professionals, not low-cost generalists. Dedicated to fashion, beauty, and luxury campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflow.map((w, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-100/60 border border-orange-500/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-orange-400 font-semibold block mb-2">
                  {w.role}
                </span>
                <h4 className="text-base font-bold text-white mb-2">{w.action}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
