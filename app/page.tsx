import WaitlistForm from "./components/WaitlistForm";
import SpotlightCard from "./components/SpotlightCard";
import GradientText from "./components/GradientText";
import Marquee from "./components/Marquee";
import Comparison from "./components/Comparison";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Security from "./components/Security";
import HeroBackground from "./components/HeroBackground";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    title: "Transparencia total",
    body: "Ves cuánto ganas y cuánto arriesgas antes de confirmar. Sin sorpresas, sin letra pequeña.",
    stat: "0%",
    statLabel: "comisiones ocultas",
  },
  {
    title: "Cobertura en un clic",
    body: "Asegura cualquier posición al instante. El sistema calcula la cobertura óptima y te muestra el coste real.",
    stat: "1 clic",
    statLabel: "para cubrir posiciones",
  },
  {
    title: "Diseñado para ti",
    body: "Una interfaz que funciona en segundos, con la profundidad que un inversor serio necesita.",
    stat: "100%",
    statLabel: "de la información, visible",
  },
];

const steps = [
  {
    num: "01",
    title: "Elige tu posición",
    body: "Busca cualquier activo. Decide tu dirección. Sin formularios, sin pasos innecesarios.",
  },
  {
    num: "02",
    title: "Visualiza tu riesgo",
    body: "Antes de confirmar: ganancia máxima, pérdida máxima y punto de equilibrio. Todo en una pantalla.",
  },
  {
    num: "03",
    title: "Ejecuta y protege",
    body: "Confirma y, si quieres, cubre tu posición al instante con la cobertura óptima.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── NAV ───────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-12 py-4 backdrop-blur-xl bg-white/90 border-b border-sky-100">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Wrap" className="h-7 w-auto object-contain" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0c4a6e]">
            Wrap
          </span>
        </div>
        <a
          href="#acceso"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase border border-sky-200 text-sky-700 hover:bg-sky-50 transition-all"
        >
          Acceso anticipado
        </a>
      </nav>

      <main>
        {/* ── HERO  (ColorBends · deep sky blue base) ───────────── */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 60%, #0284c7 100%)" }}
        >
          <div className="absolute inset-0 z-0">
            <HeroBackground />
          </div>

          <div className="relative z-10 px-6 pt-28 pb-20 max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-8 text-white/50">
              Acceso anticipado · 2026
            </p>

            <h1
              className="font-semibold leading-[1.08] tracking-[-0.03em] mb-6 text-white"
              style={{ fontSize: "clamp(38px, 6vw, 72px)" }}
            >
              Invierte con claridad.
              <br />
              <GradientText
                colors={["#ffffff", "#bae6fd", "#38bdf8", "#ffffff"]}
                animationSpeed={5}
                className="font-semibold leading-[1.08] tracking-[-0.03em]"
              >
                Protege con confianza.
              </GradientText>
            </h1>

            <p
              className="max-w-lg mx-auto mb-10 leading-relaxed text-white/65"
              style={{ fontSize: "clamp(15px, 1.8vw, 17px)" }}
            >
              Un broker donde cada decisión se toma con información completa.
              Sin comisiones ocultas, sin jerga innecesaria, sin letra pequeña.
            </p>

            <div id="acceso" className="flex justify-center">
              <WaitlistForm variant="hero" />
            </div>
          </div>
        </section>

        {/* ── MARQUEE ───────────────────────────────────────────── */}
        <Marquee />

        {/* ── STATS ─────────────────────────────────────────────── */}
        <section className="border-b border-sky-100 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-sky-100">
            {[
              { num: "0%", label: "Comisiones ocultas" },
              { num: "100%", label: "Precio visible antes de operar" },
              { num: "<1s", label: "Para cubrir cualquier posición" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center py-12 px-8">
                <span
                  className="font-light tracking-[-0.04em] text-sky-500 mb-2"
                  style={{ fontSize: "clamp(38px, 5vw, 52px)" }}
                >
                  {s.num}
                </span>
                <span className="text-[11px] tracking-[0.15em] uppercase text-slate-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-sky-50 border-b border-sky-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase text-sky-500 mb-4">
              Por qué somos diferentes
            </p>
            <h2
              className="font-semibold tracking-[-0.02em] text-[#0c4a6e] mb-14 max-w-xl"
              style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
            >
              Diseñado para que entiendas exactamente lo que pasa con tu dinero.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {features.map((f) => (
                <SpotlightCard
                  key={f.title}
                  className="rounded-2xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm"
                  spotlightColor="rgba(14, 165, 233, 0.1)"
                >
                  <span className="block text-3xl font-light text-sky-500 mb-1 tracking-tight">
                    {f.stat}
                  </span>
                  <span className="block text-[10px] tracking-[0.15em] uppercase text-slate-300 mb-6">
                    {f.statLabel}
                  </span>
                  <h3 className="text-base font-medium text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{f.body}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT PREVIEW  (CSS blobs · white) ─────────────── */}
        <section className="relative py-20 px-6 bg-white border-b border-sky-100 overflow-hidden">
          {/* CSS animated blobs */}
          <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
            <div style={{
              position: "absolute", width: "600px", height: "600px",
              borderRadius: "50%", filter: "blur(80px)", opacity: 0.18,
              background: "radial-gradient(circle, #38bdf8, #0ea5e9)",
              top: "-100px", left: "-150px",
              animation: "blob1 12s ease-in-out infinite",
            }} />
            <div style={{
              position: "absolute", width: "500px", height: "500px",
              borderRadius: "50%", filter: "blur(80px)", opacity: 0.14,
              background: "radial-gradient(circle, #bae6fd, #7dd3fc)",
              bottom: "-80px", right: "-100px",
              animation: "blob2 15s ease-in-out infinite",
            }} />
            <div style={{
              position: "absolute", width: "350px", height: "350px",
              borderRadius: "50%", filter: "blur(60px)", opacity: 0.12,
              background: "radial-gradient(circle, #e0f2fe, #38bdf8)",
              top: "40%", left: "40%",
              animation: "blob3 10s ease-in-out infinite",
            }} />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-sky-500 mb-4">
                  Vista previa
                </p>
                <h2
                  className="font-semibold tracking-[-0.02em] text-[#0c4a6e] mb-6"
                  style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
                >
                  Todo lo que necesitas, en una sola pantalla.
                </h2>
                <div className="space-y-4">
                  {[
                    "Precio visible antes de ejecutar",
                    "Cobertura de posición en 1 clic",
                    "Gráfico riesgo/beneficio en tiempo real",
                    "Sin comisiones ocultas, sin letra pequeña",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M2 5l2 2 4-4"
                            stroke="#0ea5e9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone mockup */}
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    className="relative rounded-[2.5rem] overflow-hidden"
                    style={{
                      maxWidth: "260px",
                      border: "5px solid #1e293b",
                      boxShadow:
                        "0 32px 80px rgba(3, 105, 161, 0.18), 0 0 0 1px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/Screenshot_2026-04-12-20-34-22-892_com.nexusinvest.nexus_invest.png"
                      alt="Vista previa de Wrap en móvil"
                      className="w-full block"
                      style={{ marginTop: "-28px" }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 -z-10 scale-90 blur-3xl opacity-25 rounded-[3rem]"
                    style={{ background: "radial-gradient(ellipse, #38bdf8, transparent)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────── */}
        <section className="py-20 px-6 bg-sky-50 border-b border-sky-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] tracking-[0.3em] uppercase text-sky-500 mb-4">
              Cómo funciona
            </p>
            <h2
              className="font-semibold tracking-[-0.02em] text-[#0c4a6e] mb-14 max-w-lg"
              style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
            >
              De cero a posición protegida en tres pasos.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((step) => (
                <div key={step.num}>
                  <span className="block text-6xl font-bold tracking-tighter text-sky-200 leading-none mb-5">
                    {step.num}
                  </span>
                  <h4 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON  (white) ───────────────────────────────── */}
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
              <Comparison embedded />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS  (sky-50) ────────────────────────────── */}
        <section className="py-20 px-6 bg-sky-50 border-b border-sky-100">
          <Testimonials />
        </section>

        {/* ── MANIFESTO  (deep sky blue) ────────────────────────── */}
        <section
          className="relative py-24 px-6 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #075985 100%)" }}
        >
          <div className="max-w-3xl mx-auto">
            <p
              className="font-light leading-relaxed tracking-[-0.01em] text-white/50"
              style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
            >
              Los mercados no deberían ser complicados a propósito. La
              complejidad no es sofisticación —{" "}
              <span className="text-white font-normal">
                es una excusa para cobrar más y responsabilizarte menos.
              </span>
            </p>
          </div>
        </section>

        {/* ── FAQ  (white) ──────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-b border-sky-100">
          <FAQ />
        </section>

        {/* ── SECURITY  (sky-50) ────────────────────────────────── */}
        <section className="py-20 px-6 bg-sky-50 border-t border-sky-100">
          <Security />
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────── */}
        <section
          className="py-24 px-6 text-center border-t border-sky-200"
          style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 60%, #0284c7 100%)" }}
        >
          <div>
            <h2
              className="font-semibold tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: "clamp(26px, 4vw, 48px)" }}
            >
              Acceso por orden de lista.
            </h2>
            <p className="text-sm text-white/50 mb-10 max-w-sm mx-auto">
              Abrimos plazas de forma gradual. Cuanto antes te apuntes, antes entras.
            </p>
            <div className="flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER  (deep sky blue) ───────────────────────────── */}
      <footer style={{ background: "#0c4a6e" }}>
        <div className="max-w-5xl mx-auto px-8 py-10 flex flex-wrap items-start justify-between gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/logo.png"
                alt="Wrap"
                className="h-6 w-auto object-contain"
                style={{ filter: "invert(1)" }}
              />
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white">
                Wrap
              </span>
            </div>
            <p className="text-xs text-white/30 max-w-xs leading-relaxed">
              El broker que siempre quisiste. Construido con transparencia, para
              inversores que exigen claridad.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-6 text-xs text-white/30">
            <div className="flex flex-col gap-2">
              <span className="text-white/50 uppercase tracking-widest text-[10px] mb-1">Producto</span>
              <span>Cómo funciona</span>
              <span>Seguridad</span>
              <span>FAQ</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/50 uppercase tracking-widest text-[10px] mb-1">Legal</span>
              <span>Aviso legal</span>
              <span>Privacidad</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
        <div
          className="px-8 py-5 max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs text-white/20">© 2026 Wrap · Producto en desarrollo.</p>
          <p className="text-xs text-white/20">Invertir implica riesgo de pérdida de capital.</p>
        </div>
      </footer>
    </>
  );
}
