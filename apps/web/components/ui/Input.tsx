import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={id} className="block text-xs font-medium uppercase tracking-wider text-slate-300">
            {label}
          </label>
        )}
        <div className="relative rounded-lg">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              {leftIcon}
            </div>
          )}
          <input
            id={id}
            ref={ref}
            className={twMerge(
              clsx(
                "w-full rounded-lg bg-surface-100/80 px-3.5 py-2.5 text-sm text-foreground placeholder-slate-500",
                "border border-white/10 transition-all duration-200",
                "focus:border-brand-500 focus:bg-surface-200/90 focus:outline-none focus:ring-1 focus:ring-brand-500",
                leftIcon && "pl-10",
                error && "border-red-500 focus:border-red-500 focus:ring-red-500",
                className,
              ),
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
        {hint && !error && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
