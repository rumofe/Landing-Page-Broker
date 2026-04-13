"use client";

import { useRef, useEffect } from "react";

interface LineWavesProps {
  speed?: number;
  innerLineCount?: number;
  outerLineCount?: number;
  warpIntensity?: number;
  rotation?: number;
  edgeFadeWidth?: number;
  colorCycleSpeed?: number;
  brightness?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  enableMouseInteraction?: boolean;
  mouseInfluence?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string): [number, number, number] {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [255, 255, 255];
}

function lerpRgb(
  a: [number, number, number],
  b: [number, number, number],
  u: number
): [number, number, number] {
  return [
    Math.round(a[0] + (b[0] - a[0]) * u),
    Math.round(a[1] + (b[1] - a[1]) * u),
    Math.round(a[2] + (b[2] - a[2]) * u),
  ];
}

export default function LineWaves({
  speed = 1,
  innerLineCount = 20,
  outerLineCount = 10,
  warpIntensity = 1,
  rotation = 0,
  edgeFadeWidth = 0.1,
  colorCycleSpeed = 1,
  brightness = 0.8,
  color1 = "#ff0000",
  color2 = "#00ff00",
  color3 = "#0000ff",
  enableMouseInteraction = false,
  mouseInfluence = 1,
  className = "",
  style = {},
}: LineWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let mx = 0.5, my = 0.5;
    let hasMouse = false;
    let raf = 0;
    let t = 0;

    function resize() {
      const p = canvas.parentElement;
      w = canvas.width = p ? p.clientWidth : window.innerWidth;
      h = canvas.height = p ? p.clientHeight : window.innerHeight;
    }

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const rgb3 = hexToRgb(color3);

    function getLineColor(
      lineIndex: number,
      totalLines: number,
      time: number
    ): [number, number, number] {
      const phase =
        ((time * colorCycleSpeed * 0.3 + (lineIndex / totalLines) * Math.PI * 2) %
          (Math.PI * 2) +
          Math.PI * 2) %
        (Math.PI * 2);
      const s = phase / (Math.PI * 2);
      if (s < 1 / 3) return lerpRgb(rgb1, rgb2, s * 3);
      if (s < 2 / 3) return lerpRgb(rgb2, rgb3, (s - 1 / 3) * 3);
      return lerpRgb(rgb3, rgb1, (s - 2 / 3) * 3);
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate((rotation * Math.PI) / 180);

      const diagonal = Math.sqrt(w * w + h * h);
      const totalLines = innerLineCount + outerLineCount;
      const spread = diagonal * 0.9;
      const lineLen = diagonal * 1.6;
      const steps = Math.max(60, Math.ceil(lineLen / 8));

      for (let i = 0; i < totalLines; i++) {
        const frac = (i + 0.5) / totalLines;
        const yBase = (frac - 0.5) * spread;

        // Inner lines are the middle band; slightly brighter
        const isInner =
          i >= Math.floor(outerLineCount / 2) &&
          i < Math.floor(outerLineCount / 2) + innerLineCount;

        const [cr, cg, cb] = getLineColor(i, totalLines, t);

        let alpha = brightness * (isInner ? 1.25 : 0.75);
        if (edgeFadeWidth > 0) {
          const edgeFrac = Math.min(frac, 1 - frac) / Math.max(edgeFadeWidth, 0.001);
          alpha *= Math.min(1, edgeFrac);
        }
        alpha = Math.max(0, Math.min(1, alpha));

        ctx.beginPath();
        for (let j = 0; j <= steps; j++) {
          const xRaw = (j / steps - 0.5) * lineLen;
          const xNorm = xRaw / diagonal;

          let yWave = 0;
          yWave += Math.sin(xNorm * 6.28 + t * 1.1 + i * 0.23) * 18 * warpIntensity;
          yWave += Math.sin(xNorm * 15.7 + t * 0.7 + i * 0.41) * 9 * warpIntensity;
          yWave += Math.sin(xNorm * 4.08 + t * 1.4 + i * 0.15) * 14 * warpIntensity;
          yWave += Math.cos(xNorm * 11.6 + t * 0.5) * 6 * warpIntensity;

          if (enableMouseInteraction && hasMouse) {
            const mxWorld = (mx - 0.5) * w;
            const myWorld = (my - 0.5) * h;
            const distX = xRaw - mxWorld;
            const distY = yBase + yWave - myWorld;
            const dist2 = distX * distX + distY * distY;
            yWave += mouseInfluence * 40 * Math.exp(-dist2 / 15000);
          }

          const yFinal = yBase + yWave;
          if (j === 0) ctx.moveTo(xRaw, yFinal);
          else ctx.lineTo(xRaw, yFinal);
        }

        ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      t += speed * 0.016;
      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    function onMove(e: MouseEvent) {
      if (!enableMouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      mx = (e.clientX - rect.left) / rect.width;
      my = (e.clientY - rect.top) / rect.height;
      hasMouse = true;
    }
    function onLeave() {
      hasMouse = false;
    }

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [
    speed, innerLineCount, outerLineCount, warpIntensity, rotation,
    edgeFadeWidth, colorCycleSpeed, brightness, color1, color2, color3,
    enableMouseInteraction, mouseInfluence,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
    />
  );
}
