import WaitlistForm from "./components/WaitlistForm";

const features = [
  {
    num: "01",
    title: "Transparencia total",
    body: "Ves exactamente cuánto ganas y cuánto arriesgas antes de confirmar cualquier operación. Sin sorpresas, sin letra pequeña.",
  },
  {
    num: "02",
    title: "Cobertura en un clic",
    body: "Asegura cualquier posición de forma inmediata. El sistema calcula la cobertura óptima y te muestra el coste real antes de ejecutar.",
  },
  {
    num: "03",
    title: "Sin costes ocultos",
    body: "El precio que ves en pantalla es exactamente lo que pagas. Sin spreads escondidos ni tarifas de inactividad.",
  },
];

const pillars = [
  {
    title: "Simplicidad",
    body: "Una interfaz diseñada para que cualquier decisión de inversión sea clara, rápida y sin fricción.",
  },
  {
    title: "Transparencia",
    body: "Toda la información que necesitas, visible antes de actuar. Nunca después.",
  },
  {
    title: "Confianza",
    body: "Construido sobre la premisa de que un broker debe trabajar para el inversor, no a sus expensas.",
  },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
        <span className="text-sm font-semibold tracking-widest uppercase text-[#0f1923]">
          ApexTrade
        </span>
        <a
          href="#acceso"
          className="text-xs font-medium tracking-widest uppercase text-[#0d9488] hover:opacity-70 transition-opacity"
        >
          Acceso anticipado
        </a>
      </nav>

      <main>

        {/* HERO */}
        <section className="px-6 pt-24 pb-28 max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-8">
            Acceso anticipado · 2026
          </p>
          <h1
            className="font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1923] mb-8 max-w-3xl"
            style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
          >
            Invierte con claridad.<br />Protege con confianza.
          </h1>
          <p
            className="text-[#4a5568] leading-relaxed max-w-xl mb-14"
            style={{ fontSize: "clamp(16px, 1.8vw, 18px)" }}
          >
            Un broker construido sobre un principio: que cada decisión
            financiera debe tomarse con información completa. Sin letra pequeña,
            sin sorpresas.
          </p>
          <WaitlistForm variant="hero" />
        </section>

        {/* STATS */}
        <section className="border-t border-b border-gray-100 bg-[#f9fafb]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3">
            {[
              { num: "0%",   label: "Comisiones ocultas" },
              { num: "100%", label: "Precio visible antes de ejecutar" },
              { num: "1",    label: "Paso para cubrir cualquier posición" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col px-10 py-12"
                style={{ borderRight: i < 2 ? "1px solid #e5e7eb" : undefined }}
              >
                <span
                  className="font-light tracking-[-0.04em] text-[#0f1923] mb-2"
                  style={{ fontSize: "clamp(42px, 5vw, 56px)" }}
                >
                  {s.num}
                </span>
                <span className="text-xs tracking-widest uppercase text-gray-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 py-28 max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-16">
            Cómo funciona
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {features.map((f) => (
              <div key={f.num}>
                <p className="text-xs text-[#0d9488] font-medium mb-4">{f.num}</p>
                <h3 className="text-base font-semibold text-[#0f1923] mb-3">{f.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PILLARS */}
        <section className="bg-[#0f1923] px-6 py-28">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-16">
              Nuestros pilares
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="border border-white/10 p-8"
                >
                  <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="px-6 py-32 max-w-4xl mx-auto">
          <p
            className="font-light leading-relaxed tracking-[-0.01em] text-[#4a5568]"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
          >
            Los mercados financieros no deberían ser complicados a propósito.
            La complejidad no es sofisticación —{" "}
            <span className="text-[#0f1923] font-normal">
              es una excusa para cobrar más y responsabilizarte menos.
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-8">— El equipo fundador</p>
        </section>

        {/* FINAL CTA */}
        <section
          id="acceso"
          className="bg-[#f0fdfa] border-t border-[#ccfbf1] px-6 py-28 text-center"
        >
          <h2
            className="font-semibold tracking-[-0.02em] text-[#0f1923] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Sé de los primeros en acceder.
          </h2>
          <p className="text-sm text-[#6b7280] mb-12 max-w-md mx-auto">
            Abrimos plazas de forma gradual, por orden de lista.
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="flex flex-wrap items-center justify-between gap-4 px-8 py-6 border-t border-gray-100">
        <span className="text-xs tracking-widest uppercase text-gray-400">ApexTrade</span>
        <p className="text-xs text-gray-400">
          © 2026 · Producto en desarrollo. Invertir implica riesgo de pérdida de capital.
        </p>
      </footer>
    </>
  );
}
