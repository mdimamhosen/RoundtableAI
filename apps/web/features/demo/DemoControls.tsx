"use client";

import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Mic, 
  Radio, 
  Sliders, 
  Sparkles,
  RefreshCw
} from "lucide-react";
import { DemoStep } from "./DemoNarrative/CaptionStack";

interface DemoControlsProps {
  steps: DemoStep[];
  currentStepIndex: number;
  isPlaying: boolean;
  isVoiceActive: boolean;
  playbackRate: number;
  isSpeaking: boolean;
  onSelectStep: (index: number) => void;
  onTogglePlay: () => void;
  onToggleVoice: () => void;
  onChangePlaybackRate: (rate: number) => void;
  onReplayVoice: () => void;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  onOpenVoicePrompt?: () => void;
}

export function DemoControls({
  steps,
  currentStepIndex,
  isPlaying,
  isVoiceActive,
  playbackRate,
  isSpeaking,
  onSelectStep,
  onTogglePlay,
  onToggleVoice,
  onChangePlaybackRate,
  onReplayVoice,
  onNext,
  onPrev,
  onReset,
  onOpenVoicePrompt,
}: DemoControlsProps) {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-3xl bg-surface-100/90 border border-white/10 backdrop-blur-2xl shadow-glass">
      {/* Top: Step tabs & Quick Jump */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
        <div className="flex items-center gap-1.5 shrink-0">
          {steps.map((step, idx) => {
            const isActive = idx === currentStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => onSelectStep(idx)}
                className={`group relative px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? "bg-amber-500 text-slate-950 font-bold shadow-glow border border-amber-300/50"
                    : "bg-surface-200/80 text-slate-400 hover:text-white hover:bg-surface-300 border border-white/5"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-slate-950" : "bg-amber-400/60"
                  }`}
                />
                <span>0{step.id}</span>
                <span className="hidden sm:inline font-sans">{step.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Ask AI Voice Button */}
        {onOpenVoicePrompt && (
          <button
            onClick={onOpenVoicePrompt}
            className="shrink-0 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 hover:bg-amber-500/30 hover:border-amber-400 transition-all shadow-sm"
          >
            <Mic className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span className="hidden sm:inline">Ask AI Agent</span>
            <span className="sm:hidden">Ask AI</span>
          </button>
        )}
      </div>

      {/* Bottom: Playback & Voice Audio Console */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-white/5">
        {/* Step Info Pill */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300 w-full sm:w-auto">
          <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
            STAGE {currentStepIndex + 1}/{steps.length}
          </span>
          <span className="truncate text-slate-400">
            {steps[currentStepIndex].title.split(": ")[1] || steps[currentStepIndex].title}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
          {/* Previous */}
          <button
            onClick={onPrev}
            disabled={currentStepIndex === 0}
            className="p-2 rounded-xl bg-surface-200/80 text-slate-300 hover:text-white hover:bg-surface-300 disabled:opacity-30 border border-white/5 transition-colors"
            title="Previous Step"
          >
            <SkipBack className="h-4 w-4" />
          </button>

          {/* Auto-Play Toggle */}
          <button
            onClick={onTogglePlay}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-glow hover:brightness-110 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5 fill-slate-950" />
                <span>Auto-Tour Active</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-slate-950" />
                <span>Start Auto-Tour</span>
              </>
            )}
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            disabled={currentStepIndex === steps.length - 1}
            className="p-2 rounded-xl bg-surface-200/80 text-slate-300 hover:text-white hover:bg-surface-300 disabled:opacity-30 border border-white/5 transition-colors"
            title="Next Step"
          >
            <SkipForward className="h-4 w-4" />
          </button>

          <div className="w-[1px] h-6 bg-white/10 mx-1 hidden sm:block" />

          {/* Replay voice button */}
          <button
            onClick={onReplayVoice}
            className="p-2 rounded-xl bg-surface-200/80 text-slate-300 hover:text-amber-400 hover:bg-surface-300 border border-white/5 transition-colors"
            title="Replay Voice Narrative"
          >
            <RefreshCw className={`h-4 w-4 ${isSpeaking ? "animate-spin text-amber-400" : ""}`} />
          </button>

          {/* Voice Mute / Speak Toggle */}
          <button
            onClick={onToggleVoice}
            className={`px-3 py-2 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all ${
              isVoiceActive
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-glow"
                : "bg-surface-200 text-slate-500 border border-white/5"
            }`}
            title={isVoiceActive ? "Mute Voice Synthesizer" : "Unmute Voice Synthesizer"}
          >
            {isVoiceActive ? (
              <>
                <Volume2 className="h-4 w-4 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline">Voice ON</span>
              </>
            ) : (
              <>
                <VolumeX className="h-4 w-4 text-slate-500" />
                <span className="hidden sm:inline">Voice Muted</span>
              </>
            )}
          </button>

          {/* Playback speed selector */}
          <select
            value={playbackRate}
            onChange={(e) => onChangePlaybackRate(Number(e.target.value))}
            className="px-2 py-1.5 rounded-xl bg-surface-200/80 text-slate-300 text-xs font-mono border border-white/10 hover:border-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
            title="Voice Speed"
          >
            <option value={0.9} className="bg-surface-100 text-white">0.9x</option>
            <option value={1.05} className="bg-surface-100 text-white">1.0x</option>
            <option value={1.2} className="bg-surface-100 text-white">1.2x</option>
          </select>

          {/* Reset */}
          <button
            onClick={onReset}
            className="p-2 rounded-xl bg-surface-200/80 text-slate-400 hover:text-white hover:bg-surface-300 border border-white/5 transition-colors"
            title="Restart Tour from Step 1"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
