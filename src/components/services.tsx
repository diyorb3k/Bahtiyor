import type { Dictionary } from "@/lib/dictionaries";

// Bento layout: the first card spans two columns on large screens for visual rhythm.
const spans = [
  "lg:col-span-2",
  "",
  "",
  "",
  "",
  "",
  "lg:col-span-2",
];

export function Services({ d }: { d: Dictionary }) {
  return (
    <section id="services" className="relative overflow-x-clip scroll-mt-24 py-16 sm:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{d.services.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{d.services.title}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">{d.services.subtitle}</p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.services.items.map((item, i) => (
            <li
              key={item.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 transition duration-500 hover:-translate-y-1 hover:border-gold/40 ${spans[i] ?? ""}`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/0 blur-3xl transition duration-500 group-hover:bg-gold/20" />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-sm font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/25 transition group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
