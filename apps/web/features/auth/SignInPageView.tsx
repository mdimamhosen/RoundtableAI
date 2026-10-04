import Link from "next/link";
import { SignInForm } from "./SignInForm";

export function SignInPageView() {
  return (
    <>
      <h1 className="font-serif text-4xl">Sign in</h1>
      <p className="mt-3 text-sm leading-6 text-ink/75">
        Client accounts only in this phase. The API is at the address in NEXT_PUBLIC_API_URL.
      </p>
      <SignInForm />
      <p className="mt-6 text-sm">
        <Link href="/sign-up" className="text-accent">
          Create a client account
        </Link>
        <span className="mx-2 text-ink/40">/</span>
        <Link href="/reset-password" className="text-accent">
          Reset password
        </Link>
      </p>
    </>
  );
}
