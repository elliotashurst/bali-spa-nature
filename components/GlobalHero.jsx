// components/GlobalHero.jsx
"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

/**
 * Shorter hero for internal pages (portfolio, wholesale, etc.)
 * Props:
 *  - title (string)
 *  - subtitle (string, optional)
 *  - cta (object) optional { label, href }
 */
export default function GlobalHero({ title, subtitle, cta }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // quick appear: keep small delay to avoid double flash with page transitions
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 700ms ease, transform 700ms ease";
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center h-[40vh] flex items-center pt-[120px]"

      style={{
  backgroundImage:
    "linear-gradient(rgba(245,243,239,0.6), rgba(232,228,218,0.5)), url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1920&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  paddingTop: "5.5rem"
}}


    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-left md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-olive">{title}</h2>
          {subtitle && (
            <p className="text-text-light mt-2 max-w-2xl">{subtitle}</p>
          )}

          <div className="mt-4">
            {(cta && (
              <Link
                href={cta.href}
                className="inline-block bg-olive text-white px-5 py-2 rounded-full font-semibold shadow"
              >
                {cta.label}
              </Link>
            )) || (
              <Link
                href="/contact"
                className="inline-block bg-olive text-white px-5 py-2 rounded-full font-semibold shadow"
              >
                Request a Quote
              </Link>
            )}
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 z-0" style={{ background: "linear-gradient(rgba(255,255,255,0.14), rgba(255,255,255,0.14))" }} />
    </section>
  );
}
