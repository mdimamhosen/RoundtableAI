"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FaqAccordionSectionProps {
  items: FaqItem[];
}

export function FaqAccordionSection({ items }: FaqAccordionSectionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "faq-1": true });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (items.length === 0) {
    return (
      <div className="py-16 text-center text-slate-400">
        <p className="text-sm">No questions matched your search query. Try broadening your keywords.</p>
      </div>
    );
  }

  return (
    <section className="py-10 bg-background relative">
      <Container size="md">
        <div className="space-y-4">
          {items.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-surface-100/60 overflow-hidden backdrop-blur-sm transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-surface-200 text-slate-400 border border-white/5">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base text-white pt-1">{item.question}</h3>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 mt-2 ${
                      isOpen ? "rotate-180 text-amber-400" : "text-slate-400"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
