import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check, Coins } from "lucide-react";

export interface PackageData {
  id: string;
  name: string;
  credits: number;
  price: string;
  perCredit: string;
  badge?: string;
  popular?: boolean;
  features: string[];
}

export function PackageCard({ pkg }: { pkg: PackageData }) {
  return (
    <Card
      hover
      className={`p-6 sm:p-8 flex flex-col justify-between relative ${
        pkg.popular ? "border-amber-500 shadow-glow bg-surface-100/90" : "border-white/10 bg-surface-100/60"
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md">
            Best Value for Studios
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
          {pkg.badge && <Badge variant="gold">{pkg.badge}</Badge>}
        </div>

        <div className="my-6 p-4 rounded-xl bg-surface-200/50 border border-white/5">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-white">{pkg.price}</span>
            <span className="text-xs text-slate-400 font-mono">one-time / refill</span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-xs">
            <span className="text-amber-400 font-mono font-bold flex items-center gap-1">
              <Coins className="h-3.5 w-3.5" /> {pkg.credits.toLocaleString()} Credits
            </span>
            <span className="text-slate-400 font-mono">{pkg.perCredit}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {pkg.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/sign-up">
        <Button variant={pkg.popular ? "glow" : "secondary"} className="w-full">
          Get {pkg.name}
        </Button>
      </Link>
    </Card>
  );
}
