"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import type { Extra } from "@/lib/extra";
import { site } from "@/lib/site";
import { Select } from "@/components/select";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-2xl border border-white/10 bg-night/60 px-5 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-gold/60 focus:ring-4 focus:ring-gold/10";

export function BookingForm({ lang, d, e }: { lang: Locale; d: Dictionary; e: Extra }) {
  const f = e.form;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [channel, setChannel] = useState<"whatsapp" | "telegram" | "call">("whatsapp");
  const [fields, setFields] = useState({ name: "", phone: "", service: "", message: "", consent: false, website: "" });

  const set = (k: keyof typeof fields) => (v: string | boolean) => setFields((s) => ({ ...s, [k]: v }));

  function whatsappLink() {
    const text = [
      `${f.name}: ${fields.name}`,
      `${f.phone}: ${fields.phone}`,
      fields.service && `${f.service}: ${fields.service}`,
      fields.message && `${f.message}: ${fields.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setError("");

    if (!fields.name.trim() || !fields.phone.trim()) return setError(f.required);
    if (fields.phone.replace(/\D/g, "").length < 9) return setError(f.phoneInvalid);
    if (!fields.consent) return setError(f.consent);

    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          channel: f[channel === "whatsapp" ? "channelWa" : channel === "telegram" ? "channelTg" : "channelCall"],
          lang,
        }),
      });
      if (res.ok) return setStatus("success");
      // Not configured or upstream down: send the request through WhatsApp instead
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
      setStatus("error");
      setError(f.errorText);
    } catch {
      window.open(whatsappLink(), "_blank", "noopener,noreferrer");
      setStatus("error");
      setError(f.errorText);
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gold/30 bg-gold/5 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-champagne to-gold-deep text-2xl text-night">
          ✓
        </span>
        <h3 className="mt-6 text-2xl font-semibold text-white">{f.successTitle}</h3>
        <p className="mt-3 text-white/60">{f.successText}</p>
        <button
          type="button"
          onClick={() => {
            setFields({ name: "", phone: "", service: "", message: "", consent: false, website: "" });
            setStatus("idle");
          }}
          className="mt-8 text-sm text-gold underline-offset-4 hover:underline"
        >
          {f.another}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass relative rounded-3xl p-6 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{f.eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{f.title}</h3>
      <p className="mt-2 text-sm text-white/55">{f.subtitle}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">{f.name}</span>
          <input
            className={field}
            value={fields.name}
            onChange={(ev) => set("name")(ev.target.value)}
            placeholder={f.namePh}
            autoComplete="name"
            maxLength={80}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">{f.phone}</span>
          <input
            className={field}
            value={fields.phone}
            onChange={(ev) => set("phone")(ev.target.value)}
            placeholder="+998 __ ___ __ __"
            inputMode="tel"
            autoComplete="tel"
            maxLength={24}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-medium text-white/60">{f.service}</span>
          <Select
            name="service"
            label={f.service}
            value={fields.service}
            onChange={(v) => set("service")(v)}
            placeholder={f.serviceAny}
            options={d.services.items.map((s) => ({ value: s.title, label: s.title }))}
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-xs font-medium text-white/60">{f.channel}</legend>
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              ["whatsapp", f.channelWa],
              ["telegram", f.channelTg],
              ["call", f.channelCall],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className={`cursor-pointer rounded-2xl border px-1 py-3 text-center text-xs font-medium whitespace-nowrap min-[360px]:px-3 min-[360px]:text-sm transition ${
                channel === value
                  ? "border-gold bg-gold text-night"
                  : "border-white/10 text-white/70 hover:border-white/30"
              }`}
            >
              <input
                type="radio"
                name="channel"
                value={value}
                checked={channel === value}
                onChange={() => setChannel(value)}
                className="sr-only"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className="mb-2 block text-xs font-medium text-white/60">{f.message}</span>
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={fields.message}
          onChange={(ev) => set("message")(ev.target.value)}
          placeholder={f.messagePh}
          maxLength={1000}
        />
      </label>

      {/* Honeypot: hidden from people, bots fill it */}
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={fields.website}
        onChange={(ev) => set("website")(ev.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-white/55">
        <input
          type="checkbox"
          checked={fields.consent}
          onChange={(ev) => set("consent")(ev.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#d6b77a]"
        />
        <span>{f.consent}</span>
      </label>

      {error && (
        <p role="alert" className="mt-5 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
          {status === "error" && (
            <>
              {" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline">
                WhatsApp →
              </a>
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-champagne via-gold to-gold-deep px-6 py-4 text-sm font-semibold text-night shadow-[0_10px_40px_-12px_rgba(214,183,122,0.7)] transition hover:scale-[1.01] disabled:opacity-60"
      >
        {status === "sending" ? f.sending : f.submit}
        {status !== "sending" && <span className="transition group-hover:translate-x-1">→</span>}
      </button>

      <p className="mt-5 text-center text-xs text-white/40">
        {f.fallbackNote}{" "}
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
          {site.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
