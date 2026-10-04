export function MetricHighlights() {
  const metrics = [
    { value: "4.2M+", label: "Studio Assets Processed", change: "99.8% Client Acceptance" },
    { value: "30s", label: "Median Neural Turnaround", change: "vs 48 hrs agency SLA" },
    { value: "100%", label: "RAW Fidelity Retained", change: "16-bit ProPhoto / Adobe RGB" },
    { value: "400+", label: "Vetted Senior Retouchers", change: "On-demand human escalation" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="p-5 rounded-2xl bg-surface-100/50 border border-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-all text-center"
        >
          <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">{m.value}</div>
          <div className="text-xs font-semibold text-slate-300 mt-1">{m.label}</div>
          <div className="text-[11px] text-amber-400 mt-1 font-mono">{m.change}</div>
        </div>
      ))}
    </div>
  );
}
