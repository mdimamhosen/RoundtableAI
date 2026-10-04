"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbParticles } from "./OrbParticles";
import { SpeechPulse } from "./SpeechPulse";

interface AiOrbProps {
  isSpeaking: boolean;
  speechEnergy: number;
}

export function AiOrb({ isSpeaking, speechEnergy }: AiOrbProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle gentle floating hover motion
    groupRef.current.position.y = Math.sin(time * 1.2) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <OrbParticles isSpeaking={isSpeaking} speechEnergy={speechEnergy} />
      <SpeechPulse isSpeaking={isSpeaking} speechEnergy={speechEnergy} />

      {/* Dynamic central point light - Solar Gold */}
      <pointLight
        color="#fbbf24"
        intensity={isSpeaking ? 3.5 : 1.4}
        distance={8}
      />
      <pointLight
        color="#ea580c"
        intensity={isSpeaking ? 2.5 : 0.8}
        distance={8}
        position={[0, -1, 0]}
      />
    </group>
  );
}
