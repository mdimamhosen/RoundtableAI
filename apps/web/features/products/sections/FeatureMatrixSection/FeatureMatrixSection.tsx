import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, Minus } from "lucide-react";

export function FeatureMatrixSection() {
  const rows = [
    { feature: "Turnaround Time", ai: "< 30 sec", basic: "12-24 hrs", standard: "12-24 hrs", advanced: "24 hrs" },
    { feature: "Cost in Credits", ai: "1 Credit", basic: "5 Credits", standard: "10 Credits", advanced: "20 Credits" },
    { feature: "Vector Clipping Path", ai: "AI Mask", basic: "Hand Pen Tool", standard: "Hand Pen Tool", advanced: "Hand Pen Tool" },
    { feature: "Skin Frequency Separation", ai: "Neural Split", basic: "Basic Clean", standard: "Master Micro D&B", advanced: "Editorial Couture" },
    { feature: "Jewelry Glare & Metal Polish", ai: "Basic", basic: "Manual Clean", standard: "Full Retouch", advanced: "Bespoke Sculpt" },
    { feature: "Ghost Mannequin Stitching", ai: "Automated", basic: "Manual Seam", standard: "Manual Seam", advanced: "Manual Seam" },
    { feature: "Layered PSD with Masks", ai: true, basic: true, standard: true, advanced: true },
    { feature: "Art Director Revision Cycles", ai: false, basic: "1 Revision", standard: "2 Revisions", advanced: "Unlimited" },
    { feature: "Color Calibration (Delta-E)", ai: true, basic: true, standard: true, advanced: true },
  ];

  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative">
      <Container size="xl">
        <SectionHeading
          badge="Detailed Comparison"
          title="Feature Matrix by Tier"
          subtitle="Choose the exact capability level required for your catalog deliverables."
        />

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-surface-100/60 backdrop-blur-md">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 bg-surface-200/50">
                <th className="p-4 sm:p-5 font-semibold">Capability</th>
                <th className="p-4 sm:p-5 font-semibold text-amber-400">AI Autonomous</th>
                <th className="p-4 sm:p-5 font-semibold">Human Basic</th>
                <th className="p-4 sm:p-5 font-semibold text-amber-300">Human Standard</th>
                <th className="p-4 sm:p-5 font-semibold text-orange-400">Human Advanced</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-xs">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 sm:p-5 font-sans font-medium text-white">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-amber-400">
                    {typeof row.ai === "boolean" ? (
                      row.ai ? <Check className="h-4 w-4 text-emerald-400" /> : <Minus className="h-4 w-4 text-slate-600" />
                    ) : (
                      row.ai
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-300">
                    {typeof row.basic === "boolean" ? (
                      row.basic ? <Check className="h-4 w-4 text-emerald-400" /> : <Minus className="h-4 w-4 text-slate-600" />
                    ) : (
                      row.basic
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-amber-300">
                    {typeof row.standard === "boolean" ? (
                      row.standard ? <Check className="h-4 w-4 text-emerald-400" /> : <Minus className="h-4 w-4 text-slate-600" />
                    ) : (
                      row.standard
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-orange-400 font-semibold">
                    {typeof row.advanced === "boolean" ? (
                      row.advanced ? <Check className="h-4 w-4 text-emerald-400" /> : <Minus className="h-4 w-4 text-slate-600" />
                    ) : (
                      row.advanced
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
