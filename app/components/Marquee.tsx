import React from "react";

const items = [
  "Transparencia total",
  "Sin comisiones ocultas",
  "Cobertura en 1 clic",
  "Precio real antes de operar",
  "Simplicidad sin límites",
  "Tu dinero, tu control",
  "Diseñado para inversores",
  "Sin letra pequeña",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-sky-100 py-4 bg-sky-50">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-sky-50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-sky-50 to-transparent pointer-events-none" />

      <div className="flex gap-0 marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 shrink-0 px-8 text-[11px] tracking-[0.2em] uppercase font-medium"
            style={{
              color: i % 2 === 0 ? "rgba(12, 74, 110, 0.35)" : "rgba(14, 165, 233, 0.75)",
            }}
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-sky-200 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
