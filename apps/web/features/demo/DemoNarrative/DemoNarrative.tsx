"use client";

import Link from "next/link";
import { CaptionStack, DemoStep } from "./CaptionStack";
import { BeforeAfterMock } from "./BeforeAfterMock";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface DemoNarrativeProps {
  currentStep: DemoStep;
  isSpeaking: boolean;
  speechEnergy: number;
}

export function DemoNarrative({ currentStep, isSpeaking, speechEnergy }: DemoNarrativeProps) {
  return (
    <div className="flex flex-col space-y-6">
      <CaptionStack
        currentStep={currentStep}
        isSpeaking={isSpeaking}
        speechEnergy={speechEnergy}
      />

      <BeforeAfterMock stepId={currentStep.id} />

      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <Link href="/sign-up" className="w-full sm:w-auto flex-1">
          <Button variant="glow" size="lg" className="w-full">
            Start Free Trial (50 Credits)
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </Link>
        <Link href="/pricing" className="w-full sm:w-auto">
          <Button variant="outline" size="lg" className="w-full">
            View Credit Plans
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
        <span className="flex items-center gap-1 text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5" /> Platform Stage: Phase 0 Public Beta
        </span>
        <span>MinIO & NestJS Active</span>
      </div>
    </div>
  );
}
