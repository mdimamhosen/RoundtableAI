import { AuthShell } from "@/components/layout/AuthShell";
import { SignUpForm } from "@/features/auth/SignUpForm";

export const metadata = {
  title: "Create Studio Account — ProofDesk AI Retouching",
  description: "Create a client account on ProofDesk and receive 50 complimentary studio credits.",
};

export default function SignUpPage() {
  return (
    <AuthShell title="Create Studio Account" subtitle="Get 50 free credits to test on your own RAW files">
      <SignUpForm />
    </AuthShell>
  );
}
