"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

interface IridescenceProps {
  color?: [number, number, number];
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
  className?: string;
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uSpeed;
uniform vec2 uMouse;

#define PI 3.14159265359

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5453);
  float b = fract(sin(dot(i + vec2(1.0, 0.0), vec2(127.1, 311.7))) * 43758.5453);
  float c = fract(sin(dot(i + vec2(0.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  float d = fract(sin(dot(i + vec2(1.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float val = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    val += amp * noise(p);
    p *= 2.0;
    amp *= 0.5;
  }
  return val;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 mouse = uMouse;
  float t = uTime * uSpeed * 0.3;

  vec2 p = uv * 2.5 - 0.5;
  p += (mouse - 0.5) * 0.15;

  float n = fbm(p + t);
  float n2 = fbm(p * 1.5 - t * 0.7 + 3.0);
  float n3 = fbm(p * 0.8 + t * 0.5 + 7.0);

  float hue = fract(n * 0.6 + n2 * 0.3 + t * 0.05 + uColor.r * 0.3);
  float sat = 0.65 + n3 * 0.25;
  float val = 0.35 + n * uAmplitude * 0.45 + n2 * 0.2;

  vec3 col = hsv2rgb(vec3(hue, sat, val));

  float edge = smoothstep(0.0, 0.12, uv.x) * smoothstep(0.0, 0.12, uv.y)
             * smoothstep(0.0, 0.12, 1.0 - uv.x) * smoothstep(0.0, 0.12, 1.0 - uv.y);

  float alpha = (n * 0.5 + n2 * 0.3 + 0.3) * edge * uAmplitude;
  alpha = clamp(alpha, 0.0, 0.85);

  gl_FragColor = vec4(col, alpha);
}
`;

export default function Iridescence({
  color = [0.54, 0.36, 0.98],
  speed = 1.0,
  amplitude = 1.0,
  mouseReact = true,
  className = "",
}: IridescenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Color(gl.canvas.width, gl.canvas.height, 1) },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.uResolution.value.r = clientWidth;
      program.uniforms.uResolution.value.g = clientHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    let targetMouse = [0.5, 0.5];
    let currentMouse = [0.5, 0.5];

    function onMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      targetMouse = [(e.clientX - rect.left) / rect.width, 1 - (e.clientY - rect.top) / rect.height];
    }
    if (mouseReact) container.addEventListener("mousemove", onMouseMove);

    function update(t: number) {
      if (mouseReact) {
        currentMouse[0] += 0.04 * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += 0.04 * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      }
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      rafRef.current = requestAnimationFrame(update);
    }
    rafRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      if (mouseReact) container.removeEventListener("mousemove", onMouseMove);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
}
