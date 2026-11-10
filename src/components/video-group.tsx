"use client";

import { useRef } from "react";

type Item = { src: string; poster: string };

// Only one video plays at a time: starting one pauses (and mutes-by-stopping) the others.
export function VideoGroup({ items, label }: { items: Item[]; label: string }) {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  const onPlay = (index: number) => {
    refs.current.forEach((v, i) => {
      if (v && i !== index && !v.paused) v.pause();
    });
  };

  return (
    <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((v, i) => (
        <li
          key={v.src}
          className="group relative mx-auto w-full max-w-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-2xl shadow-black/60 transition duration-500 hover:-translate-y-1 hover:border-gold/40"
        >
          <video
            ref={(el) => {
              refs.current[i] = el;
            }}
            src={v.src}
            poster={v.poster}
            controls
            playsInline
            preload="none"
            onPlay={() => onPlay(i)}
            aria-label={`${label} ${i + 1}`}
            className="aspect-[9/16] w-full object-cover"
          />
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-night/70 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
            {String(i + 1).padStart(2, "0")}
          </span>
        </li>
      ))}
    </ul>
  );
}
