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

  // Lock body scroll when menu is open
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

      if (!menuOpen) {
        navRef.current.style.transform =
          y > lastY.current && y > 80 ? "translateY(-100%)" : "translateY(0)";
      } else {
        navRef.current.style.transform = "translateY(0)";
      }

      lastY.current = y;
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
        ? "bg-[var(--page-bg)]/88 backdrop-blur-md border-b border-black/10 shadow-sm"
        : "bg-transparent"
      : "bg-[var(--page-bg)]/95 backdrop-blur-md border-b border-black/10 shadow-sm",
  ].join(" ");

  const desktopNavTextClass =
    isHome && !isScrolled
      ? "nav-home-transparent text-white"
      : "text-[var(--olive)]";

  const mobileButtonClass = [
    "md:hidden inline-flex items-center justify-center rounded-full h-11 w-11 transition",
    isHome && !isScrolled
      ? "border border-white/25 bg-white/10 text-white backdrop-blur"
      : "border border-black/10 bg-white/75 text-black backdrop-blur",
  ].join(" ");

  return (
    <>
      <nav ref={navRef} className={navClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Bali Spa Nature home"
            className="shrink-0 transition-opacity duration-300 hover:opacity-90"
          >
            <img
              src="/logo.png"
              alt="Bali Spa Nature"
              className={[
                "w-auto transition-all duration-300",
                isHome && !isScrolled
                  ? "h-16 md:h-[82px]"
                  : "h-14 md:h-[74px]",
              ].join(" ")}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul
              className={[
                "flex items-center gap-8 lg:gap-10 text-[13px] uppercase font-medium tracking-[0.08em] transition-colors duration-300",
                desktopNavTextClass,
              ].join(" ")}
            >
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="nav-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={
                isHome && !isScrolled ? "btn-secondary-light" : "btn-olive"
              }
            >
              Discuss a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={mobileButtonClass}
          >
            <span className="relative block h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition-transform duration-200",
                  menuOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition-opacity duration-200",
                  menuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] h-[2px] w-5 rounded bg-current transition-transform duration-200",
                  menuOpen ? "translate-y-[-7px] -rotate-45" : "",
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
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-black/10 bg-[var(--page-bg)] shadow-2xl">
            <div className="flex items-center justify-between px-6 pb-4 pt-6">
              <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
                <img
                  src="/logo.png"
                  alt="Bali Spa Nature"
                  className="h-14 w-auto"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"
                aria-label="Close menu"
              >
                <span className="text-xl leading-none text-black/70">×</span>
              </button>
            </div>

            <div className="px-6 pb-6">
              <nav className="flex flex-col gap-2">
                {links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-[14px] font-medium uppercase tracking-[0.06em] text-black/80 transition hover:border-black/20"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <Link href="/contact" className="btn-olive">
                  Discuss a Project
                </Link>
                <Link href="/products" className="btn-secondary">
                  Explore Product Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}