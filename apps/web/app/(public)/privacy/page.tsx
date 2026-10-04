import { Container } from "@/components/ui/Container";
import { ShieldCheck, Lock, CheckCircle2, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy & Terms — ProofDesk AI Retouching",
  description: "Enterprise zero-retention data privacy guarantee and terms of service for studio photography.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24 relative overflow-hidden bg-background">
      <div className="ambient-glow bg-amber-500/15 w-[600px] h-[600px] -top-32 left-1/2 -translate-x-1/2" />

      <Container size="lg" className="relative z-10 space-y-12">
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Studio Overview</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
            <span>Zero-Retention Privacy Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Privacy Policy & <span className="text-gradient-brand">Client Terms</span>
          </h1>
          <p className="text-sm text-slate-300">
            Last updated: October 2026 • Effective for all ProofDesk commercial and studio accounts.
          </p>
        </div>

        <div className="rounded-3xl p-8 sm:p-10 bg-surface-100/90 border border-white/10 backdrop-blur-2xl shadow-glass space-y-8 text-slate-300 text-sm leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="h-5 w-5 text-amber-400" />
              1. Zero-Retention Commercial IP Guarantee
            </h2>
            <p>
              Your high-resolution photographs, RAW sensor files, and lookbook assets remain 100% your proprietary intellectual property. ProofDesk strictly adheres to a zero-retention policy: customer images are processed within ephemeral GPU memory containers and are <strong>never</strong> utilized to train, fine-tune, or calibrate public AI foundation models.
            </p>
          </div>

          <div className="space-y-3 border-t border-white/5 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              2. Data Encryption & Storage Security
            </h2>
            <p>
              All assets transmitted to ProofDesk utilize TLS 1.3 encryption in transit and AES-256 encryption at rest. S3 / MinIO presigned upload URLs expire automatically after 15 minutes. Exported derivative files are securely purged after your configured retention window (default 30 days).
            </p>
          </div>

          <div className="space-y-3 border-t border-white/5 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-amber-400" />
              3. Human Desk Confidentiality
            </h2>
            <p>
              All certified master retouchers on our editorial human desk operate under strictly binding non-disclosure agreements (NDAs) on calibrated, sandboxed workstations. Unreleased fashion campaigns and catalog shoots are kept strictly confidential.
            </p>
          </div>

          <div className="space-y-3 border-t border-white/5 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-amber-400" />
              4. Credit Lifespan & Service Guarantees
            </h2>
            <p>
              ProofDesk credits do not expire. Standard AI processing is guaranteed sub-30 seconds per frame. Human editorial desk hand-offs carry a guaranteed 12-hour completion SLA with free revisions until brief compliance is satisfied.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
