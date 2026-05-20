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
      {/* Background Image + Overlay Layers */}
      <div className="absolute inset-0 z-0">
        <Image
          src={plantImage || "/hero-rice.jpg"}
          alt="Bali Spa Nature formulation and manufacturing"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover"
        />

        {/* Main cinematic overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/25 to-black/10" />

        {/* Additional nav/logo readability layer */}
        <div className="absolute left-0 top-0 z-[2] h-44 w-full bg-gradient-to-b from-black/55 via-black/25 to-transparent" />

        {/* Gentle lower depth layer */}
        <div className="absolute inset-0 z-[3] bg-[radial-gradient(80%_60%_at_50%_20%,transparent,rgba(0,0,0,0.42))]" />
      </div>

      {/* Content */}
      <div className="relative z-[5] mx-auto max-w-6xl px-6 text-center">
        <h1 className="reveal-up reveal-delay-1 whitespace-pre-line text-4xl font-semibold tracking-tight text-white/95 drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] md:text-6xl">
          {title}
        </h1>

        {subtitle ? (
          <p className="reveal-up reveal-delay-2 mx-auto mt-6 max-w-3xl whitespace-pre-line text-lg leading-8 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]">
  {subtitle}
</p>
        ) : null}

        {ctaPrimary || ctaSecondary ? (
          <>
            <div className="reveal-up reveal-delay-3 mt-12 flex flex-wrap justify-center gap-4">
              {ctaPrimary ? (
                <Link href={ctaPrimary.href} className="btn-primary">
                  {ctaPrimary.label}
                </Link>
              ) : null}

              {ctaSecondary ? (
                <Link href={ctaSecondary.href} className="btn-secondary-light">
                  {ctaSecondary.label}
                </Link>
              ) : null}
            </div>

            <p className="reveal-up reveal-delay-4 mt-5 text-sm leading-6 text-white/68">
              For hospitality and wellness operators only
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
}