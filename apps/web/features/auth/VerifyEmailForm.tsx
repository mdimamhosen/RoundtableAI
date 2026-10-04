"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { api } from "@/lib/api/client";

export function VerifyEmailForm() {
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  async function requestToken(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setError("");
    try {
      const result = await api.requestVerify(String(form.get("email") || ""));
      setNote(result.devToken ? `${result.message} Dev token: ${result.devToken}` : result.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed.");
    }
  }

  async function confirm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setError("");
    try {
      await api.confirmVerify(String(form.get("token") || ""));
      setNote("Email marked verified.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Token was rejected.");
    }
  }

  return (
    <div className="mt-8 space-y-8">
      <form onSubmit={requestToken} className="space-y-4">
        <Input label="Account email" name="email" type="email" required />
        <Button type="submit">Store a verify token</Button>
      </form>
      <form onSubmit={confirm} className="space-y-4 border-t border-line pt-6">
        <Input label="Token" name="token" required minLength={20} />
        <Button type="submit" tone="accent">
          Confirm
        </Button>
      </form>
      {note ? <p className="break-all text-sm leading-6">{note}</p> : null}
      {error ? <p className="text-sm text-accent">{error}</p> : null}
    </div>
  );
}
