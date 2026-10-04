import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Zap, Sliders, Scan, Layers } from "lucide-react";

export function AiNeuralPathSection() {
  const steps = [
    {
      num: "01",
      icon: <Scan className="h-5 w-5 text-amber-400" />,
      title: "RAW Color Debayering & ICC Profiling",
      desc: "Our ingest engine ingests sensor data in 16-bit linear precision, preserving dynamic range highlights and color-calibrating against X-Rite / Spyder standards.",
    },
    {
      num: "02",
      icon: <Layers className="h-5 w-5 text-amber-500" />,
      title: "Sub-Pixel Semantic Segmentation",
      desc: "Neural vision models isolate subject silhouette, garments, hair strands, and background shadows down to individual sub-pixel alpha gradients.",
    },
    {
      num: "03",
      icon: <Sliders className="h-5 w-5 text-orange-400" />,
      title: "Frequency-Separated Skin & Fabric Cleanup",
      desc: "Transient blemishes, stray studio dust, and seam imperfections are resolved on low-frequency gradient layers while high-frequency pore anatomy remains 100% untouched.",
    },
    {
      num: "04",
      icon: <Zap className="h-5 w-5 text-emerald-400" />,
      title: "Autonomous Quality Scoring & Export",
      desc: "The asset is verified against 28 geometric and color standards. If score > 95%, PSD/TIFF layers are exported to the client bucket in under 30 seconds.",
    },
  ];

  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative">
      <Container size="xl">
        <SectionHeading
          badge="Track A — Sub-30s Automated Velocity"
          title="The Neural Retouching Path"
          subtitle="Every image undergoes an automated four-stage deep neural enhancement pipeline designed for commercial catalog volume."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-100/60 border border-amber-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Step {s.num}
                  </span>
                  <div className="p-2 rounded-lg bg-surface-200">{s.icon}</div>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{s.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
