import { AuthShell } from "@/components/layout/AuthShell";
import { SignInForm } from "@/features/auth/SignInForm";

export const metadata = {
  title: "Sign In — ProofDesk AI Retouching",
  description: "Sign in to your ProofDesk commercial studio portal.",
};

export default function SignInPage() {
  return (
    <AuthShell title="Welcome Back" subtitle="Sign in to manage your studio retouching batches">
      <SignInForm />
    </AuthShell>
  );
}
