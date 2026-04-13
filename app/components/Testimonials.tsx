import SpotlightCard from "./SpotlightCard";

const testimonials = [
  {
    quote:
      "Llevaba años usando brokers donde no entendía exactamente qué pagaba. Con Wrap es la primera vez que siento que tengo el control real de mis posiciones.",
    name: "Marta G.",
    role: "Inversora independiente · Madrid",
    initials: "MG",
  },
  {
    quote:
      "La función de cobertura al instante es lo que más me ha sorprendido. Antes necesitaba salir a buscar instrumentos de cobertura manualmente. Aquí es un clic.",
    name: "Carlos R.",
    role: "Trader retail · Barcelona",
    initials: "CR",
  },
  {
    quote:
      "El gráfico de riesgo/beneficio antes de confirmar debería ser obligatorio en todos los brokers. No entiendo cómo nadie lo había hecho antes.",
    name: "Lucía M.",
    role: "Analista financiero · Valencia",
    initials: "LM",
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <p className="text-[11px] tracking-[0.3em] uppercase text-sky-500 mb-4">
        Acceso anticipado
      </p>
      <h2
        className="font-semibold tracking-[-0.02em] text-[#0c4a6e] mb-12 max-w-lg"
        style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
      >
        Lo que dicen quienes ya lo han probado.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <SpotlightCard
            key={t.name}
            className="rounded-2xl border border-sky-100 bg-white p-8 shadow-sm flex flex-col justify-between gap-8"
            spotlightColor="rgba(14, 165, 233, 0.08)"
          >
            <p className="text-sm text-slate-600 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-xs font-semibold text-sky-600 shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="text-xs font-medium text-slate-900">{t.name}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{t.role}</p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
