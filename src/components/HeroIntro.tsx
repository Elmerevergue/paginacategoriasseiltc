"use client";

import { useEffect, useRef } from "react";

export default function HeroIntro({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const headline = root.querySelector<HTMLElement>("[data-hero='headline']");
    const stat = root.querySelector<HTMLElement>("[data-hero='stat']");
    const copy = root.querySelector<HTMLElement>("[data-hero='copy']");
    const cta = root.querySelector<HTMLElement>("[data-hero='cta']");
    if (!headline || !stat || !copy || !cta) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      try {
        const { gsap } = await import("gsap");

        ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.from(headline, { y: 40, autoAlpha: 0, duration: 0.9 })
            .from(stat, { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.5")
            .from(copy, { y: 16, autoAlpha: 0, duration: 0.6 }, "-=0.5")
            .from(cta, { y: 16, autoAlpha: 0, duration: 0.6 }, "-=0.4");
        });
      } catch {
        // no JS: content is already visible by default, nothing to fix
      }
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
