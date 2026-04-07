"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  plantImage,
}) {
  return (
    <section className="full-bleed relative overflow-hidden pt-36 pb-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={plantImage || "/hero-rice.jpg"}
          alt="Bali rice fields"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,transparent,rgba(0,0,0,0.55))]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h1 className="reveal-up reveal-delay-1 whitespace-pre-line text-4xl md:text-6xl font-semibold tracking-tight text-white/95 drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
          {title}
        </h1>

        {subtitle ? (
          <p className="reveal-up reveal-delay-2 mt-6 mx-auto max-w-2xl text-lg text-white/80 leading-relaxed">
            {subtitle}
          </p>
        ) : null}

        {(ctaPrimary || ctaSecondary) ? (
          <div className="reveal-up reveal-delay-3 mt-12 flex flex-wrap justify-center gap-4">
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
