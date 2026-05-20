"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FlaskConical,
  MapPinned,
  BadgeCheck,
  ClipboardCheck,
} from "lucide-react";

const usps = [
  {
    title: "Formulation-Led Development",
    text: "Projects begin with formulation logic, material behaviour, scent direction, and intended use environment — not catalogue selection.",
    icon: FlaskConical,
  },
  {
    title: "Manufacturing Conducted in Indonesia",
    text: "Production is based in Indonesia and structured to support hospitality and wellness businesses requiring reliable professional supply.",
    icon: MapPinned,
  },
  {
    title: "BPOM / CPKB Support",
    text: "Regulatory and manufacturing credentials support product development, documentation, and supply confidence where applicable.",
    icon: BadgeCheck,
  },
  {
    title: "Batch-Based Quality Control",
    text: "Manufacturing is managed through batch-based production with defined quality checks and repeat supply planning.",
    icon: ClipboardCheck,
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="eyebrow mb-4">
            Manufacturing, Quality & Supply Structure
          </p>

          <h2 className="heading-section">Built for Hospitality Operators</h2>

          <div className="mt-5 space-y-5">
            <p className="text-body-lg">
              We work with boutique resorts, independent hotels, spa operators,
              villa groups, and wellness properties that need reliable product
              supply, clear development stages, and formulations suitable for
              real hospitality use.
            </p>

            <p className="text-body-lg">
              Our focus is not short-term retail product creation. It is
              structured manufacturing for operators who need consistency across
              repeat supply.
            </p>
          </div>
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