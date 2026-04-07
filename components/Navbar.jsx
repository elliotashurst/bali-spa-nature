"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navRef = useRef(null);
  const lastY = useRef(0);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (!navRef.current) return;

      // Hide on scroll down, show on scroll up (only if menu closed)
      if (!menuOpen) {
        navRef.current.style.transform =
          y > lastY.current && y > 80 ? "translateY(-100%)" : "translateY(0)";
      } else {
        navRef.current.style.transform = "translateY(0)";
      }
      lastY.current = y;

      // Home: transparent at top, solid after scroll
      setIsScrolled(y > 30);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Products", "/products"],
    ["Private Label", "/private-label"],
    ["Wholesale", "/wholesale"],
    ["Portfolio", "/portfolio"],
    ["Contact", "/contact"],
  ];

  const navClass = [
    isHome ? "full-bleed" : "",
    "fixed top-0 left-0 w-full z-[100] transition-transform duration-300",
    isHome
      ? isScrolled
        ? "bg-[var(--page-bg)]/90 backdrop-blur border-b border-black/10 shadow-sm"
        : "bg-transparent"
      : "bg-[var(--page-bg)]/95 backdrop-blur border-b border-black/10 shadow-sm",
  ].join(" ");

  const desktopUlClass = [
    "hidden md:flex gap-10 font-semibold transition-colors duration-300",
    isHome && !isScrolled ? "nav-home-transparent text-white" : "text-olive",
  ].join(" ");

  return (
    <>
      <nav ref={navRef} className={navClass}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" aria-label="Bali Spa Nature home">
            <img src="/logo.png" className="h-12" alt="Bali Spa Nature" />
          </Link>

          {/* Desktop nav */}
          <ul className={desktopUlClass}>
            {links.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="nav-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={[
              "md:hidden inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 backdrop-blur",
              "h-11 w-11",
              isHome && !isScrolled ? "border-white/25 bg-white/10" : "",
            ].join(" ")}
          >
            {/* Simple icon */}
            <span className="relative block h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition-transform duration-200",
                  menuOpen ? "translate-y-[7px] rotate-45" : "",
                  isHome && !isScrolled ? "text-white" : "text-black",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition-opacity duration-200",
                  menuOpen ? "opacity-0" : "opacity-100",
                  isHome && !isScrolled ? "text-white" : "text-black",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] h-[2px] w-5 rounded bg-current transition-transform duration-200",
                  menuOpen ? "translate-y-[-7px] -rotate-45" : "",
                  isHome && !isScrolled ? "text-white" : "text-black",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen ? (
        <div className="fixed inset-0 z-[120] md:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close menu backdrop"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[var(--page-bg)] shadow-2xl border-l border-black/10">
            <div className="px-6 pt-6 pb-4 flex items-center justify-between">
              <div className="text-sm font-semibold text-olive">
                Bali Spa Nature
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-black/10 bg-white h-10 w-10"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <div className="px-6 pb-6">
              <nav className="flex flex-col gap-2">
                {links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl bg-white/70 border border-black/10 px-4 py-3 text-[15px] font-medium text-black/80 hover:border-black/20 transition"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                >
                  Request Catalogue
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black/75 hover:border-black/25 hover:text-black transition"
                >
                  View Products
                </Link>
              </div>

              <p className="mt-6 text-xs text-black/50">
                Preview build — confidential.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
