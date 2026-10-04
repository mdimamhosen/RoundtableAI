import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Zap, Palette, Check, Clock } from "lucide-react";

export interface TierData {
  id: string;
  name: string;
  type: "AI" | "HUMAN";
  badge: string;
  credits: number;
  estPrice: string;
  turnaround: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
}

export function TierCard({ tier }: { tier: TierData }) {
  const icon = {
    AI: <Zap className="h-5 w-5 text-amber-400" />,
    HUMAN: <Palette className="h-5 w-5 text-orange-400" />,
  }[tier.type];

  return (
    <Card
      hover
      className={`p-6 sm:p-8 flex flex-col justify-between relative ${
        tier.popular ? "border-amber-500 shadow-glow bg-surface-100/90" : "border-white/10 bg-surface-100/60"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-surface-200 border border-white/5">{icon}</div>
            <h3 className="text-xl font-bold text-white">{tier.name}</h3>
          </div>
          <Badge variant={tier.type === "AI" ? "gold" : "amber"}>{tier.badge}</Badge>
        </div>

        <div className="my-6 p-4 rounded-xl bg-surface-200/50 border border-white/5">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{tier.credits}</span>
            <span className="text-xs uppercase font-mono text-slate-400">Credit{tier.credits > 1 ? "s" : ""} / photo</span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-xs">
            <span className="text-slate-400">{tier.estPrice}</span>
            <span className="text-amber-400 font-mono flex items-center gap-1">
              <Clock className="h-3 w-3" /> {tier.turnaround}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-6 italic">{tier.idealFor}</p>

        <ul className="space-y-3 mb-8">
          {tier.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/sign-up">
        <Button variant={tier.popular ? "glow" : "secondary"} className="w-full">
          Select {tier.name}
        </Button>
      </Link>
    </Card>
  );
}
