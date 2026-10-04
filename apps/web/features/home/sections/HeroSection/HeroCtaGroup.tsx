import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";

export function HeroCtaGroup() {
  return (
    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      <Link href="/sign-up">
        <Button variant="glow" size="lg" className="w-full sm:w-auto">
          Start Free Trial (50 Credits)
          <ArrowRight className="h-4 w-4 ml-1.5" />
        </Button>
      </Link>
      <Link href="/demo">
        <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center gap-2">
          <Play className="h-4 w-4 text-amber-400 fill-amber-400/20" />
          Interactive 3D Solar Orb
        </Button>
      </Link>
      <div className="flex items-center gap-1.5 text-xs text-slate-400 pl-1">
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
        <span>No credit card required</span>
      </div>
    </div>
  );
}
