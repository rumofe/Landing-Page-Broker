"use client";
import dynamic from "next/dynamic";

const Threads = dynamic(() => import("./Threads"), { ssr: false });

interface ThreadsBackgroundProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  className?: string;
}

export default function ThreadsBackground({ className = "", ...props }: ThreadsBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Threads {...props} />
    </div>
  );
}
