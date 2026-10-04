import { UploadCloud, Cpu, SlidersHorizontal, UserCheck, Download } from "lucide-react";

export function PipelineStepList() {
  const steps = [
    {
      num: "01",
      icon: <UploadCloud className="h-5 w-5 text-amber-400" />,
      title: "Batch Ingest",
      desc: "Drop RAW, CR3, ARW, TIFF or JPG files via S3/MinIO bucket connector or web client.",
    },
    {
      num: "02",
      icon: <Cpu className="h-5 w-5 text-amber-500" />,
      title: "Neural Geometry & Micro-Tone",
      desc: "Smart perspective correction, subject extraction, frequency splitting, and skin tone harmonization.",
    },
    {
      num: "03",
      icon: <SlidersHorizontal className="h-5 w-5 text-orange-400" />,
      title: "Automated Studio Grading",
      desc: "Apply your brand lookbook LUTs and guidelines with mathematical Delta-E color consistency.",
    },
    {
      num: "04",
      icon: <UserCheck className="h-5 w-5 text-emerald-400" />,
      title: "Human Escalation / QA",
      desc: "Flag uncertain edge cases or high-value heroes to the specialized desk retouchers.",
    },
    {
      num: "05",
      icon: <Download className="h-5 w-5 text-yellow-400" />,
      title: "Layered Export & CDN Sync",
      desc: "Receive layered PSDs with masks or multi-crop web assets ready for Shopify, Amazon, or CMS.",
    },
  ];

  return (
    <div className="space-y-4">
      {steps.map((s, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 p-4 rounded-xl bg-surface-100/60 border border-white/5 hover:border-amber-500/20 transition-all"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-200 border border-white/10 font-mono text-xs font-bold text-white">
            {s.num}
          </div>
          <div>
            <div className="flex items-center gap-2">
              {s.icon}
              <h4 className="text-base font-bold text-white">{s.title}</h4>
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
