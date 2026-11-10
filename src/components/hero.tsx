import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { site } from "@/lib/site";
import { HeroVideo } from "@/components/hero-video";

export function Hero({ d }: { lang: Locale; d: Dictionary }) {
  const services = d.services.items.map((s) => s.title);
  const marquee = [...services, ...services];

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="animate-drift pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-gold/15 blur-[130px]" />
      <div className="animate-drift pointer-events-none absolute -right-32 top-40 h-[380px] w-[380px] rounded-full bg-champagne/10 blur-[110px] [animation-delay:-5s]" />
      <div className="animate-drift pointer-events-none absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-gold-deep/20 blur-[110px] [animation-delay:-9s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-12 lg:pb-28">
        <div className="animate-fade-up lg:col-span-7">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-champagne">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_#d6b77a]" />
            {d.hero.badge}
          </span>

          <h1 className="mt-7 text-[2.2rem] min-[360px]:text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {d.hero.titleStart}{" "}
            <span className="text-gold-gradient italic">{d.hero.titleAccent}</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">{d.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-champagne via-gold to-gold-deep px-7 py-4 text-sm font-semibold text-night shadow-[0_10px_40px_-10px_rgba(214,183,122,0.6)] transition hover:scale-[1.02]"
            >
              {d.hero.ctaPrimary}
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="glass rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {d.hero.ctaSecondary}
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-3 border-t sm:gap-6 border-white/10 pt-8">
            {d.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-lg font-semibold text-gold min-[360px]:text-2xl sm:text-3xl">{s.value}</dd>
                <p className="mt-1 text-xs leading-snug text-white/50">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="absolute inset-x-8 -bottom-6 top-10 rounded-[3rem] bg-linear-to-b from-gold/30 to-transparent blur-3xl" />
          <div className="arch relative aspect-[4/5] overflow-hidden border border-white/10 bg-surface shadow-2xl shadow-black/60">
            <Image
              src={site.images.portrait}
              alt={site.name}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 440px"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-night to-transparent" />
          </div>

          <div className="animate-float absolute -left-6 bottom-12 hidden w-40 rotate-[-4deg] overflow-hidden rounded-[1.75rem] border border-white/15 bg-night shadow-2xl shadow-black/70 sm:block">
            <HeroVideo />
          </div>

          <div className="absolute -right-4 top-10 hidden rounded-2xl border border-white/10 bg-night/80 px-5 py-4 shadow-xl backdrop-blur-md sm:block">
            <p className="text-xs text-white/50">MD · PhD</p>
            <p className="mt-1 text-sm font-semibold text-white">Seoul National University</p>
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-surface/60 py-5">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {marquee.map((s, i) => (
            <span key={i} className="flex items-center gap-12 text-sm uppercase tracking-[0.25em] text-white/40">
              {s}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
