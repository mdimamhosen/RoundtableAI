import { Card } from "@/components/ui/Card";
import { Star } from "lucide-react";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <Card hover className="p-6 bg-surface-100/60 border-white/5 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-1 text-amber-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400" />
          ))}
        </div>
        <p className="text-sm text-slate-300 italic leading-relaxed mb-6">"{quote}"</p>
      </div>
      <div className="pt-4 border-t border-white/5">
        <h5 className="text-sm font-bold text-white">{author}</h5>
        <p className="text-xs text-slate-400">{role}, <span className="text-slate-300 font-medium">{company}</span></p>
      </div>
    </Card>
  );
}
