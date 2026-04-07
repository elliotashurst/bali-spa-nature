"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function USPSection({ items = null }) {
  const defaultItems = [
    {
      title: "Bespoke Formulations, Uniquely Yours",
      text: "We design, formulate, and manufacture products in-house to your exact desires and needs, creating a truly signature line.",
    },
    { title: "Eco-Conscious Production", text: "Sustainable ingredients & packaging." },
    {
      title: "Premium Ingredients",
      text: "High-quality botanicals sourced responsibly.",
    },
    {
      title: "In-House Expertise",
      text: "From formulation to design with flexible MOQ options.",
    },
  ];

  const list = items || defaultItems;
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".usp-card");

    // Animate once when section is in view (premium: no surprise motion on load)
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
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-olive">
          Why Partner With Us
        </h2>
        <p className="mt-4 text-text-light max-w-2xl mx-auto leading-relaxed">
          A premium manufacturing partner for hospitality, spa, and wellness brands.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {list.map((it, i) => (
          <div
            key={i}
            className="
              usp-card
              rounded-3xl bg-white
              border border-black/10
              p-7
              shadow-[0_10px_25px_rgba(0,0,0,0.06)]
              transition
              hover:-translate-y-[2px]
              hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
            "
          >
            <h3 className="text-base font-semibold tracking-tight text-olive">
              {it.title}
            </h3>
            <p className="mt-3 text-sm text-text-light leading-relaxed">
              {it.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
