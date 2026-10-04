"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { apiClient } from "@/lib/api/client";
import { CheckCircle2, AlertCircle, ArrowRight, Mail } from "lucide-react";

export function VerifyEmailCard() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;

    setStatus("loading");
    try {
      const res = await apiClient<{ success: boolean; message: string }>("/auth/verify-email", {
        method: "POST",
        body: JSON.stringify({ token: token.trim() }),
      });
      setStatus("success");
      setMessage(res.message || "Email verified successfully!");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Invalid or expired verification token.");
    }
  };

  return (
    <div className="space-y-6">
      {status === "success" ? (
        <div className="text-center space-y-4 py-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Email Successfully Verified</h3>
          <p className="text-xs text-slate-300">{message}</p>
          <Link href="/sign-in">
            <Button variant="glow" className="w-full mt-4">
              Proceed to Sign In
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleVerify} className="space-y-4">
          <p className="text-xs text-slate-300 leading-relaxed">
            Enter the confirmation token sent to your email inbox, or paste your verification link parameter below.
          </p>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
              <span>{message}</span>
            </div>
          )}

          <Input
            id="token"
            label="Verification Token"
            type="text"
            placeholder="paste-verification-token-here"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            leftIcon={<Mail className="h-4 w-4" />}
          />

          <Button variant="glow" size="lg" type="submit" disabled={status === "loading"} className="w-full">
            {status === "loading" ? "Verifying Token..." : "Verify Email Address"}
          </Button>
        </form>
      )}

      <div className="text-center pt-2 text-xs text-slate-400">
        <Link href="/sign-in" className="text-slate-300 hover:text-white">
          ← Back to Sign In
        </Link>
      </div>
    </div>
  );
}
