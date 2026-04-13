"use client";
import dynamic from "next/dynamic";

const FloatingLines = dynamic(() => import("./FloatingLines"), { ssr: false });

export default function HeroBackground() {
  return (
    <FloatingLines
      enabledWaves={["middle", "bottom"]}
      lineCount={3}
      lineDistance={5}
      bendRadius={4}
      bendStrength={-0.5}
      interactive
      parallax={false}
      linesGradient={["#38bdf8", "#7dd3fc", "#bae6fd"]}
      mixBlendMode="screen"
    />
  );
}
