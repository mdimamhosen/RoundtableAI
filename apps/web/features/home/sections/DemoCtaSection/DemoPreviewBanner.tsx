import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Sparkles, Play } from "lucide-react";

export function DemoPreviewBanner() {
  return (
    <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-surface-100 via-surface-200 to-amber-950/30 border border-amber-500/30 overflow-hidden shadow-2xl">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          Interactive WebGL 3D Experience
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Watch our <span className="text-gradient-brand">Solar AI Orb</span> explain the studio architecture.
        </h3>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Step into an interactive 3D simulation with dynamic particle displacement, speech wave synchronization, and scripted studio storytelling.
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <Link href="/demo">
            <Button variant="glow" size="lg" className="flex items-center gap-2">
              <Play className="h-4 w-4 fill-slate-950" />
              Launch 3D Solar Orb Demo
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline" size="lg">
              Create Client Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
