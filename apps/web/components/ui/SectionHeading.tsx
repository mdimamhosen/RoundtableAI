import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  titleGradient?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  badge,
  title,
  titleGradient,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={twMerge(clsx("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClass, className))} {...props}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{" "}
        {titleGradient && (
          <span className="text-gradient-brand">{titleGradient}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
