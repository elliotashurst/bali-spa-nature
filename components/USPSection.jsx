"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function USPSection({ items = null }) {
  const defaultItems = [
    {
      title: "Manufacturing Conducted in Indonesia",
      text: "Production is based in Indonesia and structured to support hospitality and wellness businesses requiring reliable, professional supply.",
    },
    {
      title: "GMP-Aligned Production Processes",
      text: "Projects move through defined formulation, sampling, production planning, and manufacturing stages designed for consistency and control.",
    },
    {
      title: "Private Label & Wholesale Supply",
      text: "We support both structured private label manufacturing projects and ongoing wholesale supply for operational hospitality use.",
    },
    {
      title: "Batch-Based Quality Control",
      text: "Manufacturing is managed through batch-based production with defined quality checks and repeat supply planning.",
    },
  ];

  const list = items || defaultItems;
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".usp-card");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.fromTo(
          cards,
          { y: 18, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
          }
        );

        io.disconnect();
      },
      { threshold: 0.18 }
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-10 py-20 md:py-24 bg-[#EEE8E0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 leading-tight">
            Manufacturing, Quality & Supply Structure
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-neutral-700">
            Bali Spa Nature operates as a manufacturing-first business, supporting
            hospitality and wellness partners through structured production,
            defined quality controls, and long-term supply planning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {list.map((it, i) => (
            <div
              key={i}
              className="
                usp-card
                rounded-2xl
                bg-white/70
                border border-black/5
                p-6 md:p-8
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                transition
                hover:-translate-y-[2px]
                hover:shadow-[0_14px_36px_rgba(0,0,0,0.07)]
              "
            >
              <h3 className="text-xl font-medium tracking-tight text-neutral-900">
                {it.title}
              </h3>
              <p className="mt-3 text-[16px] leading-7 text-neutral-700">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}