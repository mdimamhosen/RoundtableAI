import { AuthShell } from "@/components/layout/AuthShell";
import { VerifyEmailCard } from "@/features/auth/VerifyEmailCard";

export const metadata = {
  title: "Verify Email — ProofDesk AI Retouching",
  description: "Verify your email address on ProofDesk.",
};

export default function VerifyEmailPage() {
  return (
    <AuthShell title="Verify Email" subtitle="Confirm your studio email address">
      <VerifyEmailCard />
    </AuthShell>
  );
}
