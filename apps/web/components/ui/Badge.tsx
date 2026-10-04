import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "amber" | "gold" | "emerald" | "neutral" | "cyan";
}

export function Badge({ className, variant = "primary", children, ...props }: BadgeProps) {
  const variantStyles = {
    primary: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    amber: "bg-amber-500/15 text-amber-300 border-amber-400/40",
    gold: "bg-yellow-500/15 text-yellow-300 border-yellow-400/40",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    neutral: "bg-white/5 text-slate-300 border-white/10",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  }[variant] || "bg-amber-500/10 text-amber-400 border-amber-500/30";

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide select-none",
          variantStyles,
          className,
        ),
      )}
      {...props}
    >
      {children}
    </span>
  );
}
