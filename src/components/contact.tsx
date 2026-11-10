import type { Dictionary, Locale } from "@/lib/dictionaries";
import type { Extra } from "@/lib/extra";
import { site } from "@/lib/site";
import { BookingForm } from "@/components/booking-form";

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export function Contact({ lang, d, e }: { lang: Locale; d: Dictionary; e: Extra }) {
  const c = d.contact;
  return (
    <section id="contact" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{c.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{c.title}</h2>
          <p className="mt-5 text-white/55">{c.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm lang={lang} d={d} e={e} />
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Quick contact */}
            <div className="grid gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:brightness-110"
              >
                {c.whatsapp} <span>→</span>
              </a>
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-[#229ED9] px-6 py-4 font-semibold text-white transition hover:brightness-110"
              >
                {c.telegram} <span>→</span>
              </a>
            </div>

            {/* Clinic card */}
            <div className="rounded-3xl border border-white/10 bg-surface p-7 sm:p-8">
              <h3 className="text-lg font-semibold text-white">{c.clinicTitle}</h3>
              <p className="mt-1 text-sm text-gold">{c.clinicName}</p>

              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-4">
                  <Icon d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
                  <div>
                    <p className="text-white/40">{c.addressLabel}</p>
                    <p className="mt-0.5 text-white/90">{c.address}</p>
                    <p className="mt-0.5 text-white/50">{c.landmark}</p>
                    <a
                      href={site.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-gold underline-offset-4 hover:underline"
                    >
                      {c.mapCta} →
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Icon d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                  <div>
                    <p className="text-white/40">{c.phonesLabel}</p>
                    {site.clinicPhones.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className="mt-0.5 block text-white/90 hover:text-gold">
                        {p.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Icon d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
                  <div>
                    <p className="text-white/40">{c.hoursLabel}</p>
                    <p className="mt-0.5 text-white/90">{c.hours}</p>
                    <p className="mt-0.5 text-white/50">{c.hoursNote}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
