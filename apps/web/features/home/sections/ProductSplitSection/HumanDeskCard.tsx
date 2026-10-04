import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Palette, CheckCircle2, ArrowRight } from "lucide-react";

export function HumanDeskCard() {
  const features = [
    "Dedicated senior fashion & product retouchers",
    "Complex ghost mannequin & high-end jewelry reflection polish",
    "Detailed art-directed dodge & burn sculpting",
    "Double QA verification before client delivery",
    "Guaranteed 12 to 24-hour turnaround SLA",
  ];

  return (
    <Card hover className="flex flex-col justify-between border-orange-500/30 bg-surface-100/90 relative">
      <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3">
        <Badge variant="amber">Human Studio Desk</Badge>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
            <Palette className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Human Expert Desk</h3>
            <p className="text-xs text-slate-400">For hero marketing banners & luxury prints</p>
          </div>
        </div>

        <div className="my-6 p-4 rounded-xl bg-surface-200/50 border border-white/5">
          <span className="text-xs text-slate-400">Pricing starting at</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold text-white">10 Credits</span>
            <span className="text-xs text-orange-400 font-mono">~ $1.50 / photo</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/products">
        <Button variant="secondary" className="w-full">
          View Human Studio Tiers
          <ArrowRight className="h-4 w-4 ml-1.5" />
        </Button>
      </Link>
    </Card>
  );
}
