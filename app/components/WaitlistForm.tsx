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
      <p className="text-sm" style={{ color: "#555" }}>
        Apuntado.{" "}
        <span style={{ color: "#f0f0f0" }}>Te avisaremos cuando abramos acceso.</span>
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div
        className="form-row flex items-center border transition-colors"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@ejemplo.com"
          required
          className="flex-1 bg-transparent px-4 py-3 text-sm outline-none min-w-0"
          style={{ color: "#f0f0f0" }}
        />
        <button
          type="submit"
          className="shrink-0 px-5 py-3 text-xs tracking-widest uppercase transition-opacity hover:opacity-70 cursor-pointer"
          style={{
            background: "#f0f0f0",
            color: "#0c0c0d",
            fontWeight: 500,
          }}
        >
          Reservar
        </button>
      </div>
      {variant === "hero" && (
        <p className="text-xs mt-3 text-center" style={{ color: "#333" }}>
          Sin spam. Cancelación inmediata.
        </p>
      )}
    </form>
  );
}
