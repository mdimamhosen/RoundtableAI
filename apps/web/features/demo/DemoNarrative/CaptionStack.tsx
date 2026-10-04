"use client";

import { Volume2, VolumeX, Sparkles, RefreshCw, AudioWaveform as WaveformIcon, Activity } from "lucide-react";

export interface DemoStep {
  id: number;
  tag: string;
  title: string;
  dialogue: string;
  badge: string;
  telemetry: string;
}

interface CaptionStackProps {
  currentStep: DemoStep;
  isSpeaking: boolean;
  speechEnergy: number;
  isVoiceActive?: boolean;
  onReplayVoice?: () => void;
  onToggleVoice?: () => void;
}

export function CaptionStack({
  currentStep,
  isSpeaking,
  speechEnergy,
  isVoiceActive = true,
  onReplayVoice,
  onToggleVoice,
}: CaptionStackProps) {
  return (
    <div className="rounded-3xl p-6 bg-surface-100/90 border border-white/10 backdrop-blur-2xl relative overflow-hidden shadow-glass flex flex-col gap-4">
      {/* Ambient background shimmer glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleVoice}
            className={`p-1.5 rounded-lg border transition-all ${
              isVoiceActive
                ? "bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-glow"
                : "bg-surface-200 text-slate-500 border-white/5"
            }`}
            title={isVoiceActive ? "Mute Spoken Voice" : "Enable Spoken Voice"}
          >
            {isVoiceActive ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
          </button>
          <div>
            <div className="flex items-center gap-1.5 font-mono font-semibold text-slate-200">
              <span>ProofDesk Vocal Agent</span>
              {isVoiceActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              )}
            </div>
            <span className="text-[10px] text-slate-400 font-mono block">
              {isVoiceActive
                ? isSpeaking
                  ? "Speaking synthesized audio aloud..."
                  : "Acoustic synthesizer ready"
                : "Acoustic output muted"}
            </span>
          </div>
        </div>

        {/* Dynamic Voice Visualizer Equalizer */}
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-1 h-5 px-2 py-1 rounded-lg bg-surface-200/80 border border-white/5">
            {[0.4, 0.9, 0.6, 1.0, 0.7, 0.85, 0.5].map((barHeight, i) => (
              <div
                key={i}
                className={`w-1 rounded-full bg-gradient-to-t from-amber-500 to-yellow-300 transition-all duration-75 ${
                  isSpeaking && isVoiceActive ? "opacity-100" : "opacity-25"
                }`}
                style={{
                  height:
                    isSpeaking && isVoiceActive
                      ? `${Math.max(4, barHeight * Math.max(0.3, speechEnergy) * 18)}px`
                      : "4px",
                }}
              />
            ))}
          </div>

          {onReplayVoice && (
            <button
              onClick={onReplayVoice}
              className="p-1.5 rounded-lg bg-surface-200 text-slate-400 hover:text-amber-400 hover:bg-surface-300 border border-white/5 transition-colors"
              title="Re-speak narration"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isSpeaking ? "animate-spin text-amber-400" : ""}`} />
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            {currentStep.tag}
          </span>
          <span className="text-xs font-mono text-slate-400">{currentStep.badge}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          {currentStep.title}
        </h3>

        {/* Spoken Narration Dialogue Bubble with glowing border when speaking */}
        <div
          className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative ${
            isSpeaking && isVoiceActive
              ? "bg-surface-200/80 border-amber-500/40 shadow-glow"
              : "bg-surface-200/40 border-white/5"
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-serif text-2xl leading-none select-none">“</span>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal italic flex-1">
              {currentStep.dialogue}
            </p>
            <span className="text-amber-400 font-serif text-2xl leading-none select-none self-end">”</span>
          </div>

          {/* Sound wave line */}
          {isSpeaking && isVoiceActive && (
            <div className="mt-3 pt-2 border-t border-amber-500/20 flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span className="flex items-center gap-1.5">
                <Activity className="h-3 w-3 animate-pulse" />
                Live Audio Stream Active
              </span>
              <span>{Math.round(speechEnergy * 100)}% SPL</span>
            </div>
          )}
        </div>

        {/* Active Telemetry */}
        <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-slate-400">
          <span className="text-slate-400">Hardware Telemetry:</span>
          <span className="text-amber-400 font-medium">{currentStep.telemetry}</span>
        </div>
      </div>
    </div>
  );
}
