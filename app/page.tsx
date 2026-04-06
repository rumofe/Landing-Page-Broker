import WaitlistForm from "./components/WaitlistForm";

const features = [
  {
    num: "01",
    title: "Transparencia total antes de ejecutar",
    body: "Ves exactamente cuánto ganas, cuánto arriesgas y cuándo — antes de confirmar cualquier operación. Sin fórmulas, sin tablas confusas.",
  },
  {
    num: "02",
    title: "Cobertura en un paso",
    body: "Asegura cualquier posición de forma inmediata. El sistema calcula la cobertura óptima y te muestra el coste real antes de ejecutar.",
  },
  {
    num: "03",
    title: "Sin costes ocultos",
    body: "Sin spreads escondidos. Sin tarifas de inactividad. El precio que ves en pantalla es exactamente lo que pagas.",
  },
  {
    num: "04",
    title: "Diseñado para ser usado",
    body: "Una interfaz que funciona en segundos, con la profundidad que un inversor serio necesita cuando la necesita.",
  },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: "#f0f0f0" }}>
          ApexTrade
        </span>
        <a
          href="#acceso"
          className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
          style={{ color: "#a0a0a0" }}
        >
          Acceso anticipado
        </a>
      </nav>

      <main>

        {/* HERO */}
        <section
          id="acceso"
          className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-24"
        >
          <p className="text-xs tracking-[0.25em] uppercase mb-10" style={{ color: "#555" }}>
            Lista de espera · 2026
          </p>

          <h1
            className="font-semibold leading-[1.1] tracking-[-0.02em] mb-8 max-w-2xl"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#f0f0f0" }}
          >
            Invierte con claridad.<br />Protege con confianza.
          </h1>

          <p
            className="max-w-md mb-14 leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.8vw, 17px)", color: "#666" }}
          >
            Un broker construido sobre un principio: que cada decisión
            financiera debe tomarse con información completa. Sin letra pequeña,
            sin sorpresas.
          </p>

          <WaitlistForm variant="hero" />
        </section>

        {/* DIVIDER */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

        {/* STATS */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0">
            {[
              { num: "0%",    label: "Comisiones ocultas" },
              { num: "100%",  label: "Precio visible antes de ejecutar" },
              { num: "1",     label: "Paso para cubrir cualquier posición" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center py-10 px-8"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                }}
              >
                <span
                  className="font-light tracking-[-0.04em] mb-3"
                  style={{ fontSize: "clamp(40px, 5vw, 56px)", color: "#f0f0f0" }}
                >
                  {s.num}
                </span>
                <span className="text-xs tracking-widest uppercase" style={{ color: "#444" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

        {/* FEATURES */}
        <section className="py-28 px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase mb-20" style={{ color: "#444" }}>
            Principios
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
            {features.map((f) => (
              <div key={f.num}>
                <p className="text-xs mb-5" style={{ color: "#333" }}>{f.num}</p>
                <h3 className="text-base font-medium mb-3" style={{ color: "#f0f0f0" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

        {/* STATEMENT */}
        <section className="py-32 px-6 max-w-3xl mx-auto">
          <p
            className="font-light leading-relaxed tracking-[-0.01em]"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "#777" }}
          >
            Los mercados financieros no deberían ser complicados a propósito.
            La complejidad no es sofisticación —{" "}
            <span style={{ color: "#f0f0f0" }}>
              es una excusa para cobrar más y responsabilizarte menos.
            </span>
          </p>
        </section>

        {/* DIVIDER */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

        {/* FINAL CTA */}
        <section className="py-32 px-6 text-center">
          <h2
            className="font-semibold tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#f0f0f0" }}
          >
            Acceso por orden de lista.
          </h2>
          <p className="text-sm mb-12" style={{ color: "#555" }}>
            Abrimos plazas de forma gradual. Apúntate ahora para ser de los primeros.
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer
        className="flex flex-wrap items-center justify-between gap-4 px-10 py-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#333" }}>
          ApexTrade
        </span>
        <p className="text-xs" style={{ color: "#333" }}>
          © 2026 · Producto en desarrollo. Invertir implica riesgo de pérdida de capital.
        </p>
      </footer>
    </>
  );
}
