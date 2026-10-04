"use client";

import { Container } from "@/components/ui/Container";
import { Sparkles, Search } from "lucide-react";

interface FaqHeroSectionProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function FaqHeroSection({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: FaqHeroSectionProps) {
  return (
    <section className="pt-16 pb-10 relative overflow-hidden text-center">
      <div className="ambient-glow bg-amber-500/20 w-[500px] h-[500px] -top-32 left-1/2 -translate-x-1/2" />
      <Container size="xl" className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-sm mb-6">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Knowledge Base & Technical Specs</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Frequently Asked Questions.{" "}
          <span className="text-gradient-brand">Direct Technical Answers.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Detailed explanations on RAW color preservation, frequency separation algorithms, human escalation workflows, and security.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto mt-8 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions (e.g., RAW formats, Delta-E, SLA)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-100/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-amber-500 text-slate-950 font-bold shadow-glow border border-amber-300/40"
                  : "bg-surface-100/60 text-slate-400 hover:text-white hover:bg-surface-200 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
