"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const certifications = [
  {
    name: "BPOM",
    description:
      "Indonesian Agency of Drug and Food Control support where applicable.",
    image: "/bpom-logo.png",
    scale: "scale-125 contrast-110",
    badge: "Regulatory Body",
  },
  {
    name: "CPKB",
    description:
      "Cosmetic Good Manufacturing Practice aligned production standards.",
    image: "/cpkb-logo.png",
    scale: "scale-50",
    badge: "Manufacturing Standard",
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".cert-card");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.16,
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
      className="pt-20 pb-10 px-6 md:px-10 bg-[var(--surface)]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="eyebrow mb-4">Compliance & Standards</p>

        <h2 className="heading-section">
          Certifications & Manufacturing Standards
        </h2>

        <p className="text-body-lg mt-6 max-w-3xl mx-auto">
          Bali Spa Nature supports professional hospitality and wellness projects
          with manufacturing processes aligned to recognised Indonesian cosmetic
          production and regulatory standards.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {certifications.map((item) => (
            <div
              key={item.name}
              className="cert-card group rounded-3xl bg-white/70 border border-black/5 p-8 md:p-10 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_18px_45px_rgba(74,93,82,0.16)]"
            >
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white border border-[var(--sand)] shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={`${item.name} certification logo`}
                  width={160}
                  height={160}
                  className={`object-contain ${item.scale}`}
                />
              </div>

             <div className="flex flex-col items-center">
  <h3 className="heading-card transition-colors duration-300 group-hover:text-[var(--olive)]">
    {item.name}
  </h3>

  <span className="mt-2 inline-block rounded-full border border-[var(--sand)] bg-[var(--page-bg)] px-3 py-[4px] text-[11px] tracking-wide text-[var(--text-soft)]">
    {item.badge}
  </span>
</div>

              <p className="text-body mt-4">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-6 text-[var(--text-soft)] max-w-3xl mx-auto">
          Certification and regulatory support may vary by product type,
          formulation, destination market, and project requirements.
        </p>
      </div>
    </section>
  );
}