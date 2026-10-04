"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FaqAccordionPreview() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const items = [
    {
      q: "Does ProofDesk replace our existing in-house studio retouchers?",
      a: "No, it amplifies them. ProofDesk automates the tedious, soul-crushing 90% of work (dust removal, path clipping, background purity, baseline skin cleanup), freeing your artists to focus on complex art direction, grading, and creative lighting.",
    },
    {
      q: "How does the AI preserve natural skin texture without looking airbrushed?",
      a: "Our neural architecture uses patented frequency-separation diffusion that decouples color gradients from spatial high frequencies (pores, fine hairs, natural skin creases). We never blur or paste fake artificial textures.",
    },
    {
      q: "What file formats and color spaces are supported?",
      a: "We natively ingest Canon CR2/CR3, Nikon NEF, Sony ARW, Hasselblad 3FR, PhaseOne IIQ, TIFF, and PSD in 16-bit ProPhoto RGB or Adobe RGB color spaces.",
    },
    {
      q: "What is the turnaround time for human desk escalation?",
      a: "Automated AI jobs finish in under 30 seconds. If you escalate an image to our specialized human retouching desk, standard delivery is guaranteed within 12 to 24 hours.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-surface-100/60 overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-brand-cyan transition-colors"
            >
              <span>{item.q}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-cyan" : "text-slate-400"}`} />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                {item.a}
              </div>
            )}
          </div>
        );
      })}

      <div className="pt-6 text-center">
        <Link href="/faq">
          <Button variant="outline" size="sm">
            Read All Frequently Asked Questions
            <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
