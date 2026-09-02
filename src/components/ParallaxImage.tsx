"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ParallaxImage({
  src,
  alt,
  className,
  strength = 60,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          gsap.fromTo(
            img,
            { yPercent: -strength / 10 },
            {
              yPercent: strength / 10,
              ease: "none",
              scrollTrigger: {
                trigger: wrap,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      } catch {
        // no JS animation: image sits static, still fully visible
      }
    })();

    return () => ctx?.revert();
  }, [strength]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className ?? ""}`}>
      <div ref={imgRef} className="absolute inset-[-8%]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      </div>
    </div>
  );
}
