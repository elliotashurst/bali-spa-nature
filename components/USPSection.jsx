"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, ShieldCheck, Repeat, Globe } from "lucide-react";

const usps = [
  {
    title: "Indonesian Botanical Foundation",
    text: "Formulations informed by traditional Indonesian ingredients and material knowledge.",
    icon: Leaf,
  },
  {
    title: "Controlled Manufacturing",
    text: "Structured production processes designed for consistency and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Repeatable Supply",
    text: "Batch-based production aligned with long-term operational requirements.",
    icon: Repeat,
  },
  {
    title: "Export-Ready",
    text: "Documentation and production structured for international distribution.",
    icon: Globe,
  },
];

export default function USPSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".usp-card");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-10 pb-20 px-6 md:px-10 bg-[var(--surface)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="eyebrow mb-4">Manufacturing Standards</p>
          <h2 className="heading-section">
            Built for Professional Hospitality and Wellness Supply
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="usp-card group rounded-3xl bg-white/65 border border-black/5 p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--page-bg)] border border-[var(--sand)]">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="text-[var(--olive)] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="heading-card">{item.title}</h3>
                <p className="text-body mt-4">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}