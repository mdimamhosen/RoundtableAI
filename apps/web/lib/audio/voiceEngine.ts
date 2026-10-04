/**
 * ProofDesk Studio Voice Synthesizer Engine
 * High-definition browser Web Speech API + Web Audio API synthesizer
 */

export interface VoiceOption {
  name: string;
  lang: string;
  gender?: string;
  nativeVoice?: SpeechSynthesisVoice;
}

class StudioVoiceEngine {
  private synth: SpeechSynthesis | null = null;
  private audioCtx: AudioContext | null = null;
  private isMuted: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voicesLoaded: boolean = false;
  private voiceList: SpeechSynthesisVoice[] = [];
  private resumeInterval: NodeJS.Timeout | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      if ("speechSynthesis" in window) {
        this.synth = window.speechSynthesis;
        this.initVoices();
      }

      // Automatically unlock audio on first user touch/click if browser blocked autoplay
      const unlockAudio = () => {
        if (this.synth && this.synth.paused) {
          this.synth.resume();
        }
        if (this.audioCtx && this.audioCtx.state === "suspended") {
          this.audioCtx.resume();
        }
        window.removeEventListener("click", unlockAudio);
        window.removeEventListener("touchstart", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
      };

      window.addEventListener("click", unlockAudio, { once: true, passive: true });
      window.addEventListener("touchstart", unlockAudio, { once: true, passive: true });
      window.addEventListener("keydown", unlockAudio, { once: true, passive: true });
    }
  }

  private initAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.audioCtx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  private initVoices() {
    if (!this.synth) return;
    const populate = () => {
      this.voiceList = this.synth?.getVoices() || [];
      this.voicesLoaded = this.voiceList.length > 0;
    };
    populate();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = populate;
    }
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (!this.voicesLoaded && this.synth) {
      this.voiceList = this.synth.getVoices();
    }
    return this.voiceList;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stop();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Synthesize natural human-like speech aloud using the browser's speech synthesis
   */
  public speak(
    text: string,
    options: {
      rate?: number;
      pitch?: number;
      voiceName?: string;
      onStart?: () => void;
      onEnd?: () => void;
      onBoundary?: (charIndex: number, charLength: number) => void;
      onError?: () => void;
    } = {}
  ): boolean {
    if (this.isMuted || typeof window === "undefined" || !this.synth) {
      return false;
    }

    try {
      this.stop();

      // Resume synthesis if suspended
      if (this.synth.paused) {
        this.synth.resume();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = options.rate ?? 0.98; // Natural, authoritative studio pace
      utterance.pitch = options.pitch ?? 1.0;
      utterance.volume = 1.0;
      utterance.lang = "en-US";

      // Select the most natural human-sounding English voice available
      const voices = this.getVoices();
      if (voices.length > 0) {
        if (options.voiceName) {
          const matched = voices.find((v) => v.name.includes(options.voiceName!));
          if (matched) utterance.voice = matched;
        }

        if (!utterance.voice) {
          // Priority list of premium natural voices across Safari/Chrome/macOS/Windows
          const preferredNames = [
            "Samantha",
            "Karen",
            "Daniel",
            "Serena",
            "Moira",
            "Tessa",
            "Google US English",
            "Google UK English Female",
            "Microsoft Jenny Online (Natural)",
            "Microsoft Aria Online (Natural)",
            "Microsoft Zira",
            "Victoria",
            "Alex",
          ];

          for (const name of preferredNames) {
            const match = voices.find((v) => v.name.includes(name));
            if (match) {
              utterance.voice = match;
              break;
            }
          }

          if (!utterance.voice) {
            utterance.voice =
              voices.find((v) => v.lang.startsWith("en") && v.name.includes("Natural")) ||
              voices.find((v) => v.lang.startsWith("en-US")) ||
              voices.find((v) => v.lang.startsWith("en")) ||
              voices[0];
          }
        }
      }

      // Fix Chrome garbage collection bug by pinning utterance to window
      if (typeof window !== "undefined") {
        (window as unknown as { _proofdeskActiveUtterance?: SpeechSynthesisUtterance })._proofdeskActiveUtterance = utterance;
      }

      utterance.onstart = () => {
        options.onStart?.();
        // Chrome bug workaround: keep-alive resume ping every 10s
        if (this.resumeInterval) clearInterval(this.resumeInterval);
        this.resumeInterval = setInterval(() => {
          if (this.synth?.speaking && this.synth?.paused) {
            this.synth.resume();
          }
        }, 3000);
      };

      utterance.onend = () => {
        if (this.resumeInterval) {
          clearInterval(this.resumeInterval);
          this.resumeInterval = null;
        }
        if (typeof window !== "undefined") {
          delete (window as unknown as { _proofdeskActiveUtterance?: SpeechSynthesisUtterance })._proofdeskActiveUtterance;
        }
        this.currentUtterance = null;
        options.onEnd?.();
      };

      utterance.onerror = () => {
        if (this.resumeInterval) {
          clearInterval(this.resumeInterval);
          this.resumeInterval = null;
        }
        this.currentUtterance = null;
        options.onError?.();
      };

      utterance.onboundary = (e) => {
        options.onBoundary?.(
          e.charIndex,
          (e as unknown as { charLength?: number }).charLength || 4
        );
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
      return true;
    } catch {
      return false;
    }
  }

  public stop() {
    if (this.resumeInterval) {
      clearInterval(this.resumeInterval);
      this.resumeInterval = null;
    }
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch {
        // ignore
      }
    }
    this.currentUtterance = null;
  }

  /**
   * Procedural Web Audio API Sound Effects
   */
  public playChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.initAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(1046.5, now + 0.05); // C6

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now + 0.05);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } catch {
      // AudioContext unavailable
    }
  }

  public playActivationTone() {
    if (this.isMuted) return;
    try {
      const ctx = this.initAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch {
      // ignore
    }
  }
}

export const voiceEngine = new StudioVoiceEngine();
