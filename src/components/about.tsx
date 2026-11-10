import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { site } from "@/lib/site";

export function About({ d }: { d: Dictionary }) {
  return (
    <section id="about" className="relative overflow-x-clip scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full border border-gold/30" />
          <div className="arch relative aspect-[4/5] overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
            <Image
              src={site.images.studio}
              alt={site.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
          <div className="absolute -bottom-6 right-4 max-w-[240px] rounded-2xl border border-white/10 bg-night/95 p-5 shadow-2xl backdrop-blur-md">
            <p className="text-2xl font-semibold text-gold">“</p>
            <p className="mt-1 text-sm leading-relaxed text-white/80">{d.about.lead}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{d.about.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {d.about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60">{d.about.body}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {d.about.highlights.map((h) => (
              <span key={h} className="rounded-full border border-gold/25 bg-gold/5 px-4 py-2 text-xs font-medium text-champagne">
                {h}
              </span>
            ))}
          </div>

          <h3 className="mt-12 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            {d.about.credentialsTitle}
          </h3>
          <ol className="mt-6 space-y-5 border-l border-white/10 pl-6">
            {d.about.credentials.map((c, i) => (
              <li key={c} className="relative text-sm leading-relaxed text-white/75">
                <span className="absolute -left-[31px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-night ring-1 ring-gold/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <span className="mr-2 text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                {c}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
