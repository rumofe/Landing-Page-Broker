"use client";
import dynamic from "next/dynamic";
import type { CSSProperties } from "react";

const Waves = dynamic(() => import("./Waves"), { ssr: false });

interface WavesBackgroundProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  xGap?: number;
  yGap?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
  style?: CSSProperties;
  className?: string;
}

export default function WavesBackground({ className = "", ...props }: WavesBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Waves {...props} />
    </div>
  );
}
