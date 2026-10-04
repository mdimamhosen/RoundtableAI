import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export function FeatureCard({ icon, title, description, badge }: FeatureCardProps) {
  return (
    <Card hover className="p-6 bg-surface-100/60 border-white/5 flex flex-col justify-between hover:border-amber-500/40">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            {icon}
          </div>
          {badge && (
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
              {badge}
            </span>
          )}
        </div>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
