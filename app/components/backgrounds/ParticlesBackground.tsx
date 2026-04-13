"use client";

import dynamic from "next/dynamic";

const Particles = dynamic(() => import("./Particles"), { ssr: false });

interface ParticlesBackgroundProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
}

export default function ParticlesBackground({
  className = "",
  ...props
}: ParticlesBackgroundProps) {
  return (
    <div className={className}>
      <Particles {...props} />
    </div>
  );
}
