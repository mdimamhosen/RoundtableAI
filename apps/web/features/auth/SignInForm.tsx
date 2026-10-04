"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/session";
import { Mail, Lock, ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export function SignInForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password);
      router.push("/app");
    } catch (err: any) {
      setError(err?.message || "Failed to sign in. Please verify your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoFill = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      {/* Quick dev/demo credentials helper */}
      <div className="p-3 rounded-xl bg-surface-200/50 border border-white/5 space-y-2">
        <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Quick Demo Access</span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleDemoFill("client@proofdesk.local", "client-dev-pass")}
            className="flex-1 py-1 px-2 rounded bg-surface-300/60 hover:bg-surface-300 text-[11px] font-mono text-slate-300 border border-white/5 transition-colors"
          >
            Demo Client
          </button>
          <button
            type="button"
            onClick={() => handleDemoFill("admin@proofdesk.local", "admin-dev-pass")}
            className="flex-1 py-1 px-2 rounded bg-surface-300/60 hover:bg-surface-300 text-[11px] font-mono text-slate-300 border border-white/5 transition-colors"
          >
            Desk Admin
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="email"
          label="Work Email"
          type="email"
          placeholder="art.director@studio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          leftIcon={<Mail className="h-4 w-4" />}
        />

        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-medium text-slate-300 uppercase tracking-wider text-[11px]">Password</span>
            <Link href="/reset-password" className="text-amber-400 hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            leftIcon={<Lock className="h-4 w-4" />}
          />
        </div>

        <Button variant="glow" size="lg" type="submit" disabled={loading} className="w-full">
          {loading ? "Authenticating..." : "Sign In to ProofDesk"}
          <ArrowRight className="h-4 w-4 ml-1.5" />
        </Button>
      </form>

      <div className="pt-2 text-center text-xs text-slate-400">
        Don&apos;t have an account yet?{" "}
        <Link href="/sign-up" className="text-amber-400 font-semibold hover:underline">
          Sign up (50 Free Credits)
        </Link>
      </div>
    </div>
  );
}
