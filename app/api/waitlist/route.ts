import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? ""; // tu email para recibir notificaciones
const FROM_EMAIL = process.env.FROM_EMAIL ?? "waitlist@wrap.app"; // dominio verificado en Resend

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // 1. Correo de confirmación al usuario
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Ya estás en la lista de Wrap 🎉",
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;color:#0f172a">
          <img src="https://wrap.app/logo.png" alt="Wrap" style="height:28px;margin-bottom:24px" />
          <h1 style="font-size:24px;font-weight:600;margin:0 0 12px">Estás dentro.</h1>
          <p style="color:#475569;line-height:1.6;margin:0 0 24px">
            Hemos guardado tu plaza en la lista de acceso anticipado a Wrap.<br/>
            Te avisaremos en cuanto abramos las primeras plazas.
          </p>
          <p style="color:#94a3b8;font-size:13px;margin:0">
            — El equipo de Wrap
          </p>
        </div>
      `,
    });

    // 2. Notificación interna
    if (NOTIFY_EMAIL) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        subject: `Nueva plaza en waitlist: ${email}`,
        html: `<p>Nuevo registro en la waitlist: <strong>${email}</strong></p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
