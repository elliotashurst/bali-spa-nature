"use client";

import Link from "next/link";

export default function MiniHero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  align = "center",
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--page-bg)] pt-36 pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-black/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
      </div>

      <div
        className={`relative mx-auto px-6 ${
          align === "center" ? "max-w-5xl text-center" : "max-w-6xl"
        }`}
      >
        <h1 className="reveal-up reveal-delay-1 text-3xl md:text-4xl font-semibold tracking-tight text-olive">
          {title}
        </h1>

        {subtitle ? (
          <p className="reveal-up reveal-delay-2 mt-4 text-lg text-text-light leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        ) : null}

        {(ctaPrimary || ctaSecondary) ? (
          <div className="reveal-up reveal-delay-3 mt-10 flex flex-wrap justify-center gap-4">
            {ctaPrimary ? (
              <Link href={ctaPrimary.href} className="btn-primary">
                {ctaPrimary.label}
              </Link>
            ) : null}
            {ctaSecondary ? (
              <Link href={ctaSecondary.href} className="btn-secondary">
                {ctaSecondary.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
