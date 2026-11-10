"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

// Loads the looping hero clip only on tablet/desktop, so phones don't download it.
export function HeroVideo() {
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!wide) return null;

  return (
    <video
      src="/videos/hero-loop.mp4"
      poster="/videos/video-1-poster.webp"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={site.name}
      className="aspect-[9/16] w-full object-cover"
    />
  );
}
