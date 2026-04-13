"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuándo estará disponible Wrap?",
    a: "Estamos en fase de desarrollo activo. Abriremos el acceso por orden de lista de espera durante 2026. Cuanto antes te apuntes, antes accedes.",
  },
  {
    q: "¿Qué tipo de productos podré operar?",
    a: "En el lanzamiento: acciones, ETFs y derivados sobre los principales índices y valores. Ampliaremos la oferta de forma progresiva basándonos en el feedback de los primeros usuarios.",
  },
  {
    q: "¿Cómo funciona la cobertura de posiciones?",
    a: "Cuando tienes una posición abierta, el sistema calcula automáticamente la cobertura óptima y te muestra el coste exacto antes de ejecutarla. Un solo clic para activarla. Sin cálculos manuales, sin búsqueda de instrumentos de cobertura.",
  },
  {
    q: "¿Cuáles son las comisiones?",
    a: "Sin comisiones ocultas. El precio que ves antes de ejecutar es exactamente lo que pagas. No hay tarifas de inactividad, ni spreads escondidos, ni costes de custodia. La estructura de precios completa estará disponible antes del lanzamiento.",
  },
  {
    q: "¿Está regulado?",
    a: "Wrap opera bajo la regulación de los organismos competentes en los mercados en los que opera. Toda la información regulatoria estará disponible públicamente antes del lanzamiento.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Utilizamos cifrado de extremo a extremo para todas las comunicaciones y almacenamos los datos siguiendo los más altos estándares de seguridad del sector financiero. No vendemos ni compartimos datos de usuarios con terceros.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sky-100 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-slate-700 group-hover:text-sky-700 transition-colors">
          {q}
        </span>
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center text-sky-300 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="text-sm text-slate-500 leading-relaxed pb-5 pr-10">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <p className="text-[11px] tracking-[0.3em] uppercase text-sky-500 mb-4">
        Preguntas frecuentes
      </p>
      <h2
        className="font-semibold tracking-[-0.02em] text-[#0c4a6e] mb-12"
        style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
      >
        Lo que todo el mundo quiere saber.
      </h2>

      <div className="rounded-2xl border border-sky-100 bg-white px-8 shadow-sm">
        {faqs.map((item) => (
          <FAQItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  );
}
