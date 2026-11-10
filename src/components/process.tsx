import type { Extra } from "@/lib/extra";

export function Process({ e }: { e: Extra }) {
  const p = e.process;
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{p.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{p.title}</h2>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-transparent via-gold/50 to-transparent md:block" />
          {p.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-night text-sm font-semibold text-gold shadow-[0_0_30px_-5px_rgba(214,183,122,0.5)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
