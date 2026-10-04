import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function PricingCtaSection() {
  return (
    <section className="py-20 bg-surface-50/30 border-t border-white/5 text-center">
      <Container size="md">
        <h3 className="text-3xl font-bold text-white mb-4">Claim your 50 free credits now</h3>
        <p className="text-sm text-slate-400 mb-8 max-w-lg mx-auto">
          Test ProofDesk with zero financial commitment. Experience sub-30s neural turnaround on your own studio RAW files.
        </p>
        <Link href="/sign-up">
          <Button variant="glow" size="lg">
            Start Free Studio Trial
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>No credit card required • Instant activation</span>
        </div>
      </Container>
    </section>
  );
}
