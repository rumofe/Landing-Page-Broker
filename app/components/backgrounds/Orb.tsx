"use client";

import { useEffect, useRef } from "react";

interface OrbProps {
  hue?: number;
  hueShift?: number;
  forceHoverState?: boolean;
  className?: string;
}

export default function Orb({
  hue = 260,
  hueShift = 45,
  forceHoverState = false,
  className = "",
}: OrbProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, hovering: forceHoverState });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas || !container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouseRef.current.tx = (e.clientX - rect.left) / rect.width;
      mouseRef.current.ty = (e.clientY - rect.top) / rect.height;
      mouseRef.current.hovering = true;
    }
    function onMouseLeave() {
      if (!forceHoverState) {
        mouseRef.current.tx = 0.5;
        mouseRef.current.ty = 0.5;
        mouseRef.current.hovering = false;
      }
    }
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    let t = 0;
    function draw() {
      if (!canvas || !ctx) return;
      const { width, height } = canvas;
      const m = mouseRef.current;
      m.x += 0.03 * (m.tx - m.x);
      m.y += 0.03 * (m.ty - m.y);

      t += 0.005;
      const cx = width * (0.35 + Math.sin(t * 0.9) * 0.1 + (m.x - 0.5) * 0.2);
      const cy = height * (0.45 + Math.cos(t * 0.7) * 0.08 + (m.y - 0.5) * 0.15);
      const r = Math.min(width, height) * (0.42 + Math.sin(t * 1.3) * 0.04);

      ctx.clearRect(0, 0, width, height);

      const currentHue = hue + Math.sin(t * 0.6) * hueShift;
      const secondHue = currentHue + 70;

      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grd.addColorStop(0, `hsla(${currentHue}, 90%, 75%, 0.85)`);
      grd.addColorStop(0.35, `hsla(${secondHue}, 80%, 60%, 0.6)`);
      grd.addColorStop(0.7, `hsla(${currentHue + 30}, 70%, 45%, 0.3)`);
      grd.addColorStop(1, `hsla(${currentHue}, 60%, 30%, 0)`);

      ctx.beginPath();
      ctx.ellipse(cx, cy, r * 1.1, r * 0.9, t * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Inner bright core
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.35);
      core.addColorStop(0, `hsla(${currentHue + 20}, 100%, 90%, 0.7)`);
      core.addColorStop(1, `hsla(${currentHue}, 90%, 70%, 0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    }
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [hue, hueShift, forceHoverState]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
