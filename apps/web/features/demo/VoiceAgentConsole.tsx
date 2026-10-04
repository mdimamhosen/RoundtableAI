"use client";

import { useState } from "react";
import { Mic, Send, Sparkles, Volume2, Bot, Zap, Brain, ShieldCheck } from "lucide-react";
import { voiceEngine } from "@/lib/audio/voiceEngine";

interface VoiceAgentConsoleProps {
  onAiSpeakingStart: () => void;
  onAiSpeakingEnd: () => void;
}

const PRESET_INTERVIEW_QUERIES = [
  {
    label: "Candidate Screening Speed",
    question: "How fast can Roundtable AI conduct 500 initial technical screenings?",
    answer:
      "Roundtable AI deploys parallel conversational voice instances to complete 500 comprehensive technical and behavioral screenings concurrently. Candidates receive their scheduled sessions immediately, and recruiting teams receive calibrated rubric dossiers in under two hours.",
  },
  {
    label: "Bias Mitigation & EEOC",
    question: "How does the AI ensure objective, bias-free candidate evaluations?",
    answer:
      "Our models score candidates strictly against standardized competency rubrics, evaluating code correctness, structural clarity, and problem-solving depth. The system eliminates demographic heuristics, voice tone bias, and pedigree favoritism to ensure 100% EEOC-compliant meritocratic assessments.",
  },
  {
    label: "Human Hiring Panel Hand-off",
    question: "How does the AI hand off results to our human engineering managers?",
    answer:
      "Following each interview, Roundtable generates an executive candidate dossier with synthesized competencies, timestamped audio highlights, code diff replays, and recommended follow-up questions for the on-site panel debrief.",
  },
  {
    label: "Anti-Cheat & Code Integrity",
    question: "How do you detect AI-generated answers or second-screen cheating during interviews?",
    answer:
      "We utilize real-time voice latency cadence, dynamic question branching that demands spontaneous architectural defense, and synchronized keystroke telemetry to verify authentic problem-solving without invasive surveillance.",
  },
];

export function VoiceAgentConsole({
  onAiSpeakingStart,
  onAiSpeakingEnd,
}: VoiceAgentConsoleProps) {
  const [query, setQuery] = useState("");
  const [activeAnswer, setActiveAnswer] = useState<string | null>(null);
  const [isSpeakingAnswer, setIsSpeakingAnswer] = useState(false);

  const handleAsk = (text: string, customAnswer?: string) => {
    if (!text.trim()) return;

    let answerText = customAnswer;
    if (!answerText) {
      const found = PRESET_INTERVIEW_QUERIES.find((q) =>
        text.toLowerCase().includes(q.label.toLowerCase()) ||
        text.toLowerCase().includes(q.question.toLowerCase())
      );
      if (found) {
        answerText = found.answer;
      } else {
        answerText = `Understood. In assessing "${text}", Roundtable AI applies multi-dimensional evaluation rubrics to capture deep technical reasoning and leadership maturity for your hiring panel.`;
      }
    }

    setActiveAnswer(answerText);
    setIsSpeakingAnswer(true);
    onAiSpeakingStart();
    voiceEngine.playActivationTone();

    setTimeout(() => {
      voiceEngine.speak(answerText!, {
        rate: 1.0,
        pitch: 1.0,
        onStart: () => {
          setIsSpeakingAnswer(true);
          onAiSpeakingStart();
        },
        onEnd: () => {
          setIsSpeakingAnswer(false);
          onAiSpeakingEnd();
        },
        onError: () => {
          setIsSpeakingAnswer(false);
          onAiSpeakingEnd();
        },
      });
    }, 150);
  };

  const handleStop = () => {
    voiceEngine.stop();
    setIsSpeakingAnswer(false);
    onAiSpeakingEnd();
  };

  return (
    <div className="rounded-3xl p-5 sm:p-6 bg-surface-100/90 border border-white/10 backdrop-blur-2xl shadow-glass flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
              Live AI Interviewer Console
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </h4>
            <span className="text-[10px] font-mono text-slate-400">
              Ask questions to hear the AI Interviewer speak live answers
            </span>
          </div>
        </div>

        {isSpeakingAnswer && (
          <button
            onClick={handleStop}
            className="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 text-[11px] font-mono hover:bg-red-500/30 transition-colors"
          >
            Stop Audio
          </button>
        )}
      </div>

      {/* Suggested Inquiries */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
          Suggested Hiring Questions:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PRESET_INTERVIEW_QUERIES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(item.question, item.answer)}
              className="text-left p-3 rounded-2xl bg-surface-200/60 hover:bg-surface-200 border border-white/5 hover:border-amber-500/30 transition-all group flex flex-col gap-1"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-white group-hover:text-amber-300">
                <span>{item.label}</span>
                <Volume2 className="h-3.5 w-3.5 text-amber-400 opacity-60 group-hover:opacity-100" />
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                {item.question}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Spoken Response Card */}
      {activeAnswer && (
        <div
          className={`p-4 rounded-2xl border transition-all ${
            isSpeakingAnswer
              ? "bg-amber-500/10 border-amber-500/40 shadow-glow"
              : "bg-surface-200/50 border-white/5"
          }`}
        >
          <div className="flex items-center gap-2 pb-2 text-xs font-mono text-amber-400 font-semibold">
            <Volume2 className={`h-3.5 w-3.5 ${isSpeakingAnswer ? "animate-pulse" : ""}`} />
            <span>AI Interviewer Spoken Answer</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
            "{activeAnswer}"
          </p>
        </div>
      )}

      {/* Custom Query Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk(query);
          setQuery("");
        }}
        className="flex items-center gap-2 pt-1"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask the AI interviewer anything (e.g. 'How do you evaluate Staff engineer leadership?')..."
            className="w-full pl-4 pr-10 py-2.5 rounded-2xl bg-surface-200/90 text-xs text-white placeholder-slate-400 border border-white/10 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 font-sans"
          />
          <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-amber-400 pointer-events-none" />
        </div>
        <button
          type="submit"
          disabled={!query.trim()}
          className="px-4 py-2.5 rounded-2xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-amber-400 disabled:opacity-40 transition-all shadow-glow shrink-0"
        >
          <span>Ask</span>
          <Send className="h-3 w-3" />
        </button>
      </form>
    </div>
  );
}
