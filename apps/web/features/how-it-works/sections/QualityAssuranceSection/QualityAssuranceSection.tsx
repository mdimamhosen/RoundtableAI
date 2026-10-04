import { Container } from "@/components/ui/Container";
import { Eye, RefreshCw, FileText } from "lucide-react";

export function QualityAssuranceSection() {
  const policies = [
    {
      icon: <Eye className="h-5 w-5 text-amber-400" />,
      title: "100% Inspection Guarantee",
      desc: "Every image completed by human retouchers is inspected by a QA lead on calibrated EIZO ColorEdge monitors.",
    },
    {
      icon: <RefreshCw className="h-5 w-5 text-emerald-400" />,
      title: "Free Targeted Revisions",
      desc: "If any shot deviates from your style guide or color targets, pin pinpoint annotations for immediate zero-credit re-processing.",
    },
    {
      icon: <FileText className="h-5 w-5 text-orange-400" />,
      title: "Strict Brand Guide Sync",
      desc: "Upload your brand's retouching guidelines, shadow angles, and canvas margins once. Our desk strictly enforces them on every batch.",
    },
  ];

  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative">
      <Container size="xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Quality Protection</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">Zero-Defect Studio Guarantee</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {policies.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-100/60 border border-white/5 space-y-3">
              <div className="p-3 rounded-xl bg-surface-200/80 w-fit">{p.icon}</div>
              <h4 className="text-base font-bold text-white">{p.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
