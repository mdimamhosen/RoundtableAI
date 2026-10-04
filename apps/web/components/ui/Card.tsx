import { HTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          clsx(
            "rounded-2xl p-6 sm:p-8 bg-surface-100/70 border border-white/10 backdrop-blur-md relative overflow-hidden",
            hover && "transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10",
            glow && "shadow-glow border-brand-500/30",
            className,
          ),
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
