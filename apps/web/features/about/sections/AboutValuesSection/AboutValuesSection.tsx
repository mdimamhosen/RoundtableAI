import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eye, Shield, Users, Sparkles } from "lucide-react";

export function AboutValuesSection() {
  const values = [
    {
      icon: <Eye className="h-6 w-6 text-amber-400" />,
      title: "Anatomical Realism Over Fake Airbrushing",
      desc: "We refuse to produce plastic, smudged faces. Our neural models decouple skin pores from color gradients so fine skin texture remains 100% human and tactile.",
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: "Human-in-the-Loop Dignity",
      desc: "We don't aim to eliminate retouchers—we liberate them from pen-tool clipping masks and background wiping so they can focus on high-craft editorial color grading.",
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: "Strict Commercial Data Sovereignty",
      desc: "Your catalog imagery is your competitive advantage. ProofDesk never trains foundation models on client assets, and all storage is encrypted in isolated tenant silos.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-orange-400" />,
      title: "Precision Color Science",
      desc: "Fashion and cosmetics demand authentic fabric and skin tone fidelity. We measure color accuracy down to sub-1.0 Delta-E deviations against physical color charts.",
    },
  ];

  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative">
      <Container size="xl">
        <SectionHeading
          badge="Guiding Studio Principles"
          title="What We Stand For"
          subtitle="Our engineering standards are defined by studio digital techs, colorists, and commercial photo producers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((v, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-surface-100/60 border border-white/5 space-y-3">
              <div className="p-3 rounded-xl bg-surface-200/80 w-fit">{v.icon}</div>
              <h4 className="text-xl font-bold text-white">{v.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
