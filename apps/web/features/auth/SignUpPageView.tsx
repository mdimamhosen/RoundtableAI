import Link from "next/link";
import { SignUpForm } from "./SignUpForm";

export function SignUpPageView() {
  return (
    <>
      <h1 className="font-serif text-4xl">Open a client account</h1>
      <p className="mt-3 text-sm leading-6 text-ink/75">
        You will land on an empty desk. Uploads are not wired yet.
      </p>
      <SignUpForm />
      <p className="mt-6 text-sm">
        <Link href="/sign-in" className="text-accent">
          Already registered
        </Link>
      </p>
    </>
  );
}
