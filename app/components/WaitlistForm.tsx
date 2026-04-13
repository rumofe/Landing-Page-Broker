"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
}

export default function WaitlistForm({ variant = "cta" }: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Algo ha fallado. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  const isHero = variant === "hero";

  if (submitted) {
    return (
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ background: "#0ea5e9" }}
        >
          ✓
        </div>
        <p className={`text-sm ${isHero ? "text-slate-500" : "text-white/70"}`}>
          Estás dentro.{" "}
          <span className={`font-medium ${isHero ? "text-[#0c4a6e]" : "text-white"}`}>
            Te avisaremos cuando abramos acceso.
          </span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div
        className="form-row flex items-center rounded-full border transition-all"
        style={isHero
          ? { borderColor: "rgba(14,165,233,0.25)", background: "rgba(14,165,233,0.04)" }
          : { borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)" }
        }
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          className={`flex-1 bg-transparent pl-6 pr-2 py-3.5 text-sm outline-none min-w-0 ${isHero ? "text-slate-700 placeholder:text-slate-300" : "text-white placeholder:text-white/30"}`}
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 mr-1.5 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer hover:opacity-85 active:scale-95 disabled:opacity-60"
          style={{ background: "#0ea5e9", color: "#ffffff" }}
        >
          {loading ? "..." : "Reservar plaza"}
        </button>
      </div>
      {error && <p className="text-xs mt-2 text-center text-red-400">{error}</p>}
      {isHero && !error && (
        <p className="text-xs mt-4 text-center text-white/30">
          Sin spam. Sin tarjeta. Cancelación inmediata.
        </p>
      )}
    </form>
  );
}
