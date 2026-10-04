import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function HowItWorksCtaSection() {
  return (
    <section className="py-20 bg-background border-t border-white/5 text-center">
      <Container size="md">
        <h3 className="text-3xl font-bold text-white mb-4">Experience the workflow live in 3D</h3>
        <p className="text-sm text-slate-400 mb-8 max-w-lg mx-auto">
          Launch our solar AI orb simulation or create a trial account with 50 credits to upload your first test batch.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/demo">
            <Button variant="glow" size="lg" className="flex items-center gap-2">
              <Play className="h-4 w-4 fill-slate-950" />
              Watch Solar AI Orb Demo
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline" size="lg">
              Start Free Trial (50 Credits)
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
