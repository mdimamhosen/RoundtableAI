import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden bg-studio-grid">
      <div className="ambient-glow bg-amber-500/20 w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 max-w-md w-full p-8 rounded-3xl bg-surface-100/90 border border-white/10 backdrop-blur-2xl shadow-glass text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-glow">
          <Compass className="h-8 w-8 animate-spin duration-[10000ms]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            404 • Coordinate Lost
          </span>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Frame Not Found
          </h1>
          <p className="text-sm text-slate-400">
            The studio route or catalog asset you're requesting does not exist in the active neural index.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-all shadow-glow"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Studio Home</span>
        </Link>
      </div>
    </div>
  );
}
