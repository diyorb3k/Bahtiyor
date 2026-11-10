import type { Extra } from "@/lib/extra";
import { site } from "@/lib/site";

// Sticky bottom bar on small screens: one thumb tap to book.
export function MobileCta({ e }: { e: Extra }) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <div className="glass flex items-center gap-2 rounded-full p-1.5 shadow-2xl shadow-black/60">
        <a
          href={`tel:${site.phone}`}
          aria-label="Call"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg"
        >
          📞
        </a>
        <a
          href="#contact"
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-linear-to-r from-champagne via-gold to-gold-deep text-sm font-semibold text-night"
        >
          {e.mobileCta}
        </a>
      </div>
    </div>
  );
}
