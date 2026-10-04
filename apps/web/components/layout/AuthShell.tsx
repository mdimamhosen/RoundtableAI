import { ReactNode } from "react";
import Link from "next/link";
import { Bot, ArrowLeft } from "lucide-react";

interface AuthShellProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthShell({ children, title, subtitle }: AuthShellProps) {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center px-4 py-12 bg-background overflow-hidden">
      {/* Dynamic ambient warm amber background blobs */}
      <div className="ambient-glow bg-amber-500/20 w-[600px] h-[600px] -top-40 -left-20 animate-pulse-slow" />
      <div className="ambient-glow bg-orange-600/20 w-[500px] h-[500px] -bottom-40 -right-20 animate-pulse-slow" />

      {/* Top back link */}
      <div className="w-full max-w-md mb-4 flex justify-start z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-surface-100/50 hover:bg-surface-200/80 border border-white/10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Roundtable AI
        </Link>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 text-slate-950 font-bold shadow-glow group-hover:scale-105 transition-transform">
              <Bot className="h-5 w-5 stroke-[2.5]" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Roundtable <span className="text-amber-400 font-mono">AI</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
        </div>

        {/* Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-surface-100/80 border border-white/10 shadow-2xl backdrop-blur-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
