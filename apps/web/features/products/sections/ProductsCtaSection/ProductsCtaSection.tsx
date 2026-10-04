import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductsCtaSection() {
  return (
    <section className="py-20 bg-surface-50/30 border-t border-white/5 text-center">
      <Container size="md">
        <h3 className="text-3xl font-bold text-white mb-4">Start testing your product catalog</h3>
        <p className="text-sm text-slate-400 mb-8 max-w-lg mx-auto">
          Every new client account starts with 50 complimentary credits. Try all four tiers and compare with your current studio turnaround.
        </p>
        <Link href="/sign-up">
          <Button variant="glow" size="lg">
            Create Free Client Account
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </Link>
      </Container>
    </section>
  );
}
