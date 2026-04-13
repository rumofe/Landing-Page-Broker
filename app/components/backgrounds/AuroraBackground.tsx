"use client";

import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("./Aurora"), { ssr: false });

interface AuroraBackgroundProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  className?: string;
}

export default function AuroraBackground({
  className = "",
  ...props
}: AuroraBackgroundProps) {
  return (
    <div className={className}>
      <Aurora {...props} />
    </div>
  );
}
