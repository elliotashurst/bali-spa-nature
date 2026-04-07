# create_patched_components.ps1
# Run from project root (where package.json lives).
# Powershell: .\create_patched_components.ps1

# create components directory if missing
$componentsDir = "components"
If (!(Test-Path $componentsDir)) {
  New-Item -ItemType Directory -Path $componentsDir -Force | Out-Null
}

# MiniHero.jsx
$miniHero = @'
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

/**
 * MiniHero - compact hero used on inner pages.
 * Guarded refs prevent flicker and runtime errors if server-rendered markup hasn't hydrated yet.
 * Props:
 *  - title (string)
 *  - subtitle (string)
 *  - cta (object) optional { label, href }
 *  - align ("center" | "left")
 */
export default function MiniHero({
  title = "Page Title",
  subtitle = "",
  cta = null,
  align = "center",
}) {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Guard: ensure elements exist before trying to animate
    const tRef = titleRef.current;
    const sRef = subRef.current;
    const cRef = ctaRef.current;

    if (!tRef) {
      // nothing to animate yet — prevent flicker by setting visible if mounted later
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      tRef,
      { y: 10, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6 }
    );

    if (sRef) {
      tl.fromTo(sRef, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.35");
    }

    if (cRef) {
      tl.fromTo(cRef, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 }, "-=0.4");
    }

    return () => {
      tl.kill();
      // final stable state
      try {
        gsap.set([tRef, sRef, cRef].filter(Boolean), { autoAlpha: 1, y: 0 });
      } catch (e) {
        // ignore if refs became null
      }
    };
  }, [title, subtitle, cta]);

  const alignClasses = align === "left" ? "items-start text-left" : "items-center text-center";
  const innerPadding = align === "left" ? "pl-6 md:pl-12" : "mx-auto";

  return (
    <header
      ref={rootRef}
      className={`hero-init w-screen max-w-none overflow-hidden bg-[var(--page-bg)] flex flex-col justify-center px-6 ${alignClasses}`}
      style={{ paddingTop: "110px", paddingBottom: "36px" }}
    >
      <div className={`max-w-6xl w-full ${innerPadding}`}>
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-olive leading-tight">
          {title}
        </h2>

        {subtitle && (
          <p ref={subRef} className="mt-3 text-text-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {cta && (
          <div ref={ctaRef} className="mt-6">
            <Link href={cta.href} className="inline-block bg-olive text-white px-5 py-2 rounded-full font-semibold shadow">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
'@
Set-Content -Path "$componentsDir/MiniHero.jsx" -Value $miniHero -Encoding UTF8

# HeroSection.jsx (minor vertical-position stability)
$hero = @'
"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

/**
 * Full homepage hero. Use plantImage local PNG in public/plant.png
 */
export default function HeroSection({
  title = "",
  subtitle = "",
  ctaPrimary = null,
  ctaSecondary = null,
  plantImage = "/plant.png",
  small = false,
}) {
  const rootRef = useRef(null);
  const textRef = useRef(null);
  const plantRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const r = rootRef.current;
    const t = textRef.current;
    const c = ctaRef.current;
    if (!r || !t) return;

    const tl = gsap.timeline({ delay: 0.12 });
    tl.fromTo(r, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.7 })
      .fromTo(t, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, "-=0.45")
      .fromTo(c, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, "-=0.6");

    return () => tl.kill();
  }, []);

  // gentle float always (small amplitude)
  useEffect(() => {
    const p = plantRef.current;
    if (!p) return;
    const anim = gsap.to(p, { y: "+=8", duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    return () => anim.kill();
  }, []);

  const paddingTop = small ? "pt-[110px]" : "pt-[140px]";
  const minH = small ? "min-h-[48vh]" : "min-h-[78vh]";

  return (
    <section
      ref={rootRef}
      className={`relative w-screen max-w-none overflow-visible flex flex-col items-center justify-center ${paddingTop}`}
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        backgroundColor: "var(--page-bg)",
        minHeight: minH,
      }}
    >
      <div className="absolute inset-0 -z-20 pointer-events-none" style={{ backgroundColor: "var(--page-bg)" }} />

      <img
        ref={plantRef}
        src={plantImage}
        alt=""
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none"
        style={{ bottom: small ? "-8%" : "-6%", width: "clamp(560px, 62vw, 1200px)", zIndex: 1 }}
      />

      <div ref={textRef} className="relative z-20 max-w-4xl px-6 text-center">
        <h1 className="whitespace-pre-line font-bold text-olive leading-tight text-4xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 text-text-light md:text-xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>

      <div ref={ctaRef} className="relative z-20 flex gap-6 mt-8">
        {ctaPrimary && <Link href={ctaPrimary.href} className="bg-olive text-white px-8 py-3 rounded-full font-semibold shadow-lg">{ctaPrimary.label}</Link>}
        {ctaSecondary && <Link href={ctaSecondary.href} className="border border-olive text-olive px-8 py-3 rounded-full font-semibold">{ctaSecondary.label}</Link>}
      </div>
    </section>
  );
}
'@
Set-Content -Path "$componentsDir/HeroSection.jsx" -Value $hero -Encoding UTF8

# SocialBar.jsx
$social = @'
"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function SocialBar() {
  const items = [
    { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
    { href: "mailto:hello@bali-spa-nature.com", icon: <FaEnvelope />, label: "Email" },
    { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  ];

  return (
    <aside className="fixed left-4 top-1/3 z-40 hidden md:flex flex-col gap-6">
      {items.map((it) => (
        <Link key={it.label} href={it.href} aria-label={it.label} className="block">
          <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#B8995F] hover:text-[#8a7b4f] transition social-ic">
            {it.icon}
          </div>
        </Link>
      ))}
    </aside>
  );
}
'@
Set-Content -Path "$componentsDir/SocialBar.jsx" -Value $social -Encoding UTF8

# StickyContactBar.jsx
$sticky = @'
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function StickyContactBar() {
  useEffect(() => {
    gsap.to(".float-coin", { y: -6, repeat: -1, yoyo: true, duration: 3, ease: "power1.inOut" });
  }, []);

  return (
    <div className="fixed right-6 bottom-10 flex flex-col gap-5 z-[120]">
      <a href="https://wa.me/your-number" target="_blank" rel="noreferrer" className="float-coin premium-coin" aria-label="WhatsApp">
        <FaWhatsapp className="text-[#B8995F] text-2xl" />
      </a>

      <a href="mailto:info@yourdomain.com" className="float-coin premium-coin" aria-label="Email">
        <FaEnvelope className="text-[#B8995F] text-xl" />
      </a>
    </div>
  );
}
'@
Set-Content -Path "$componentsDir/StickyContactBar.jsx" -Value $sticky -Encoding UTF8

# Footer.jsx
$footer = @'
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#8f7d5a] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Bali Spa Nature</h4>
          <p className="text-sm opacity-90">Naturally formulated, mindfully manufactured.</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Products</h5>
          <ul className="text-sm space-y-2">
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/private-label">Private Label</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Company</h5>
          <ul className="text-sm space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <p className="text-sm">hello@bali-spa-nature.com</p>
          <p className="text-sm mt-2">+62 812 3456 789</p>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm opacity-90">
        © {new Date().getFullYear()} Bali Spa Nature — All rights reserved
      </div>
    </footer>
  );
}
'@
Set-Content -Path "$componentsDir/Footer.jsx" -Value $footer -Encoding UTF8

# ClientReviews.jsx
$reviews = @'
"use client";

export default function ClientReviews({ items = null }) {
  const defaultItems = [
    { author: "Resort Manager — Ubud", quote: "Exceptional product quality and timeline." },
    { author: "Spa Owner — Seminyak", quote: "We love the bespoke formulations." },
    { author: "Hotel Group — Bali", quote: "Reliable, premium, eco-friendly." },
  ];

  const list = items || defaultItems;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-olive text-center mb-8">What our clients say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((r, i) => (
          <blockquote key={i} className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-text-light mb-4">“{r.quote}”</p>
            <footer className="text-sm font-semibold text-olive">{r.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
'@
Set-Content -Path "$componentsDir/ClientReviews.jsx" -Value $reviews -Encoding UTF8

# Accreditations.jsx
$acc = @'
"use client";

export default function Accreditations({ logos = [] }) {
  // logos: [{ url, alt }]
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h4 className="text-xl font-semibold text-olive text-center mb-6">Accreditations</h4>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        { (logos.length ? logos : [
          { url: "/assets/accred-1.png", alt: "Accred 1" },
          { url: "/assets/accred-2.png", alt: "Accred 2" },
          { url: "/assets/accred-3.png", alt: "Accred 3" },
        ]).map((l, i) => (
          <img key={i} src={l.url} alt={l.alt} className="h-12 opacity-90" />
        )) }
      </div>
    </section>
  );
}
'@
Set-Content -Path "$componentsDir/Accreditations.jsx" -Value $acc -Encoding UTF8

Write-Host "Patched components created in /components:"
Get-ChildItem -Path $componentsDir -Name
Write-Host "Done. If you need the script to also update other files (pages/layout, imports), tell me and I can extend it."
