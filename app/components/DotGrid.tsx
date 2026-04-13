"use client";

import { useRef, useEffect } from "react";

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  shockRadius?: number;
  shockStrength?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function hexToRgb(hex: string): [number, number, number] {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
    : [128, 128, 128];
}

export default function DotGrid({
  dotSize = 4,
  gap = 20,
  baseColor = "#333333",
  activeColor = "#ffffff",
  proximity = 100,
  shockRadius = 200,
  shockStrength = 5,
  resistance = 500,
  returnDuration = 1.5,
  className = "",
  style = {},
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spacing = dotSize + gap;
    const [br, bg, bb] = hexToRgb(baseColor);
    const [ar, ag, ab] = hexToRgb(activeColor);

    const springK = 0.06 / Math.max(returnDuration, 0.1);
    const velocityDecay = Math.min(0.99, 1 - 10 / Math.max(resistance, 1));

    type Dot = { x: number; y: number; ox: number; oy: number; vx: number; vy: number };
    type Shock = { x: number; y: number; t: number };

    let dots: Dot[] = [];
    let mx = -9999, my = -9999;
    let shocks: Shock[] = [];
    let raf = 0;
    let visible = true;

    function build(w: number, h: number) {
      dots = [];
      for (let row = 0; row * spacing < h + spacing; row++) {
        for (let col = 0; col * spacing < w + spacing; col++) {
          const ox = col * spacing + spacing / 2;
          const oy = row * spacing + spacing / 2;
          dots.push({ x: ox, y: oy, ox, oy, vx: 0, vy: 0 });
        }
      }
    }

    function resize() {
      const p = canvas.parentElement;
      canvas.width = p ? p.clientWidth : window.innerWidth;
      canvas.height = p ? p.clientHeight : window.innerHeight;
      build(canvas.width, canvas.height);
    }

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    // Pause animation when off-screen
    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible && raf === 0) raf = requestAnimationFrame(frame);
    }, { threshold: 0 });
    io.observe(canvas);

    function frame() {
      if (!visible) { raf = 0; return; }

      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const now = performance.now();

      shocks = shocks.filter((s) => now - s.t < 2500);

      for (const d of dots) {
        for (const s of shocks) {
          const elapsed = (now - s.t) / 1000;
          const waveFront = elapsed * shockRadius * 1.5;
          const dx = d.ox - s.x, dy = d.oy - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const delta = Math.abs(dist - waveFront);
          if (delta < 25 && dist > 0.01) {
            const str = shockStrength * 15 * Math.max(0, 1 - elapsed * 0.6) * (1 - delta / 25);
            d.vx += (dx / dist) * str;
            d.vy += (dy / dist) * str;
          }
        }

        d.vx += (d.ox - d.x) * springK;
        d.vy += (d.oy - d.y) * springK;
        d.vx *= velocityDecay;
        d.vy *= velocityDecay;
        d.x += d.vx;
        d.y += d.vy;

        const pdx = d.ox - mx, pdy = d.oy - my;
        const pDist = Math.sqrt(pdx * pdx + pdy * pdy);
        const disp = Math.sqrt((d.x - d.ox) ** 2 + (d.y - d.oy) ** 2);
        const t = Math.max(
          pDist < proximity ? (1 - pDist / proximity) ** 1.5 : 0,
          Math.min(1, disp / 12)
        );

        const r = Math.round(br + (ar - br) * t);
        const g = Math.round(bg + (ag - bg) * t);
        const b = Math.round(bb + (ab - bb) * t);

        ctx.beginPath();
        ctx.arc(d.x, d.y, dotSize / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    function onMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    }
    function onLeave() { mx = -9999; my = -9999; }
    function onClick(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      shocks.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, t: performance.now() });
    }

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", cursor: "crosshair", ...style }}
    />
  );
}
