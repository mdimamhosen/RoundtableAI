import { forwardRef, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  tone?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2 gap-2",
      lg: "text-base px-6 py-3 gap-2.5 font-semibold",
    }[size];

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:brightness-110 border border-amber-300/40",
      glow:
        "bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-bold shadow-glow hover:shadow-glow-gold hover:brightness-110 border border-amber-200/50",
      secondary:
        "bg-surface-200 text-white hover:bg-surface-300 border border-white/10 hover:border-amber-500/30",
      outline:
        "border border-white/20 text-white hover:bg-white/10 hover:border-amber-400/40 backdrop-blur-sm",
      ghost:
        "text-slate-300 hover:text-white hover:bg-white/5",
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={twMerge(clsx(baseStyles, sizeStyles, variantStyles, className))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
