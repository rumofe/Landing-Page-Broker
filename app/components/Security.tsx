// Server Component

const pillars = [
  {
    icon: "🔒",
    title: "Cifrado extremo a extremo",
    body: "Todas las comunicaciones y datos están protegidos con cifrado de grado bancario.",
  },
  {
    icon: "🛡",
    title: "Regulación y cumplimiento",
    body: "Operamos bajo supervisión regulatoria en todos los mercados en los que estamos presentes.",
  },
  {
    icon: "🔍",
    title: "Auditoría independiente",
    body: "Nuestros sistemas son auditados por terceros independientes con regularidad.",
  },
  {
    icon: "💸",
    title: "Fondos segregados",
    body: "Tu dinero está separado de los fondos operativos de la empresa en todo momento.",
  },
];

export default function Security() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <p className="text-[11px] tracking-[0.3em] uppercase text-sky-500 mb-4">
        Seguridad
      </p>
      <h2
        className="font-semibold tracking-[-0.02em] text-[#0c4a6e] mb-3 max-w-lg"
        style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
      >
        Tu dinero, protegido.
      </h2>
      <p className="text-sm text-slate-500 max-w-md mb-12 leading-relaxed">
        La transparencia no es solo en los precios. También en cómo custodiamos
        tu capital y tus datos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
          >
            <span className="text-2xl mb-4 block">{p.icon}</span>
            <h4 className="text-sm font-semibold text-slate-900 mb-2">{p.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 items-center">
        {["ISO 27001", "PCI DSS", "GDPR Compliant", "MiFID II"].map((badge) => (
          <span
            key={badge}
            className="text-[10px] tracking-[0.15em] uppercase text-sky-600 border border-sky-200 bg-sky-50 px-4 py-2 rounded-full"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
