"use client";
import dynamic from "next/dynamic";

const Orb = dynamic(() => import("./Orb"), { ssr: false });

interface OrbBackgroundProps {
  hue?: number;
  hueShift?: number;
  forceHoverState?: boolean;
  className?: string;
}

export default function OrbBackground({ className = "", ...props }: OrbBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Orb {...props} />
    </div>
  );
}
