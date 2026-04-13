"use client";
import dynamic from "next/dynamic";

const Iridescence = dynamic(() => import("./Iridescence"), { ssr: false });

interface IridescenceBackgroundProps {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
  className?: string;
}

export default function IridescenceBackground({ className = "", ...props }: IridescenceBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Iridescence {...props} />
    </div>
  );
}
