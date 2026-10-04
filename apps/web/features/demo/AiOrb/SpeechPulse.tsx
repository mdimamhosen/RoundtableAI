"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SpeechPulseProps {
  isSpeaking: boolean;
  speechEnergy: number;
}

export function SpeechPulse({ isSpeaking, speechEnergy }: SpeechPulseProps) {
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pulseFactor = isSpeaking ? 1 + speechEnergy * 0.45 : 1 + Math.sin(time * 2) * 0.05;

    if (ringRef1.current) {
      ringRef1.current.rotation.z = time * 0.8;
      ringRef1.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.5) * 0.2;
      const s = 2.15 * pulseFactor;
      ringRef1.current.scale.set(s, s, s);
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z = -time * 0.6;
      ringRef2.current.rotation.y = time * 0.4;
      const s = 2.35 * (isSpeaking ? 1 + speechEnergy * 0.6 : 1);
      ringRef2.current.scale.set(s, s, s);
    }

    if (coreRef.current) {
      const coreScale = 1.35 * (isSpeaking ? 1 + speechEnergy * 0.25 : 1);
      coreRef.current.scale.set(coreScale, coreScale, coreScale);
    }
  });

  return (
    <group>
      {/* Internal luminous warm energy core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#d97706"
          transparent
          opacity={isSpeaking ? 0.35 : 0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Primary speech waveform ring - Champagne Gold */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={isSpeaking ? 0.95 : 0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Secondary orbital halo - Solar Orange */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshBasicMaterial
          color="#f97316"
          transparent
          opacity={isSpeaking ? 0.85 : 0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
