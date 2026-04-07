# apply-patch.ps1
# Usage: run from your project root (where package.json exists)
# Creates a set of patched files (will overwrite existing files of the same name).
# IMPORTANT: Put public/plant.png into your public/ folder BEFORE running or after.

$ErrorActionPreference = "Stop"

# helper to write files
function Write-File([string]$path, [string]$content) {
  $dir = Split-Path $path -Parent
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
  }
  $content | Set-Content -LiteralPath $path -Encoding UTF8
  Write-Host "Wrote $path"
}

# globals.css
Write-File "app/globals.css" @'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global tokens */
:root {
  --page-bg: #F5F3EF;
  --background: #ffffff;
  --foreground: #171717;
  --olive: #6B7A5C;
  --bronze: #8F7D5A;
}

/* Page baseline */
html, body {
  margin: 0;
  padding: 0;
  background: var(--page-bg) !important;
  color: var(--foreground);
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  overflow-x: hidden;
  scrollbar-gutter: stable;
}

/* minimal safe transitions */
* { transition-property: color, background-color, transform, opacity, box-shadow; transition-duration: 200ms; }

.hero-init { opacity: 0; transform: translateY(12px); will-change: opacity, transform; }

/* navbar underline util */
.nav-underline { position: relative; display: inline-block; }
.nav-underline::after { content: ""; position: absolute; left: 50%; bottom: -6px; width: 0; height: 3px; transform: translateX(-50%); border-radius: 999px; background: linear-gradient(90deg,#e7c775,#b8956a); transition: width 280ms ease; }
.nav-underline:hover::after { width: 70%; }

/* premium coin */
.premium-coin { width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.05)); box-shadow:0 8px 20px rgba(0,0,0,0.15); backdrop-filter: blur(12px); border:2px solid rgba(184,153,95,0.45); transition: transform .25s; }
.premium-coin:hover { transform: translateY(-6px) scale(1.04); box-shadow:0 15px 30px rgba(0,0,0,0.22); }

/* social left safe padding fallback (pages should opt-in with class) */
@media (min-width: 1024px) {
  .page-with-left-safe { padding-left: 3.5rem; }
}

/* fix nav stacking and shadow */
nav { z-index: 9999; box-shadow: 0 8px 30px rgba(9,10,11,0.08); }
'@

# layout.tsx - typed children for TS projects; if you use .jsx replace signature
Write-File "app/layout.tsx" @'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import PageTransition from "@/components/PageTransition";
import StickyContactBar from "@/components/StickyContactBar";
import type { ReactNode } from "react";

export const metadata = {
  title: "Bali Spa Nature | Natural Spa Product Manufacturer Bali",
  description: "Naturally formulated, mindfully manufactured.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--page-bg)] text-[var(--foreground)] antialiased">
        <Navbar />
        <SocialBar />

        <main id="page-container" className="relative w-full page-with-left-safe">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
'@

# lib/sanity.js - preserve client's config, add getSanityHome (non-breaking)
Write-File "lib/sanity.js" @'
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "u8s15rc8",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

// safe homepage fetcher
export async function getSanityHome() {
  try {
    const data = await client.fetch(`
      *[_type == "homepage"][0]{
        heroTitle,
        heroSubtitle,
        "heroPlant": heroPlantImage.asset->url,
        heroCtaPrimary { label, href },
        heroCtaSecondary { label, href },
        usp[] { title, text, "iconUrl": icon.asset->url }
      }
    `);
    return data || null;
  } catch (err) {
    console.error("getSanityHome error", err);
    return null;
  }
}
'@

# components/Navbar.jsx
Write-File "components/Navbar.jsx" @'
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);
  const lastY = useRef(0);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const onScroll = () => {
      const cur = window.scrollY;
      if (cur > lastY.current && cur > 120) {
        // hide when scrolling down
        el.classList.add("translate-y-[-120%]");
      } else {
        el.classList.remove("translate-y-[-120%]");
      }
      lastY.current = cur;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Private Label", "/private-label"],
    ["Wholesale", "/wholesale"],
    ["Portfolio", "/portfolio"],
    ["Contact", "/contact"],
    ["Client Login", "/client-login"],
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-[9999] bg-[var(--page-bg)]/95 backdrop-blur-sm transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-14 object-contain" />
        </Link>

        <ul className="hidden md:flex space-x-10 font-semibold text-olive">
          {menu.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="nav-underline group py-2">
                <span className="group-hover:text-bronze transition">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
'@

# components/MiniHero.jsx - fixed GSAP guards and no null set
Write-File "components/MiniHero.jsx" @'
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function MiniHero({ title = "Page Title", subtitle = "", cta = null, align = "center" }) {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const t = gsap.timeline({ delay: 0.06 });
    if (titleRef.current) {
      t.fromTo(titleRef.current, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" });
    }
    if (subRef.current) {
      t.fromTo(subRef.current, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out" }, "-=0.42");
    }
    if (ctaRef.current) {
      t.fromTo(ctaRef.current, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out" }, "-=0.42");
    }

    return () => {
      t.kill && t.kill();
      // safe final set (only for elements that exist)
      const setTargets = [rootRef.current, titleRef.current, subRef.current, ctaRef.current].filter(Boolean);
      if (setTargets.length) {
        gsap.set(setTargets, { autoAlpha: 1, y: 0 });
      }
    };
  }, [title, subtitle, cta]);

  return (
    <header ref={rootRef} className={`hero-init w-screen max-w-none overflow-hidden bg-[var(--page-bg)] flex flex-col justify-center px-6 text-${align}`}>
      <div className={`max-w-6xl w-full ${align === "left" ? "pl-6 md:pl-12" : "mx-auto text-center"}`} style={{ paddingTop: 110, paddingBottom: 28 }}>
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-olive leading-tight">{title}</h2>
        {subtitle && <p ref={subRef} className="mt-3 text-text-light max-w-2xl mx-auto">{subtitle}</p>}
        {cta && <div ref={ctaRef} className="mt-6"><a href={cta.href} className="inline-block bg-olive text-white px-5 py-2 rounded-full font-semibold shadow">{cta.label}</a></div>}
      </div>
    </header>
  );
}
'@

# components/HeroSection.jsx (home full hero)
Write-File "components/HeroSection.jsx" @'
"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection({ title = "", subtitle = "", ctaPrimary = null, ctaSecondary = null, plantImage = "/plant.png", small = false }) {
  const root = useRef(null);
  const text = useRef(null);
  const plant = useRef(null);
  const cta = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.12 });
    if (root.current) tl.fromTo(root.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7, ease: "power2.out" });
    if (text.current) tl.fromTo(text.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out" }, "-=0.4");
    if (cta.current) tl.fromTo(cta.current, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" }, "-=0.6");

    // ambient plant sway
    gsap.to(plant.current, { y: "+=8", duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });

    return () => {
      tl.kill && tl.kill();
    };
  }, []);

  return (
    <section ref={root} className="relative w-screen max-w-none overflow-visible flex flex-col items-center justify-center pt-32 md:pt-40" style={{ backgroundColor: "#F5F3EF", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)", minHeight: small ? "45vh" : "78vh" }}>
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: "#F5F3EF" }} />
      <img ref={plant} src={plantImage} alt="" className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none" style={{ bottom: small ? "-6%" : "-6%", width: "clamp(560px,62vw,1200px)", zIndex:1, filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.12))" }} />
      <div ref={text} className="relative z-20 max-w-4xl px-6 text-center">
        <h1 className="whitespace-pre-line font-bold text-olive text-4xl md:text-6xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl text-text-light">{subtitle}</p>}
      </div>

      <div ref={cta} className="relative z-20 flex gap-6 mt-10">
        {ctaPrimary && <Link href={ctaPrimary.href} className="bg-olive text-white px-8 py-3 rounded-full font-semibold shadow-lg">{ctaPrimary.label}</Link>}
        {ctaSecondary && <Link href={ctaSecondary.href} className="border border-olive text-olive px-8 py-3 rounded-full font-semibold">{ctaSecondary.label}</Link>}
      </div>
    </section>
  );
}
'@

# components/StickyContactBar.jsx
Write-File "components/StickyContactBar.jsx" @'
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
      <a href="https://wa.me/your-number" target="_blank" rel="noreferrer" className="float-coin premium-coin">
        <FaWhatsapp className="text-[#B8995F] text-2xl" />
      </a>
      <a href="mailto:info@yourdomain.com" className="float-coin premium-coin">
        <FaEnvelope className="text-[#B8995F] text-xl" />
      </a>
    </div>
  );
}
'@

# components/SocialBar.jsx
Write-File "components/SocialBar.jsx" @'
"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function SocialBar() {
  const items = [
    { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
    { href: "mailto:info@bali-spa-nature.com", icon: <FaEnvelope />, label: "Email" },
    { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  ];
  return (
    <aside className="fixed left-4 top-1/3 z-40 hidden md:flex flex-col gap-6">
      {items.map(it => (
        <Link key={it.label} href={it.href} aria-label={it.label}>
          <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-olive social-ic hover:text-bronze">
            {it.icon}
          </div>
        </Link>
      ))}
    </aside>
  );
}
'@

# components/USPSection.jsx
Write-File "components/USPSection.jsx" @'
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function USPSection({ items = null }) {
  const defaultItems = [
    { title: "Authentic Balinese Heritage", text: "Formulations inspired by generations of wellness traditions." },
    { title: "Eco-Conscious Production", text: "Sustainable ingredients & packaging." },
    { title: "Premium Ingredients", text: "High-quality botanicals sourced responsibly." },
    { title: "In-House Expertise", text: "From formulation to design with flexible MOQ options." },
  ];
  const list = items || defaultItems;
  const gridRef = useRef(null);

  useEffect(() => {
    const els = gridRef.current?.querySelectorAll(".usp-card");
    if (els) {
      gsap.fromTo(els, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" });
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-olive text-center mb-8">Why Partner With Us</h2>
      <div ref={gridRef} className="grid md:grid-cols-4 gap-8">
        {list.map((it, i) => (
          <div key={i} className="usp-card bg-white rounded-3xl p-8 shadow product-panel-glow">
            <h3 className="text-olive text-xl font-semibold mb-3">{it.title}</h3>
            <p className="text-text-light">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
'@

# components/ProductsList.jsx
Write-File "components/ProductsList.jsx" @'
"use client";

import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  if (!products?.length) return <p className="text-center py-20 text-gray-500">No products found.</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {products.map(p => <ProductCard key={p._id} product={p} />)}
    </div>
  );
}
'@

# components/ProductCard.jsx
Write-File "components/ProductCard.jsx" @'
"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  const slug = product?.slug?.current || product?.slug;
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-48 w-full overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-olive mb-2">{product.name}</h3>
        <p className="text-text-light mb-4">{product.description?.slice(0,120)}</p>
        {slug ? (
          <Link href={`/products/${slug}`} className="inline-block text-olive font-semibold">View →</Link>
        ) : (
          <span className="text-gray-400">No link</span>
        )}
      </div>
    </article>
  );
}
'@

# app/page.jsx - homepage example wired to getSanityHome
Write-File "app/page.jsx" @'
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import { getSanityHome } from "@/lib/sanity";

export default async function HomePage() {
  const data = await getSanityHome();

  return (
    <>
      <HeroSection
        title={data?.heroTitle || "Naturally Formulated. Mindfully Manufactured. Exclusively Yours."}
        subtitle={data?.heroSubtitle || "Your trusted partner for eco-friendly spa product manufacturing..."}
        ctaPrimary={data?.heroCtaPrimary}
        ctaSecondary={data?.heroCtaSecondary}
        plantImage={data?.heroPlant ? data.heroPlant : "/plant.png"}
      />
      <USPSection items={data?.usp} />
    </>
  );
}
'@

# app/products/page.jsx - products index (client) example
Write-File "app/products/page.jsx" @'
"use client";

import { useEffect, useState } from "react";
import ProductsList from "@/components/ProductsList";
import { client } from "@/lib/sanity";

export default function ProductsPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await client.fetch(`*[_type == "product"]{ _id, name, description, "imageUrl": image.asset->url, "slug": slug.current }`);
        if (mounted) setProducts(data || []);
      } catch (err) {
        console.error(err);
        if (mounted) setProducts([]);
      }
    })();
    return () => (mounted = false);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>
      <ProductsList products={products} />
    </main>
  );
}
'@

# app/products/[slug]/page.jsx - product detail (await params per Next 16)
Write-File "app/products/[slug]/page.jsx" @'
import { client } from "@/lib/sanity";
import Image from "next/image";

export default async function ProductDetailPage(props) {
  // Next 16: params is a Promise - await it
  const { slug } = await props.params ?? {};

  if (!slug) {
    return <div className="p-10 text-center text-red-500">Error: Product slug missing.</div>;
  }

  const query = `*[_type=="product" && slug.current==$slug][0]{ _id, name, description, price, "imageUrl": image.asset->url }`;
  const product = await client.fetch(query, { slug });

  if (!product) {
    return <div className="p-10 text-center text-gray-500">Product not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="w-full rounded-xl shadow-md" />}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-olive mb-4">{product.name}</h1>
          <p className="text-text-light mb-6">{product.description}</p>
          {product.price && <div className="text-2xl font-semibold text-olive">${product.price}</div>}
        </div>
      </div>
    </main>
  );
}
'@

# components/Footer.jsx (simple)
Write-File "components/Footer.jsx" @'
export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-sm text-text-light">&copy; {new Date().getFullYear()} Bali Spa Nature. All rights reserved.</p>
      </div>
    </footer>
  );
}
'@

# components/PageTransition.jsx
Write-File "components/PageTransition.jsx" @'
"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const variants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.32, ease: "easeIn" } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname || "root"} variants={variants} initial="initial" animate="animate" exit="exit" style={{ minHeight: "calc(100vh - 220px)" }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
'@

Write-Host ""
Write-Host "Patch applied. Files written. Next steps:"
Write-Host "  1) Place your transparent plant PNG at public/plant.png"
Write-Host "  2) Run: npm i gsap react-icons clsx --legacy-peer-deps"
Write-Host "  3) Start dev: npm run dev"
Write-Host ""
Write-Host "If you want I can now also generate a PowerShell ZIP archive of these files, or help adjust specific pages (mini hero visibility, USP panels, product grid spacing)."
