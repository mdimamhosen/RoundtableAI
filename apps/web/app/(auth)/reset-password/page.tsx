import { AuthShell } from "@/components/layout/AuthShell";
import { ResetPasswordCard } from "@/features/auth/ResetPasswordCard";

export const metadata = {
  title: "Reset Password — ProofDesk AI Retouching",
  description: "Reset your studio account password on ProofDesk.",
};

export default function ResetPasswordPage() {
  return (
    <AuthShell title="Reset Password" subtitle="Enter your email to receive recovery instructions">
      <ResetPasswordCard />
    </AuthShell>
  );
}
