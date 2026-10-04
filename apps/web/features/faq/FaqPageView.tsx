"use client";

import { useState, useMemo } from "react";
import { FaqHeroSection } from "./sections/FaqHeroSection/FaqHeroSection";
import { FaqBentoTopicsSection } from "./sections/FaqBentoTopicsSection/FaqBentoTopicsSection";
import { FaqAccordionSection, FaqItem } from "./sections/FaqAccordionSection/FaqAccordionSection";
import { FaqContactSection } from "./sections/FaqContactSection/FaqContactSection";

const ALL_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "AI Pipeline",
    question: "How does the AI preserve skin texture and avoid an artificial plastic look?",
    answer:
      "ProofDesk uses patented multi-band frequency separation diffusion. It decomposes images into spatial frequency layers: low frequencies handle gradual color tone gradients, while high frequencies contain physical pores, fine hairs, and skin contours. Retouching happens strictly on the tone layers without destroying the high-frequency physical pore matrix.",
  },
  {
    id: "faq-2",
    category: "AI Pipeline",
    question: "What is the typical turnaround time for an automated batch?",
    answer:
      "Under normal load, each high-resolution image is processed and returned in 20 to 30 seconds. A full lookbook batch of 150 shots can be completed in parallel across our GPU nodes in under 4 minutes.",
  },
  {
    id: "faq-3",
    category: "RAW Files & Formats",
    question: "Which camera RAW formats and resolutions can you process?",
    answer:
      "We natively support Canon CR2/CR3, Nikon NEF, Sony ARW, Hasselblad 3FR/FFF, PhaseOne IIQ, DNG, TIFF, and PSD up to 100 megapixels. All processing maintains 16-bit linear depth in wide-gamut ProPhoto RGB or Adobe RGB color spaces.",
  },
  {
    id: "faq-4",
    category: "RAW Files & Formats",
    question: "Do you export layered PSD files with separate masks?",
    answer:
      "Yes. Our export options include flat sRGB JPG/WebP for e-commerce CMS, lossless 16-bit TIFFs, and layered Photoshop PSDs containing separate alpha channels for the subject silhouette, skin tones, garments, and studio shadow.",
  },
  {
    id: "faq-5",
    category: "Human Desk",
    question: "Who are the retouchers on the Human Editorial Desk?",
    answer:
      "Our human desk retouchers are vetted senior artists specializing in commercial fashion, fine jewelry, and cosmetics. They have at least 5+ years of high-end editorial studio experience and work exclusively on calibrated hardware.",
  },
  {
    id: "faq-6",
    category: "Human Desk",
    question: "How do revisions work if a retouched photo doesn't match our brief?",
    answer:
      "You can place visual pinpoint comment pins directly on the web proofing viewer. Standard and Advanced human retouching tiers include free revision cycles until your art direction requirements are fully met.",
  },
  {
    id: "faq-7",
    category: "Billing & Credits",
    question: "Do credits expire at the end of the month?",
    answer:
      "No. ProofDesk credits never expire. You can stock up during off-peak periods and draw them down as high-volume seasonal shoots launch.",
  },
  {
    id: "faq-8",
    category: "Security & Ingest",
    question: "Do you use our catalog photos to train public AI models?",
    answer:
      "Never. We maintain a strict zero-retention data privacy guarantee for commercial clients. Your images are processed in isolated memory containers, encrypted at rest and in transit, and never utilized for foundation model pretraining.",
  },
];

const CATEGORIES = ["All", "AI Pipeline", "RAW Files & Formats", "Human Desk", "Billing & Credits", "Security & Ingest"];

export function FaqPageView() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return ALL_FAQS.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuery =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full">
      <FaqHeroSection
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <FaqBentoTopicsSection onSelectCategory={setSelectedCategory} />
      <FaqAccordionSection items={filteredItems} />
      <FaqContactSection />
    </div>
  );
}
