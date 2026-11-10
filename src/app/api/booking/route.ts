import { NextResponse } from "next/server";


type Payload = {
  name?: string;
  phone?: string;
  service?: string;
  channel?: string;
  message?: string;
  consent?: boolean;
  website?: string; // honeypot — real users never fill this
  lang?: string;
};

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot: pretend success for bots
  if (body.website) return NextResponse.json({ ok: true });

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 24);
  const service = clean(body.service, 80);
  const channel = clean(body.channel, 20);
  const message = clean(body.message, 1000);
  const lang = clean(body.lang, 4);

  const phoneDigits = phone.replace(/\D/g, "");
  if (!name || phoneDigits.length < 9 || phoneDigits.length > 15 || body.consent !== true) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    // Not configured yet — client falls back to WhatsApp prefilled message
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const text = [
    "🆕 Yangi so'rov / New request",
    `👤 Ism: ${name}`,
    `📞 Telefon: ${phone}`,
    service && `🩺 Yo'nalish: ${service}`,
    channel && `💬 Aloqa: ${channel}`,
    message && `📝 Izoh: ${message}`,
    lang && `🌐 Til: ${lang}`,
    `🕒 ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`telegram ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
