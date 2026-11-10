import { site } from "@/lib/site";

export function FloatingButtons({ label }: { label: string }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden flex-col items-end gap-2.5 lg:flex">
      <a
        href={site.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Telegram — ${label}`}
        className="rounded-full bg-[#229ED9] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-black/40 transition hover:scale-105"
      >
        Telegram
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp — ${label}`}
        className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-black/40 transition hover:scale-105"
      >
        WhatsApp
      </a>
    </div>
  );
}
