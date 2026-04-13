import Image from "next/image";

export default function ProductPreview() {
  return (
    <section className="py-28 px-6 bg-[#0c0b12] border-y border-white/[0.04] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-6">
          Vista previa
        </p>
        <h2
          className="font-semibold tracking-[-0.02em] text-white mb-20 max-w-lg"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          Todo lo que necesitas, en una sola pantalla.
        </h2>
      </div>

      {/* Perspective wrapper */}
      <div className="relative max-w-6xl mx-auto" style={{ perspective: "1200px" }}>

        {/* Glow behind */}
        <div
          className="absolute inset-x-[10%] top-[5%] h-[60%] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Screenshot card with 3D tilt */}
        <div
          className="relative rounded-2xl border border-white/[0.08] overflow-hidden"
          style={{
            transform: "rotateX(6deg) scale(0.97)",
            transformOrigin: "center top",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 bg-[#111] border-b border-white/[0.06]">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
            <span className="ml-4 text-[11px] text-white/20 tracking-widest">apextrade.app</span>
          </div>

          <Image
            src="/CapAplicacion.png"
            alt="Vista previa de la aplicación ApexTrade"
            width={1920}
            height={1080}
            className="w-full h-auto block"
            priority
          />

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-1/3 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #0c0b12)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
