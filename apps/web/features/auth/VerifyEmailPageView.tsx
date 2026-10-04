import { VerifyEmailForm } from "./VerifyEmailForm";

export function VerifyEmailPageView() {
  return (
    <>
      <h1 className="font-serif text-4xl">Verify email</h1>
      <p className="mt-3 text-sm leading-6 text-ink/75">
        Mail is not sent. The API writes a token row and returns it here so you can confirm on this machine.
      </p>
      <VerifyEmailForm />
    </>
  );
}
