"use client";

import MiniHero from "@/components/MiniHero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Hospitality Amenities Supply Project",
      clientType: "Boutique resort group",
      scope: "Private label manufacturing, packaging coordination, and repeat supply planning",
      products: "Guest amenities and in-room personal care products",
      relationship: "Ongoing supply relationship",
      img: "/portfolio/portfolio-1.jpg",
    },
    {
      id: 2,
      title: "Professional Spa Product Manufacturing Project",
      clientType: "Independent spa operator",
      scope: "Formulation development, sampling, and batch-based production",
      products: "Professional treatment products and spa back-of-house formats",
      relationship: "Multi-stage project delivery",
      img: "/portfolio/portfolio-2.jpg",
    },
    {
      id: 3,
      title: "Hospitality Fragrance Supply Project",
      clientType: "Luxury villa operator",
      scope: "Fragrance development, production coordination, and supply support",
      products: "Diffuser oils and hospitality fragrance formats",
      relationship: "Project-based manufacturing engagement",
      img: "/portfolio/portfolio-3.jpg",
    },
    {
      id: 4,
      title: "Wholesale Wellness Supply Project",
      clientType: "Regional wellness business",
      scope: "Bulk supply planning, product format alignment, and repeat order support",
      products: "Wellness and aromatherapy product formats",
      relationship: "Repeat wholesale supply arrangement",
      img: "/portfolio/portfolio-4.jpg",
    },
    {
      id: 5,
      title: "Personal Care Manufacturing Project",
      clientType: "Hospitality-focused business",
      scope: "Private label product development and production planning",
      products: "Hair and personal care items for operational guest use",
      relationship: "Structured private label engagement",
      img: "/portfolio/portfolio-5.jpg",
    },
    {
      id: 6,
      title: "Resort Supply Continuity Project",
      clientType: "Resort and retreat operator",
      scope: "Batch production, quality control coordination, and ongoing supply",
      products: "Guest-use amenities and support products",
      relationship: "Long-term supply support",
      img: "/portfolio/portfolio-6.jpg",
    },
  ];

  return (
    <>
      <MiniHero
        title="Selected Manufacturing Projects"
        subtitle="The projects shown represent selected manufacturing work delivered for hospitality and wellness partners."
        align="center"
        ctaPrimary={{ label: "Discuss a Similar Manufacturing Project", href: "/contact" }}
        ctaSecondary={{ label: "Private Label Manufacturing", href: "/private-label" }}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#F2EEE8]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[17px] leading-8 text-neutral-700">
            Details are presented at a level appropriate for commercial review while
            respecting client confidentiality.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {projects.map((p) => (
              <motion.article
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  rounded-3xl bg-white/75 border border-black/5 overflow-hidden
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]
                  transition
                "
              >
                <div className="relative aspect-[4/3] bg-black/5">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="text-xl font-medium tracking-tight text-neutral-900 leading-tight">
                    {p.title}
                  </h3>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.12em] text-neutral-500">
                        Client Type
                      </p>
                      <p className="mt-1 text-[15px] leading-6 text-neutral-800 font-medium">
                        {p.clientType}
                      </p>
                    </div>

                    <div>
                      <p className="text-[12px] uppercase tracking-[0.12em] text-neutral-500">
                        Scope
                      </p>
                      <p className="mt-1 text-[15px] leading-6 text-neutral-700">
                        {p.scope}
                      </p>
                    </div>

                    <div>
                      <p className="text-[12px] uppercase tracking-[0.12em] text-neutral-500">
                        Products Supplied
                      </p>
                      <p className="mt-1 text-[15px] leading-6 text-neutral-700">
                        {p.products}
                      </p>
                    </div>

                    <div>
                      <p className="text-[12px] uppercase tracking-[0.12em] text-neutral-500">
                        Relationship Nature
                      </p>
                      <p className="mt-1 text-[15px] leading-6 text-neutral-700">
                        {p.relationship}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Discuss a Similar Manufacturing Project
            </Link>
            <Link href="/private-label" className="btn-secondary">
              Private Label Manufacturing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}