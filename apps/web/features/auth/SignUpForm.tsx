"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth/session";
import { Mail, Lock, User, ArrowRight, AlertCircle, ShieldCheck } from "lucide-react";

export function SignUpForm() {
  const router = useRouter();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    try {
      await register(name, email, password);
      router.push("/app");
    } catch (err: any) {
      setError(err?.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="name"
          label="Your Full Name"
          type="text"
          placeholder="Elena Rostova"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          leftIcon={<User className="h-4 w-4" />}
        />

        <Input
          id="email"
          label="Studio / Work Email"
          type="email"
          placeholder="elena@nordicstudio.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          leftIcon={<Mail className="h-4 w-4" />}
        />

        <Input
          id="password"
          label="Create Password (min. 8 chars)"
          type="password"
          placeholder="••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          hint="Must include at least 8 characters"
          leftIcon={<Lock className="h-4 w-4" />}
        />

        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>Includes 50 complimentary studio credits upon creation.</span>
        </div>

        <Button variant="glow" size="lg" type="submit" disabled={loading} className="w-full">
          {loading ? "Creating Account..." : "Create Account & Claim Credits"}
          <ArrowRight className="h-4 w-4 ml-1.5" />
        </Button>
      </form>

      <div className="pt-2 text-center text-xs text-slate-400">
        Already have a studio account?{" "}
        <Link href="/sign-in" className="text-amber-400 font-semibold hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
