import Link from "next/link";
import { ResetPasswordForm } from "./ResetPasswordForm";

export function ResetPasswordPageView() {
  return (
    <>
      <h1 className="font-serif text-4xl">Reset password</h1>
      <p className="mt-3 text-sm leading-6 text-ink/75">
        No email goes out. If the address exists, the API returns a dev token in the response.
      </p>
      <ResetPasswordForm />
      <p className="mt-6 text-sm">
        <Link href="/sign-in" className="text-accent">
          Back to sign in
        </Link>
      </p>
    </>
  );
}
