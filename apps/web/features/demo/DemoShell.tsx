"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { DemoCanvas } from "./DemoCanvas";
import { DemoControls } from "./DemoControls";
import { CaptionStack, DemoStep } from "./DemoNarrative/CaptionStack";
import { BeforeAfterMock } from "./DemoNarrative/BeforeAfterMock";
import { LiveInterviewCard, InterviewSegment } from "./LiveInterviewCard";
import { VoiceAgentConsole } from "./VoiceAgentConsole";
import { voiceEngine } from "@/lib/audio/voiceEngine";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Sliders, 
  Layers, 
  Bot, 
  ShieldCheck,
  Zap,
  Play,
  Radio,
  Workflow
} from "lucide-react";

// Live Interview Segments
const INTERVIEW_SEGMENTS: InterviewSegment[] = [
  {
    id: 1,
    chapter: "CHAPTER 01: REAL-TIME VOCAL SCREENING",
    topic: "Conversational AI Ingest & Audio Latency",
    interviewerQuestion:
      "Welcome to the hiring desk. Can you walk us through Step 1: what happens the instant a candidate enters an autonomous voice interview?",
    orbSpokenAnswer:
      "Great to be here. The instant a candidate joins, my conversational audio engine processes speech in real time with sub-eighteen millisecond acoustic latency. I establish a welcoming, conversational environment, dynamically calibrate to their speaking pace, and present structured technical and behavioral inquiries without human fatigue or bias.",
    technicalBadge: "Sub-18ms Voice Cadence",
    telemetry: "Acoustic Latency: 14ms • Full Duplex Audio Stream",
  },
  {
    id: 2,
    chapter: "CHAPTER 02: DYNAMIC COMPETENCY PROBING",
    topic: "Adaptive Technical Questioning & Reasoning Depth",
    interviewerQuestion:
      "Traditional automated tests only ask static multiple-choice questions. In Step 2, how do you probe a candidate's actual architectural depth?",
    orbSpokenAnswer:
      "Unlike static quizzes, I listen adaptively. When an engineering candidate proposes an architecture, I ask contextual follow-ups: how would they handle partition failure, database sharding, or race conditions under peak concurrency? I evaluate their trade-off calculus, not just memorized syntax.",
    technicalBadge: "Adaptive Contextual Branching",
    telemetry: "Reasoning Tree: 5 Deep • Edge Case Validation",
  },
  {
    id: 3,
    chapter: "CHAPTER 03: 360° MULTI-DIMENSIONAL RUBRICS",
    topic: "Objective Competency Scoring & EEOC Compliance",
    interviewerQuestion:
      "Recruiting teams care deeply about fairness and standards. In Step 3, how do you evaluate candidates objectively?",
    orbSpokenAnswer:
      "Every response is evaluated across standardized competencies: system design maturity, algorithmic correctness, communication clarity, and leadership ownership. Demographic and vocal tone heuristics are completely neutralized, delivering a certified, bias-free rubric score aligned with EEOC standards.",
    technicalBadge: "Calibrated Rubric Engine",
    telemetry: "Scoring Alignment: 99.4% • 0% Demographic Bias",
  },
  {
    id: 4,
    chapter: "CHAPTER 04: HIRING PANEL EXECUTIVE DOSSIER",
    topic: "Instant Recruiter Debrief & Offer Fast-Tracking",
    interviewerQuestion:
      "In Step 4, how do you hand off findings to the human engineering manager and hiring committee?",
    orbSpokenAnswer:
      "Within sixty seconds of session completion, I deliver an executive hiring dossier to your ATS. It includes competency breakdowns, clickable timestamped audio highlights, code diff replays, and targeted follow-up recommendations for your on-site debrief panel.",
    technicalBadge: "Instant ATS Dossier Sync",
    telemetry: "Debrief Synthesis: 45s • Greenhouse & Ashby Ready",
  },
  {
    id: 5,
    chapter: "CHAPTER 05: CANDIDATE DATA PRIVACY",
    topic: "Zero-Retention Security & SOC2 Compliance",
    interviewerQuestion:
      "Candidate conversations and proprietary company questions are confidential. What is your data retention policy?",
    orbSpokenAnswer:
      "We enforce a strict zero-retention guarantee. Candidate audio streams and coding submissions process in ephemeral, isolated memory containers. Your interview transcripts are vaulted with AES-256 encryption and are never used to train public AI foundation models.",
    technicalBadge: "Zero-Retention Privacy Guarantee",
    telemetry: "Data Vault: AES-256 • SOC2 Type II Certified",
  },
];

// 4-Stage Workflow Steps (for the Workflow view)
const WORKFLOW_STEPS: DemoStep[] = [
  {
    id: 1,
    tag: "Screening",
    title: "Step 1: Automated Candidate Screening & Ingest",
    dialogue:
      "Welcome to Roundtable AI. I initiate candidate screening sessions autonomously, synchronizing job requisitions directly with Greenhouse and Lever. Candidates experience an empathetic, zero-friction vocal interface.",
    badge: "ATS Direct Sync",
    telemetry: "Ingest Buffer: Real-Time Webhook • Calendar Synced",
  },
  {
    id: 2,
    tag: "AI Interview",
    title: "Step 2: Adaptive Conversational Voice Interview",
    dialogue:
      "Live interview in session. My neural acoustic model conducts in-depth technical and behavioral conversations. I ask adaptive follow-up inquiries to evaluate problem-solving frameworks and architectural trade-offs.",
    badge: "Neural Vocal Agent",
    telemetry: "Audio Cadence: Sub-18ms • Full Duplex Probing",
  },
  {
    id: 3,
    tag: "Rubric Scoring",
    title: "Step 3: Multi-Dimensional Competency Telemetry",
    dialogue:
      "Assessment complete. Candidate responses are evaluated across twenty-eight technical and behavioral competencies. The assessment is calibrated for zero bias and certified for EEOC compliance.",
    badge: "Standardized Rubric",
    telemetry: "Scoring Confidence: 99.4% • Zero Demographic Bias",
  },
  {
    id: 4,
    tag: "Panel Debrief",
    title: "Step 4: Hiring Panel Dossier & Offer Decision",
    dialogue:
      "Handing off to your hiring team. An executive summary dossier with audio highlights and candidate scorecards is delivered instantly to your interview debrief panel.",
    badge: "Executive Hiring Dossier",
    telemetry: "Panel Turnaround: Instant • ATS Scorecard Exported",
  },
];

export function DemoShell() {
  const [viewMode, setViewMode] = useState<"interview" | "workflow">("interview");
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [workflowIndex, setWorkflowIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Auto-speech on by default
  const [isVoiceActive, setIsVoiceActive] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [speechEnergy, setSpeechEnergy] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeColorTheme, setActiveColorTheme] = useState<"solar" | "gold" | "emerald">("solar");
  const [mobileTab, setMobileTab] = useState<"visualizer" | "interview" | "inspector">("visualizer");

  const speechTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoAdvanceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Play spoken dialogue
  const speakCurrentContent = useCallback(() => {
    if (!isVoiceActive) {
      setIsSpeaking(false);
      setSpeechEnergy(0);
      return;
    }

    const spokenText =
      viewMode === "interview"
        ? INTERVIEW_SEGMENTS[segmentIndex].orbSpokenAnswer
        : WORKFLOW_STEPS[workflowIndex].dialogue;

    voiceEngine.playChime();

    voiceEngine.speak(spokenText, {
      rate: playbackRate,
      pitch: 1.0,
      onStart: () => {
        setIsSpeaking(true);
        setSpeechEnergy(0.85);
        setHasInteracted(true);
      },
      onEnd: () => {
        setIsSpeaking(false);
        setSpeechEnergy(0);

        // In live interview auto-play, pause 2s then advance to next question
        if (isPlaying) {
          if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);
          autoAdvanceTimeoutRef.current = setTimeout(() => {
            if (viewMode === "interview") {
              setSegmentIndex((prev) => (prev + 1) % INTERVIEW_SEGMENTS.length);
            } else {
              setWorkflowIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
            }
          }, 2000);
        }
      },
      onBoundary: () => {
        // Dynamic syllable-by-syllable pulse
        setSpeechEnergy(0.55 + Math.random() * 0.45);
      },
      onError: () => {
        setIsSpeaking(false);
        setSpeechEnergy(0);
      },
    });
  }, [isVoiceActive, playbackRate, isPlaying, viewMode, segmentIndex, workflowIndex]);

  // Trigger speech whenever segment or workflow step changes
  useEffect(() => {
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);

    speechTimeoutRef.current = setTimeout(() => {
      speakCurrentContent();
    }, 280);

    return () => {
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);
    };
  }, [segmentIndex, workflowIndex, viewMode, speakCurrentContent]);

  // Unlock browser audio policy on first user touch/click anywhere
  useEffect(() => {
    const handleFirstGesture = () => {
      setHasInteracted(true);
      if (isVoiceActive && !isSpeaking) {
        speakCurrentContent();
      }
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
    };

    window.addEventListener("click", handleFirstGesture);
    window.addEventListener("touchstart", handleFirstGesture);

    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      voiceEngine.stop();
    };
  }, [isVoiceActive, isSpeaking, speakCurrentContent]);

  const handleToggleVoice = () => {
    const next = !isVoiceActive;
    setIsVoiceActive(next);
    voiceEngine.setMuted(!next);

    if (next) {
      speakCurrentContent();
    } else {
      voiceEngine.stop();
      setIsSpeaking(false);
      setSpeechEnergy(0);
    }
  };

  const handleReplayVoice = () => {
    voiceEngine.stop();
    speakCurrentContent();
  };

  const currentSegment = INTERVIEW_SEGMENTS[segmentIndex];
  const currentWorkflowStep = WORKFLOW_STEPS[workflowIndex];

  return (
    <div className="py-8 lg:py-12 relative overflow-hidden bg-studio-grid">
      <div className="ambient-glow bg-amber-500/20 w-[600px] h-[600px] -top-20 left-1/4 -translate-x-1/2" />
      <div className="ambient-glow bg-orange-600/15 w-[500px] h-[500px] top-1/2 right-0" />

      <Container size="xl" className="relative z-10 space-y-6">
        {/* Top Broadcast Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Radio className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span>Interactive Live Studio Broadcast</span>
            <span className="text-amber-500/50">•</span>
            <span className="text-emerald-400 font-bold">Auto-Speaking Live Interview</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            ProofDesk <span className="text-gradient-brand">Solar AI Orb</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Watch and listen as the Solar Neural Orb speaks aloud in a live studio interview, explaining the science of pore-preserving skin retouching, uncompressed RAW ingestion, and luxury catalog compliance.
          </p>

          {/* Autoplay Unlock / Status Pill */}
          {!hasInteracted ? (
            <button
              onClick={() => {
                setHasInteracted(true);
                speakCurrentContent();
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-amber-500 text-slate-950 font-bold text-xs font-mono shadow-glow hover:bg-amber-400 transition-all animate-bounce"
            >
              <Play className="h-4 w-4 fill-slate-950" />
              <span>Click to Start Live Audio Interview</span>
            </button>
          ) : (
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-2xl bg-surface-100/90 border border-white/10 text-xs font-mono text-slate-300">
              <Volume2 className="h-4 w-4 text-amber-400 shrink-0 animate-pulse" />
              <span>
                {viewMode === "interview"
                  ? `Speaking: Question 0${segmentIndex + 1} (${currentSegment.topic})`
                  : `Speaking: ${currentWorkflowStep.title}`}
              </span>
              <button
                onClick={handleToggleVoice}
                className="text-amber-400 hover:text-amber-300 underline font-bold"
              >
                {isVoiceActive ? "Mute Voice" : "Unmute Voice"}
              </button>
            </div>
          )}

          {/* Mode Switcher: Live Interview vs 4-Stage Workflow */}
          <div className="flex items-center p-1 rounded-2xl bg-surface-100/90 border border-white/10 text-xs font-mono">
            <button
              onClick={() => {
                setViewMode("interview");
                voiceEngine.stop();
              }}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
                viewMode === "interview"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Radio className="h-3.5 w-3.5" />
              <span>Live Studio Interview Mode</span>
            </button>
            <button
              onClick={() => {
                setViewMode("workflow");
                voiceEngine.stop();
              }}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
                viewMode === "workflow"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-glow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Workflow className="h-3.5 w-3.5" />
              <span>4-Stage Pipeline Mode</span>
            </button>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex lg:hidden items-center justify-center p-1 rounded-2xl bg-surface-100/90 border border-white/10 text-xs font-mono">
          <button
            onClick={() => setMobileTab("visualizer")}
            className={`flex-1 py-2 rounded-xl text-center transition-all ${
              mobileTab === "visualizer"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            3D Solar Orb
          </button>
          <button
            onClick={() => setMobileTab("interview")}
            className={`flex-1 py-2 rounded-xl text-center transition-all ${
              mobileTab === "interview"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {viewMode === "interview" ? "Live Interview" : "Step Narration"}
          </button>
          <button
            onClick={() => setMobileTab("inspector")}
            className={`flex-1 py-2 rounded-xl text-center transition-all ${
              mobileTab === "inspector"
                ? "bg-amber-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Photo Inspector
          </button>
        </div>

        {/* Main Split Grid: 3D Orb + Live Interview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3D Canvas */}
          <div
            className={`lg:col-span-6 xl:col-span-7 ${
              mobileTab === "visualizer" ? "block" : "hidden lg:block"
            }`}
          >
            <DemoCanvas
              isSpeaking={isSpeaking}
              speechEnergy={speechEnergy}
              activeColorTheme={activeColorTheme}
              onColorThemeChange={(theme) => setActiveColorTheme(theme)}
            />
          </div>

          {/* Right Column: Live Interview or Workflow Mode */}
          <div
            className={`lg:col-span-6 xl:col-span-5 space-y-6 ${
              mobileTab === "interview"
                ? "block"
                : mobileTab === "inspector"
                ? "block"
                : "hidden lg:block"
            }`}
          >
            {/* VIEW MODE A: Live Interview Card */}
            {viewMode === "interview" && (
              <div className={mobileTab === "inspector" ? "hidden lg:block" : "block"}>
                <LiveInterviewCard
                  segment={currentSegment}
                  segmentIndex={segmentIndex}
                  totalSegments={INTERVIEW_SEGMENTS.length}
                  isSpeaking={isSpeaking}
                  speechEnergy={speechEnergy}
                  isVoiceActive={isVoiceActive}
                  isPlaying={isPlaying}
                  onNext={() => {
                    setSegmentIndex((prev) => Math.min(INTERVIEW_SEGMENTS.length - 1, prev + 1));
                    setIsPlaying(false);
                  }}
                  onPrev={() => {
                    setSegmentIndex((prev) => Math.max(0, prev - 1));
                    setIsPlaying(false);
                  }}
                  onTogglePlay={() => {
                    const next = !isPlaying;
                    setIsPlaying(next);
                    if (next && !isSpeaking) {
                      speakCurrentContent();
                    }
                  }}
                  onToggleVoice={handleToggleVoice}
                  onReplayVoice={handleReplayVoice}
                  onSelectSegment={(idx) => {
                    setSegmentIndex(idx);
                    setIsPlaying(false);
                  }}
                />
              </div>
            )}

            {/* VIEW MODE B: Standard 4-Stage Workflow Controls & Captions */}
            {viewMode === "workflow" && (
              <div className={mobileTab === "inspector" ? "hidden lg:block" : "block space-y-4"}>
                <DemoControls
                  steps={WORKFLOW_STEPS}
                  currentStepIndex={workflowIndex}
                  isPlaying={isPlaying}
                  isVoiceActive={isVoiceActive}
                  playbackRate={playbackRate}
                  isSpeaking={isSpeaking}
                  onSelectStep={(idx) => {
                    setWorkflowIndex(idx);
                    setIsPlaying(false);
                  }}
                  onTogglePlay={() => {
                    const next = !isPlaying;
                    setIsPlaying(next);
                    if (next && !isSpeaking) {
                      speakCurrentContent();
                    }
                  }}
                  onToggleVoice={handleToggleVoice}
                  onChangePlaybackRate={(rate) => setPlaybackRate(rate)}
                  onReplayVoice={handleReplayVoice}
                  onNext={() => {
                    setWorkflowIndex((prev) => Math.min(WORKFLOW_STEPS.length - 1, prev + 1));
                    setIsPlaying(false);
                  }}
                  onPrev={() => {
                    setWorkflowIndex((prev) => Math.max(0, prev - 1));
                    setIsPlaying(false);
                  }}
                  onReset={() => {
                    setWorkflowIndex(0);
                    setIsPlaying(true);
                  }}
                />

                <CaptionStack
                  currentStep={currentWorkflowStep}
                  isSpeaking={isSpeaking}
                  speechEnergy={speechEnergy}
                  isVoiceActive={isVoiceActive}
                  onReplayVoice={handleReplayVoice}
                  onToggleVoice={handleToggleVoice}
                />
              </div>
            )}

            {/* Before / After Photo Loupe Inspector (Responsive) */}
            <div className={mobileTab === "interview" ? "hidden lg:block" : "block"}>
              <BeforeAfterMock stepId={viewMode === "interview" ? Math.min(4, segmentIndex + 1) : currentWorkflowStep.id} />
            </div>

            {/* Trial CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link href="/sign-up" className="w-full sm:w-auto flex-1">
                <Button variant="glow" size="lg" className="w-full">
                  Start Free Trial (50 Credits)
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  View Credit Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Ask AI Voice Console at the bottom */}
        <div className="pt-4">
          <VoiceAgentConsole
            onAiSpeakingStart={() => {
              setIsSpeaking(true);
              setSpeechEnergy(0.85);
            }}
            onAiSpeakingEnd={() => {
              setIsSpeaking(false);
              setSpeechEnergy(0);
            }}
          />
        </div>
      </Container>
    </div>
  );
}
