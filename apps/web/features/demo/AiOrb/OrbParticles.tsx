"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbParticlesProps {
  isSpeaking: boolean;
  speechEnergy: number;
}

export function OrbParticles({ isSpeaking, speechEnergy }: OrbParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2400;

  // Generate spherical particle distribution with warm solar amber and champagne gold
  const [positions, initialPositions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const initPos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color("#fef08a"); // radiant warm white-gold
    const colorAmber = new THREE.Color("#f59e0b"); // rich amber
    const colorOrange = new THREE.Color("#ea580c"); // deep flame

    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere distribution for uniform dots
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + 5 ** 0.5) * i;
      const radius = 2.0;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initPos[i * 3] = x;
      initPos[i * 3 + 1] = y;
      initPos[i * 3 + 2] = z;

      // Color gradient from top to bottom
      const t = (y + radius) / (2 * radius);
      const lerpedColor =
        t > 0.5
          ? colorGold.clone().lerp(colorAmber, (t - 0.5) * 2)
          : colorAmber.clone().lerp(colorOrange, t * 2);

      col[i * 3] = lerpedColor.r;
      col[i * 3 + 1] = lerpedColor.g;
      col[i * 3 + 2] = lerpedColor.b;
    }

    return [pos, initPos, col];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();

    // Constant slow rotation
    pointsRef.current.rotation.y = time * 0.25;
    pointsRef.current.rotation.x = Math.sin(time * 0.15) * 0.1;

    const geometry = pointsRef.current.geometry;
    const posAttr = geometry.attributes.position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;

    // Amplitude driven by speech pulse
    const activeAmplitude = isSpeaking ? 0.35 * speechEnergy : 0.08;

    for (let i = 0; i < particleCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      const ox = initialPositions[ix];
      const oy = initialPositions[iy];
      const oz = initialPositions[iz];

      // Radial displacement wave with speech pulsation
      const wave = Math.sin(ox * 3.0 + time * 3.5) * Math.cos(oy * 3.0 + time * 3.0);
      const mouthBand = Math.abs(oy) < 0.4 ? (isSpeaking ? speechEnergy * 0.25 : 0) : 0;
      const scale = 1 + activeAmplitude * wave + mouthBand;

      posArray[ix] = ox * scale;
      posArray[iy] = oy * scale;
      posArray[iz] = oz * scale;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
