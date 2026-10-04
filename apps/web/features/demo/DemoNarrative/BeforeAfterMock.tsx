"use client";

import { useState, useRef, MouseEvent } from "react";
import { 
  Sliders, 
  Sparkles, 
  Eye, 
  Columns, 
  ZoomIn, 
  Layers, 
  CheckCircle2,
  Brain,
  FileText
} from "lucide-react";

interface BeforeAfterMockProps {
  stepId: number;
}

export function BeforeAfterMock({ stepId }: BeforeAfterMockProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [viewMode, setViewMode] = useState<"slider" | "split" | "loupe">("slider");
  const [loupePos, setLoupePos] = useState<{ x: number; y: number; show: boolean }>({
    x: 50,
    y: 50,
    show: false,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const presets = {
    1: {
      category: "SYSTEM ARCHITECTURE & SCALING",
      beforeTag: "Raw Candidate Audio Transcript",
      beforeTitle: "Unstructured 45-min verbal response with pauses",
      afterTag: "Decomposed Rubric Score (94/100)",
      afterTitle: "Identified Distributed Sharding, Redis Cache & Raft Consensus",
      gradientBefore: "from-stone-900 via-neutral-900 to-zinc-950",
      gradientAfter: "from-amber-950/80 via-stone-900 to-zinc-950",
      pillText: "Competency: Distributed Systems",
      specMetrics: [
        { label: "Technical Depth", before: "Verbal Stream", after: "Senior Staff (L6)" },
        { label: "Trade-off Clarity", before: "Unstructured", after: "Cap Theorem Validated" },
        { label: "Scoring Confidence", before: "Subjective", after: "99.2% Calibrated" },
      ],
    },
    2: {
      category: "ALGORITHMIC COMPLEXITY & CODE",
      beforeTag: "Live Code Stream",
      beforeTitle: "Initial brute-force O(N²) quadratic nested loop",
      afterTag: "Optimized Dynamic Programming O(N)",
      afterTitle: "Identified Memoization Cache & Boundary Constraints",
      gradientBefore: "from-neutral-900 via-stone-900 to-zinc-950",
      gradientAfter: "from-yellow-950/80 via-stone-900 to-zinc-950",
      pillText: "Competency: Code & Optimization",
      specMetrics: [
        { label: "Time Complexity", before: "O(N²)", after: "O(N) Optimal" },
        { label: "Edge Case Handling", before: "3 missed", after: "All 12 Passed" },
        { label: "Code Readability", before: "Raw Draft", after: "Production Grade" },
      ],
    },
    3: {
      category: "BEHAVIORAL LEADERSHIP & OWNERSHIP",
      beforeTag: "STAR Anecdotal Story",
      beforeTitle: "Candidate narrates past cross-team conflict",
      afterTag: "Synthesized Leadership Signals",
      afterTitle: "High Empathy, Root-Cause Ownership & Blameless Post-Mortem",
      gradientBefore: "from-neutral-900 to-stone-950",
      gradientAfter: "from-emerald-950/70 via-stone-900 to-slate-950",
      pillText: "Competency: Executive Presence",
      specMetrics: [
        { label: "Ownership Signal", before: "Passive narrative", after: "Strong Proactive (96%)" },
        { label: "Conflict Resolution", before: "Vague outcome", after: "Constructive Alignment" },
        { label: "Culture Add", before: "Unscored", after: "Top 5th Percentile" },
      ],
    },
    4: {
      category: "HIRING PANEL EXECUTIVE DOSSIER",
      beforeTag: "Fragmented Recruiter Notes",
      beforeTitle: "Scattered bullet points across hiring manager emails",
      afterTag: "Executive Hiring Dossier",
      afterTitle: "Synthesized Scorecard with Video Highlights & Hiring Recommendation",
      gradientBefore: "from-zinc-900 to-stone-950",
      gradientAfter: "from-orange-950/80 via-stone-900 to-zinc-950",
      pillText: "Outcome: Strong Hire (Level 6)",
      specMetrics: [
        { label: "Time-to-Debrief", before: "4 Days Delay", after: "Instant (12 sec)" },
        { label: "Panel Alignment", before: "60% agreement", after: "98% Consensual" },
        { label: "Candidate Offer", before: "Slow Cycle", after: "Fast-Track Offer" },
      ],
    },
  }[stepId] || {
    category: "INTERVIEW RUBRIC ENGINE",
    beforeTag: "Raw Candidate Input",
    beforeTitle: "Unstructured Audio / Code",
    afterTag: "Evaluated Rubric",
    afterTitle: "Synthesized Multi-Modal Assessment",
    gradientBefore: "from-stone-900 to-neutral-950",
    gradientAfter: "from-amber-950 to-stone-900",
    pillText: "Roundtable AI Engine",
    specMetrics: [
      { label: "Evaluation", before: "Subjective", after: "Calibrated Standard" },
    ],
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLoupePos({ x, y, show: true });
  };

  const handleMouseLeave = () => {
    setLoupePos((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="rounded-3xl p-5 bg-surface-100/90 border border-white/10 backdrop-blur-2xl shadow-glass flex flex-col gap-3">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-amber-500/20 text-amber-400">
            <Brain className="h-3.5 w-3.5" />
          </span>
          <span className="text-xs font-mono font-semibold text-slate-200">
            {presets.category}
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-surface-200/80 p-1 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => setViewMode("slider")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
              viewMode === "slider"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sliders className="h-3 w-3" />
            <span>Split</span>
          </button>
          <button
            onClick={() => setViewMode("split")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
              viewMode === "split"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Columns className="h-3 w-3" />
            <span>Side-by-Side</span>
          </button>
          <button
            onClick={() => setViewMode("loupe")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
              viewMode === "loupe"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ZoomIn className="h-3 w-3" />
            <span>Signal Loupe</span>
          </button>
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-surface-200 select-none border border-white/5"
      >
        {/* VIEW MODE 1: Split Slider */}
        {viewMode === "slider" && (
          <>
            {/* After layer (AI Structured Rubric) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${presets.gradientAfter} flex flex-col justify-between p-4`}>
              <div className="flex justify-end">
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {presets.afterTag}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-amber-400 font-semibold">Evaluated Competency Signal:</span>
                <p className="text-xs sm:text-sm font-bold text-white">{presets.afterTitle}</p>
              </div>
            </div>

            {/* Before layer (Raw Candidate Verbal Input) */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${presets.gradientBefore} border-r-2 border-white/90 overflow-hidden flex flex-col justify-between p-4 shadow-2xl`}
              style={{ width: `${sliderPos}%` }}
            >
              <div className="flex justify-start">
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-white/10">
                  {presets.beforeTag}
                </span>
              </div>
              <div className="space-y-0.5 whitespace-nowrap">
                <span className="text-[11px] font-mono text-slate-400 font-semibold">Raw Stream:</span>
                <p className="text-xs sm:text-sm font-bold text-slate-300">{presets.beforeTitle}</p>
              </div>
            </div>

            {/* Slider thumb */}
            <div
              className="absolute top-0 bottom-0 -ml-3.5 z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="h-7 w-7 rounded-full bg-white text-slate-900 shadow-glow flex items-center justify-center pointer-events-auto cursor-ew-resize border-2 border-amber-500">
                <Sliders className="h-3.5 w-3.5 text-amber-600" />
              </div>
            </div>

            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30"
              aria-label="Before/After candidate rubric slider"
            />
          </>
        )}

        {/* VIEW MODE 2: Side-by-Side Dual Pane */}
        {viewMode === "split" && (
          <div className="grid grid-cols-2 h-full gap-1 p-1 bg-black/40">
            <div className={`h-full rounded-xl bg-gradient-to-br ${presets.gradientBefore} p-3 flex flex-col justify-between border border-white/5`}>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-white/10 w-fit">
                {presets.beforeTag}
              </span>
              <p className="text-xs font-semibold text-slate-300">{presets.beforeTitle}</p>
            </div>
            <div className={`h-full rounded-xl bg-gradient-to-br ${presets.gradientAfter} p-3 flex flex-col justify-between border border-amber-500/20`}>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 w-fit">
                {presets.afterTag}
              </span>
              <p className="text-xs font-semibold text-white">{presets.afterTitle}</p>
            </div>
          </div>
        )}

        {/* VIEW MODE 3: Signal Loupe Inspection */}
        {viewMode === "loupe" && (
          <div className={`relative h-full w-full bg-gradient-to-br ${presets.gradientAfter} p-4 flex flex-col justify-between cursor-crosshair`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Cognitive Reasoning Signal Loupe
              </span>
              <span className="text-[11px] font-mono text-slate-400">Hover across frame to inspect rubric telemetry</span>
            </div>

            {loupePos.show && (
              <div
                className="absolute w-28 h-28 rounded-full border-2 border-amber-400 shadow-glow pointer-events-none overflow-hidden bg-surface-100 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ left: `${loupePos.x}%`, top: `${loupePos.y}%` }}
              >
                <div className="text-center p-2">
                  <span className="text-[9px] font-mono text-amber-400 font-bold block">RUBRIC CONFIDENCE</span>
                  <span className="text-[10px] text-white font-semibold">99.4% Match</span>
                  <div className="w-8 h-0.5 bg-amber-400 mx-auto mt-1" />
                </div>
              </div>
            )}

            <div className="space-y-0.5">
              <span className="text-[11px] font-mono text-amber-400 font-semibold">Evaluated Competency:</span>
              <p className="text-xs sm:text-sm font-bold text-white">{presets.afterTitle}</p>
            </div>
          </div>
        )}
      </div>

      {/* Live Spec Metrics Comparison Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
        {presets.specMetrics.map((metric, i) => (
          <div key={i} className="p-2.5 rounded-xl bg-surface-200/50 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">{metric.label}</span>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 text-[11px]">{metric.before}</span>
              <span className="text-amber-400 font-bold">→ {metric.after}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
