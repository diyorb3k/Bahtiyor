import Link from "next/link";
import { locales, localeNames, type Dictionary, type Locale } from "@/lib/dictionaries";
import { site } from "@/lib/site";

export function Header({ lang, d }: { lang: Locale; d: Dictionary }) {
  const links = [
    { href: "#about", label: d.nav.about },
    { href: "#services", label: d.nav.services },
    { href: "#contact", label: d.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="glass mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full pl-3 pr-3 shadow-2xl shadow-black/40 sm:pl-4">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-champagne to-gold-deep text-sm font-bold text-night">
            BN
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">Dr. Bakhtiyor</span>
            <span className="block text-[11px] text-white/50">{d.footer.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/65 transition hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full bg-white/5 p-1 text-xs">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                scroll={false}
                hrefLang={l}
                title={localeNames[l]}
                aria-current={l === lang ? "page" : undefined}
                className={`rounded-full px-2.5 py-1.5 font-semibold transition ${
                  l === lang ? "bg-gold text-night" : "text-white/60 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-gold sm:inline-block"
          >
            {d.nav.book}
          </a>
        </div>
      </div>
    </header>
  );
}
