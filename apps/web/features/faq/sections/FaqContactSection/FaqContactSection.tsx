import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";

export function FaqContactSection() {
  return (
    <section className="py-20 bg-surface-50/20 border-t border-white/5 relative text-center">
      <Container size="md">
        <h3 className="text-2xl font-bold text-white mb-2">Have a custom studio requirement?</h3>
        <p className="text-sm text-slate-400 mb-8 max-w-lg mx-auto">
          Our studio solutions architects and senior retouching leads can review your sample batch and test against your brand style guidelines.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/sign-up">
            <Button variant="glow" size="lg">
              Test With 50 Free Credits
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
          <a href="mailto:support@proofdesk.local">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-cyan" />
              Contact Studio Engineering
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
