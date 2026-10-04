"use client";

import { 
  Radio, 
  Mic, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  RefreshCw, 
  CheckCircle2, 
  User, 
  Bot, 
  Activity,
  Play,
  Pause,
  SkipForward,
  SkipBack
} from "lucide-react";

export interface InterviewSegment {
  id: number;
  chapter: string;
  topic: string;
  interviewerQuestion: string;
  orbSpokenAnswer: string;
  technicalBadge: string;
  telemetry: string;
}

interface LiveInterviewCardProps {
  segment: InterviewSegment;
  segmentIndex: number;
  totalSegments: number;
  isSpeaking: boolean;
  speechEnergy: number;
  isVoiceActive: boolean;
  isPlaying: boolean;
  onNext: () => void;
  onPrev: () => void;
  onTogglePlay: () => void;
  onToggleVoice: () => void;
  onReplayVoice: () => void;
  onSelectSegment: (index: number) => void;
}

export function LiveInterviewCard({
  segment,
  segmentIndex,
  totalSegments,
  isSpeaking,
  speechEnergy,
  isVoiceActive,
  isPlaying,
  onNext,
  onPrev,
  onTogglePlay,
  onToggleVoice,
  onReplayVoice,
  onSelectSegment,
}: LiveInterviewCardProps) {
  return (
    <div className="rounded-3xl p-5 sm:p-7 bg-surface-100/95 border border-white/10 backdrop-blur-2xl shadow-glass flex flex-col gap-5 relative overflow-hidden">
      {/* Background ambient solar glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Broadcast Live Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 text-[11px] font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            LIVE INTERVIEW
          </span>
          <span className="text-xs font-mono text-slate-300 hidden sm:inline">
            ROUNDTABLE AI: AUTONOMOUS CANDIDATE SCREENING
          </span>
        </div>

        {/* Live Audio Equalizer & Mute toggle */}
        <div className="flex items-center gap-2">
          {/* Equalizer bars */}
          <div className="flex items-end gap-1 h-5 px-2.5 py-1 rounded-xl bg-surface-200/90 border border-white/5">
            {[0.3, 0.8, 0.5, 1.0, 0.7, 0.9, 0.4].map((barHeight, i) => (
              <div
                key={i}
                className={`w-1 rounded-full bg-gradient-to-t from-amber-500 to-yellow-300 transition-all duration-75 ${
                  isSpeaking && isVoiceActive ? "opacity-100" : "opacity-25"
                }`}
                style={{
                  height:
                    isSpeaking && isVoiceActive
                      ? `${Math.max(4, barHeight * Math.max(0.35, speechEnergy) * 18)}px`
                      : "4px",
                }}
              />
            ))}
          </div>

          <button
            onClick={onToggleVoice}
            className={`p-2 rounded-xl transition-all ${
              isVoiceActive
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-glow"
                : "bg-surface-200 text-slate-500 border border-white/5"
            }`}
            title={isVoiceActive ? "Mute Broadcast Audio" : "Unmute Broadcast Audio"}
          >
            {isVoiceActive ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>

          <button
            onClick={onReplayVoice}
            className="p-2 rounded-xl bg-surface-200 text-slate-300 hover:text-amber-400 hover:bg-surface-300 border border-white/5 transition-colors"
            title="Re-play AI Spoken Answer"
          >
            <RefreshCw className={`h-4 w-4 ${isSpeaking ? "animate-spin text-amber-400" : ""}`} />
          </button>
        </div>
      </div>

      {/* Interview Question 1-5 Chapters Pill Row */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {Array.from({ length: totalSegments }).map((_, idx) => {
          const isActive = idx === segmentIndex;
          return (
            <button
              key={idx}
              onClick={() => onSelectSegment(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? "bg-amber-500 text-slate-950 font-bold shadow-glow border border-amber-300/50"
                  : "bg-surface-200/80 text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              <span>Q{idx + 1}</span>
              <span className="hidden md:inline font-sans truncate max-w-[120px]">
                {idx === 0 && "RAW Ingest"}
                {idx === 1 && "Skin Texture"}
                {idx === 2 && "28-Point QA"}
                {idx === 3 && "Master Desk"}
                {idx === 4 && "Zero-Retention"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Host Question Speech Bubble */}
      <div className="p-4 rounded-2xl bg-surface-200/60 border border-white/10 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
            <Mic className="h-3.5 w-3.5 text-amber-400" />
            Studio Host • Question {segmentIndex + 1} of {totalSegments}
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-300 text-[10px] text-amber-300">
            {segment.chapter}
          </span>
        </div>
        <p className="text-sm sm:text-base font-semibold text-white leading-snug">
          "{segment.interviewerQuestion}"
        </p>
      </div>

      {/* Solar AI Orb Live Spoken Response Box */}
      <div
        className={`p-5 rounded-2xl border transition-all duration-300 relative space-y-3 ${
          isSpeaking && isVoiceActive
            ? "bg-gradient-to-br from-surface-200 via-amber-950/20 to-surface-200 border-amber-500/50 shadow-glow"
            : "bg-surface-200/40 border-white/10"
        }`}
      >
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-amber-500/20 text-amber-400">
              <Bot className="h-3.5 w-3.5" />
            </span>
            <span className="font-bold text-amber-400">Roundtable Solar AI Interviewer (Guest)</span>
            {isSpeaking && isVoiceActive && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            {segment.technicalBadge}
          </span>
        </div>

        {/* Dialogue speech text */}
        <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-sans italic">
          "{segment.orbSpokenAnswer}"
        </p>

        {/* Live Audio Status Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-amber-400">
            <Activity className="h-3.5 w-3.5 animate-pulse" />
            <span>
              {isSpeaking && isVoiceActive
                ? "Live Vocal Cadence Active • Synchronized 3D Orb"
                : isPlaying
                ? "Auto-Advancing to Next Interview Question..."
                : "Acoustic Synthesizer Standing By"}
            </span>
          </div>
          <span className="text-slate-400">{segment.telemetry}</span>
        </div>
      </div>

      {/* Interview Playback Action Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 border-t border-white/5">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onPrev}
            disabled={segmentIndex === 0}
            className="p-2.5 rounded-xl bg-surface-200 text-slate-300 hover:text-white hover:bg-surface-300 disabled:opacity-30 border border-white/5 transition-colors"
            title="Previous Question"
          >
            <SkipBack className="h-4 w-4" />
          </button>

          <button
            onClick={onTogglePlay}
            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-glow hover:bg-amber-400 transition-all"
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 fill-slate-950" />
                <span>Pause Interview</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 fill-slate-950" />
                <span>Resume Live Interview</span>
              </>
            )}
          </button>

          <button
            onClick={onNext}
            disabled={segmentIndex === totalSegments - 1}
            className="p-2.5 rounded-xl bg-surface-200 text-slate-300 hover:text-white hover:bg-surface-300 disabled:opacity-30 border border-white/5 transition-colors"
            title="Next Question"
          >
            <SkipForward className="h-4 w-4" />
          </button>
        </div>

        <div className="text-xs font-mono text-slate-400 text-center sm:text-right">
          <span>Auto-advances through all 5 interview segments</span>
        </div>
      </div>
    </div>
  );
}
