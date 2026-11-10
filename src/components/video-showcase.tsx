import type { Dictionary } from "@/lib/dictionaries";
import { VideoGroup } from "@/components/video-group";

const videos = [
  { src: "/videos/video-1.mp4", poster: "/videos/video-1-poster.webp" },
  { src: "/videos/video-2.mp4", poster: "/videos/video-2-poster.webp" },
  { src: "/videos/video-3.mp4", poster: "/videos/video-3-poster.webp" },
];

export function VideoShowcase({ d }: { d: Dictionary }) {
  return (
    <section id="videos" className="relative overflow-x-clip scroll-mt-24 py-16 sm:py-24">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{d.videos.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{d.videos.title}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">{d.videos.subtitle}</p>
        </div>

        <VideoGroup items={videos} label={d.videos.title} />
      </div>
    </section>
  );
}
