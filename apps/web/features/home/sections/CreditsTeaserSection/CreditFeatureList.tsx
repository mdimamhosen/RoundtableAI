import { Check } from "lucide-react";

export function CreditFeatureList() {
  const perks = [
    {
      title: "Credits Never Expire",
      desc: "Buy volume packages and draw them down as seasonal shoots ramp up and down.",
    },
    {
      title: "Shared Team Pool",
      desc: "Distribute balance across studio digital techs, art directors, and freelance photographers.",
    },
    {
      title: "1-Click Escalation To Human Retouchers",
      desc: "Spend 10 credits whenever an automated result requires bespoke manual pen-tool or high-end grading.",
    },
    {
      title: "Enterprise S3/MinIO Ingest",
      desc: "Connect your existing studio storage buckets directly for zero-upload-friction ingestion.",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl sm:text-3xl font-bold text-white">Transparent, predictable studio economics.</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        No restrictive annual seat lock-ins for team members who only touch the app once a month. Pay only for processed catalog assets.
      </p>

      <div className="space-y-4 pt-2">
        {perks.map((p, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-amber-500/20 text-amber-400 mt-1">
              <Check className="h-3.5 w-3.5" />
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white">{p.title}</h5>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
