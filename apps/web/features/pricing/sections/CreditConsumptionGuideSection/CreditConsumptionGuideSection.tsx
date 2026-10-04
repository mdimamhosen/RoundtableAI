import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function CreditConsumptionGuideSection() {
  const items = [
    {
      action: "AI Autonomous Full Retouch",
      cost: "1 Credit",
      turnaround: "< 30 sec",
      includes: "Blemish clean, skin pore retention, background clip, color calibration",
      type: "AI",
    },
    {
      action: "Human Basic Retouch",
      cost: "5 Credits",
      turnaround: "12 - 24 hrs",
      includes: "Hand pen vector clipping path, simple de-wrinkle, flyaway hair clean",
      type: "Human",
    },
    {
      action: "Human Standard Retouch",
      cost: "10 Credits",
      turnaround: "12 - 24 hrs",
      includes: "Editorial frequency separation, micro dodge & burn, jewelry glare polish",
      type: "Human",
    },
    {
      action: "Human Advanced / Runway Retouch",
      cost: "20 Credits",
      turnaround: "24 hrs SLA",
      includes: "Art director 1-on-1 revisions, master couture composite, creative grading",
      type: "Human",
    },
  ];

  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative">
      <Container size="xl">
        <SectionHeading
          badge="Credit Value Transparency"
          title="How Credits Are Consumed"
          subtitle="Use your credit wallet across any combination of services with complete real-time tracking."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                      item.type === "AI"
                        ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                        : "bg-orange-500/15 text-orange-300 border border-orange-500/30"
                    }`}
                  >
                    {item.type} Processing
                  </span>
                  <span className="font-mono font-bold text-white text-sm">{item.cost}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{item.action}</h4>
                <p className="text-xs text-slate-400 mb-4">{item.includes}</p>
              </div>
              <div className="pt-3 border-t border-white/5 text-xs text-amber-400 font-mono flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Turnaround: {item.turnaround}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
