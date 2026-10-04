"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AiOrb } from "./AiOrb/AiOrb";
import { 
  Sparkles, 
  Maximize2, 
  Minimize2, 
  Eye, 
  RotateCw, 
  Activity, 
  Layers,
  Volume2
} from "lucide-react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

interface DemoCanvasProps {
  isSpeaking: boolean;
  speechEnergy: number;
  activeColorTheme?: "solar" | "gold" | "emerald";
  onColorThemeChange?: (theme: "solar" | "gold" | "emerald") => void;
}

export function DemoCanvas({
  isSpeaking,
  speechEnergy,
  activeColorTheme = "solar",
  onColorThemeChange,
}: DemoCanvasProps) {
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const setAngle = (preset: "front" | "top" | "side") => {
    if (!controlsRef.current) return;
    const camera = controlsRef.current.object;
    if (preset === "front") {
      camera.position.set(0, 0, 5.2);
    } else if (preset === "top") {
      camera.position.set(0, 3.8, 3.8);
    } else if (preset === "side") {
      camera.position.set(4.2, 1.2, 3.2);
    }
    controlsRef.current.update();
  };

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[440px] sm:min-h-[520px] lg:min-h-[620px] flex items-center justify-center bg-surface-100/50 rounded-3xl border border-white/10 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-amber-500/20 border-t-amber-400 animate-spin" />
          <span className="text-xs font-mono text-slate-400">Initializing WebGL Shader Pipeline...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`w-full relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-surface-100/90 via-surface-200/60 to-surface-100/90 shadow-glass backdrop-blur-2xl transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-4 z-50 min-h-[calc(100vh-2rem)]"
          : "h-[440px] sm:h-[520px] lg:h-[620px]"
      }`}
    >
      {/* Dynamic ambient background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background:
            activeColorTheme === "emerald"
              ? "radial-gradient(circle at center, rgba(16,185,129,0.18), transparent 65%)"
              : activeColorTheme === "gold"
              ? "radial-gradient(circle at center, rgba(251,191,36,0.18), transparent 65%)"
              : "radial-gradient(circle at center, rgba(245,158,11,0.18), transparent 65%)",
        }}
      />

      {/* Grid overlay texture */}
      <div className="absolute inset-0 bg-studio-grid opacity-30 pointer-events-none" />

      {/* Top HUD Toolbar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        {/* Left Badge */}
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-100/80 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md shadow-sm">
          <span
            className={`w-2 h-2 rounded-full animate-pulse ${
              isSpeaking ? "bg-amber-400 shadow-glow" : "bg-slate-500"
            }`}
          />
          <span className="font-semibold text-white">Solar Neural Orb</span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-amber-400/90 hidden sm:inline">
            {isSpeaking ? "Vocal Cadence Synchronized" : "Standby Acoustic Mode"}
          </span>
        </div>

        {/* Right Camera & Utility controls */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-surface-100/80 p-1 rounded-xl border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setAngle("front")}
            className="px-2 py-1 text-[11px] font-mono text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Front View"
          >
            Front
          </button>
          <button
            onClick={() => setAngle("top")}
            className="px-2 py-1 text-[11px] font-mono text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:block"
            title="Top Angle"
          >
            Top
          </button>
          <button
            onClick={() => setAngle("side")}
            className="px-2 py-1 text-[11px] font-mono text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:block"
            title="Side Perspective"
          >
            Iso
          </button>
          <button
            onClick={resetCamera}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Reset Rotation"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Canvas"}
          >
            {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Dynamic 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <AiOrb isSpeaking={isSpeaking} speechEnergy={speechEnergy} />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.4}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Bottom telemetry overlay bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-2 pointer-events-none">
        {/* Left: Energy Meter */}
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-100/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-300">
          <Activity className="h-3.5 w-3.5 text-amber-400" />
          <span>Acoustic Energy:</span>
          <div className="w-16 h-2 rounded-full bg-surface-300 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-75"
              style={{ width: `${Math.round(speechEnergy * 100)}%` }}
            />
          </div>
          <span className="text-amber-400 font-bold">{Math.round(speechEnergy * 100)}%</span>
        </div>

        {/* Right: Interaction hint & theme selector */}
        <div className="pointer-events-auto flex items-center gap-2">
          {onColorThemeChange && (
            <div className="flex items-center gap-1 bg-surface-100/80 p-1 rounded-xl border border-white/10 backdrop-blur-md">
              <button
                onClick={() => onColorThemeChange("solar")}
                className={`w-4 h-4 rounded-full bg-amber-500 transition-transform ${
                  activeColorTheme === "solar" ? "scale-110 ring-2 ring-white/60" : "opacity-60"
                }`}
                title="Solar Amber"
              />
              <button
                onClick={() => onColorThemeChange("gold")}
                className={`w-4 h-4 rounded-full bg-yellow-400 transition-transform ${
                  activeColorTheme === "gold" ? "scale-110 ring-2 ring-white/60" : "opacity-60"
                }`}
                title="Champagne Gold"
              />
              <button
                onClick={() => onColorThemeChange("emerald")}
                className={`w-4 h-4 rounded-full bg-emerald-400 transition-transform ${
                  activeColorTheme === "emerald" ? "scale-110 ring-2 ring-white/60" : "opacity-60"
                }`}
                title="Neural Emerald"
              />
            </div>
          )}
          <span className="text-[11px] font-mono text-slate-400 px-3 py-1.5 rounded-xl bg-surface-100/80 border border-white/10 backdrop-blur-md select-none hidden sm:inline">
            Drag to rotate 3D orb
          </span>
        </div>
      </div>
    </div>
  );
}
