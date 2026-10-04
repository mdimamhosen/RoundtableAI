"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { apiClient } from "@/lib/api/client";
import { Mail, Lock, Key, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

export function ResetPasswordCard() {
  const [step, setStep] = useState<"request" | "reset">("request");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await apiClient<{ success: boolean; message: string; devToken?: string }>(
        "/auth/reset-password/request",
        {
          method: "POST",
          body: JSON.stringify({ email: email.trim() }),
        },
      );
      setStatus("idle");
      setStep("reset");
      if (res.devToken) {
        setToken(res.devToken);
      }
      setMessage("Reset instructions dispatched! Please enter your token and new password.");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Failed to request password reset.");
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await apiClient<{ success: boolean; message: string }>("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ token: token.trim(), newPassword }),
      });
      setStatus("success");
      setMessage(res.message || "Password successfully changed!");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Failed to reset password.");
    }
  };

  return (
    <div className="space-y-6">
      {status === "success" ? (
        <div className="text-center space-y-4 py-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Password Updated</h3>
          <p className="text-xs text-slate-300">{message}</p>
          <Link href="/sign-in">
            <Button variant="glow" className="w-full mt-4">
              Sign In with New Password
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      ) : step === "request" ? (
        <form onSubmit={handleRequest} className="space-y-4">
          <p className="text-xs text-slate-300 leading-relaxed">
            Enter your account email. We will send a secure password reset token to your inbox.
          </p>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
              <span>{message}</span>
            </div>
          )}

          <Input
            id="reset-email"
            label="Account Email"
            type="email"
            placeholder="director@studio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            leftIcon={<Mail className="h-4 w-4" />}
          />

          <Button variant="glow" size="lg" type="submit" disabled={status === "loading"} className="w-full">
            {status === "loading" ? "Dispatching..." : "Send Reset Token"}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleReset} className="space-y-4">
          {message && (
            <p className="text-xs text-brand-cyan bg-brand-500/10 p-2.5 rounded-lg border border-brand-500/20">
              {message}
            </p>
          )}

          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
              <span>{message}</span>
            </div>
          )}

          <Input
            id="reset-token"
            label="Reset Token"
            type="text"
            placeholder="paste-reset-token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            leftIcon={<Key className="h-4 w-4" />}
          />

          <Input
            id="new-pass"
            label="New Password (min 8 chars)"
            type="password"
            placeholder="••••••••••••"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            leftIcon={<Lock className="h-4 w-4" />}
          />

          <Button variant="glow" size="lg" type="submit" disabled={status === "loading"} className="w-full">
            {status === "loading" ? "Updating Password..." : "Set New Password"}
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
