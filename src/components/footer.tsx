import type { Dictionary } from "@/lib/dictionaries";
import { site } from "@/lib/site";

export function Footer({ d }: { d: Dictionary }) {
  return (
    <footer className="overflow-x-clip border-t border-white/10 bg-surface/40 pb-28 pt-12 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-white/45 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{site.name}</p>
          <p className="mt-1">{d.footer.tagline}</p>
        </div>
        <p>
          © {site.name}. {d.footer.rights}
        </p>
        <a
          href={site.telegramChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold transition hover:text-champagne"
        >
          {d.footer.channel} → @plasticsurgeryuzb
        </a>
      </div>
    </footer>
  );
}
