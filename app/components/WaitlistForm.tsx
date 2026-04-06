"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
}

export default function WaitlistForm({ variant = "cta" }: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);

    // TODO: replace with real API call
    // fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }), headers: { 'Content-Type': 'application/json' } })
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-[#0d9488] flex items-center justify-center text-white text-xs">
          ✓
        </div>
        <p className="text-sm text-[#4a5568]">
          Apuntado. <span className="text-[#0f1923] font-medium">Te avisaremos cuando abramos acceso.</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div
        className="form-row flex items-center border border-gray-200 bg-white transition-all"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@ejemplo.com"
          required
          className="flex-1 px-4 py-3 text-sm outline-none bg-transparent text-[#0f1923] placeholder-gray-400 min-w-0"
        />
        <button
          type="submit"
          className="shrink-0 px-5 py-3 text-xs font-medium tracking-widest uppercase bg-[#0d9488] text-white hover:bg-[#0f766e] transition-colors cursor-pointer"
        >
          Reservar
        </button>
      </div>
      {variant === "hero" && (
        <p className="text-xs text-gray-400 mt-3">
          Sin spam. Cancelación inmediata.
        </p>
      )}
    </form>
  );
}
