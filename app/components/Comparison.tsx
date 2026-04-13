// Server Component

const rows = [
  { feature: "Precio visible antes de ejecutar", traditional: false, apex: true },
  { feature: "Cobertura de posición en 1 clic", traditional: false, apex: true },
  { feature: "Sin comisiones ocultas", traditional: false, apex: true },
  { feature: "Interfaz diseñada para el usuario", traditional: false, apex: true },
  { feature: "Gráfico de riesgo/beneficio", traditional: false, apex: true },
  { feature: "Coste de cobertura visible", traditional: false, apex: true },
  { feature: "Contratos sin letra pequeña", traditional: false, apex: true },
];

const Check = ({ ok }: { ok: boolean }) => {
  if (ok) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-100 text-sky-600 text-sm">
        ✓
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-300 text-sm">
      ✕
    </span>
  );
};

export default function Comparison({ embedded = false }: { embedded?: boolean }) {
  const rows_content = rows.map((row, i) => (
    <div
      key={row.feature}
      className="grid grid-cols-[1fr_120px_120px] border-b border-sky-50 last:border-0"
      style={{ background: i % 2 === 0 ? "transparent" : "rgba(240, 249, 255, 0.6)" }}
    >
      <div className="px-6 py-4">
        <span className="text-sm text-slate-600">{row.feature}</span>
      </div>
      <div className="px-6 py-4 flex items-center justify-center">
        <Check ok={row.traditional} />
      </div>
      <div className="px-6 py-4 flex items-center justify-center border-l border-sky-50">
        <Check ok={row.apex} />
      </div>
    </div>
  ));

  if (embedded) return <>{rows_content}</>;

  return (
    <section className="py-20 px-6 bg-white border-b border-sky-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-[11px] tracking-[0.3em] uppercase text-sky-500 mb-4">
          La diferencia
        </p>
        <h2
          className="font-semibold tracking-[-0.02em] text-[#0c4a6e] mb-12 max-w-lg"
          style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
        >
          No somos otro broker más.
        </h2>

        <div className="rounded-2xl border border-sky-100 overflow-hidden shadow-sm">
          <div className="grid grid-cols-[1fr_120px_120px] bg-sky-50 border-b border-sky-100">
            <div className="px-6 py-4" />
            <div className="px-6 py-4 text-center">
              <span className="text-[10px] tracking-[0.15em] uppercase text-slate-400">
                Broker tradicional
              </span>
            </div>
            <div className="px-6 py-4 text-center border-l border-sky-100">
              <span className="text-[10px] tracking-[0.15em] uppercase text-sky-600 font-semibold">
                Wrap
              </span>
            </div>
          </div>
          {rows_content}
        </div>
      </div>
    </section>
  );
}
