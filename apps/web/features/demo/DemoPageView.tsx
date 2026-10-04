"use client";

import dynamic from "next/dynamic";

const DemoShell = dynamic(
  () => import("./DemoShell").then((m) => m.DemoShell),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[700px] flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin shadow-glow" />
          <span className="text-xs font-mono text-slate-300">Initializing Solar Studio Neural Simulator...</span>
        </div>
      </div>
    ),
  }
);

export function DemoPageView() {
  return (
    <div className="w-full">
      <DemoShell />
    </div>
  );
}
