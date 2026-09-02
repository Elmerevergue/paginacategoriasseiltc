"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {
      // autoplay blocked: poster frame / azul background still shows
    });
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      poster="/fotos/subestacion-instalacion.jpg"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
