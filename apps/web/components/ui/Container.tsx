import { HTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", children, ...props }, ref) => {
    const sizeMap = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[1400px]",
      full: "max-w-full",
    }[size];

    return (
      <div
        ref={ref}
        className={twMerge(clsx("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeMap, className))}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
