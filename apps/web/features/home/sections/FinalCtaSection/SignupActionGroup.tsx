import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function SignupActionGroup() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
        <Link href="/sign-up" className="w-full sm:w-auto">
          <Button variant="glow" size="lg" className="w-full sm:w-auto">
            Start Free Studio Trial
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </Link>
        <Link href="/demo" className="w-full sm:w-auto">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Explore 3D Solar Orb Demo
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          50 Free Credits on Signup
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-amber-400" />
          No credit card required
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-yellow-400" />
          Full RAW Export Included
        </span>
      </div>
    </div>
  );
}
