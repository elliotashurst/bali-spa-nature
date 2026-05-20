"use client";

import MiniHero from "@/components/MiniHero";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Boutique Resort — Guest Amenity Supply Project",
    clientType: "Boutique resort group",
    scope:
      "Private-label manufacturing, packaging coordination, and repeat supply planning.",
    productsSupplied: "Guest amenities and in-room personal care products.",
    relationshipNature: "Ongoing supply relationship.",
    image: null,
    imageAlt: "Product in hospitality operational context",
  },
  {
    title: "Independent Spa Operator — Professional Spa Product Project",
    clientType: "Independent spa operator",
    scope: "Formulation development, sampling, and batch-based production.",
    productsSupplied:
      "Professional treatment products and spa back-of-house formats.",
    relationshipNature: "Multi-stage project delivery.",
    image: null,
    imageAlt: "Product in hospitality operational context",
  },
  {
    title: "Hospitality Group — Fragrance Supply Project",
    clientType: "Hospitality group",
    scope:
      "Fragrance supply coordination, production planning, and repeat supply support.",
    productsSupplied: "Diffuser oils and hospitality fragrance formats.",
    relationshipNature: "Project-based manufacturing engagement.",
    image: null,
    imageAlt: "Product in hospitality operational context",
  },
  {
    title: "Wellness Operator — Wholesale Supply Project",
    clientType: "Wellness operator",
    scope:
      "Bulk supply planning, product format alignment, and repeat order support.",
    productsSupplied: "Wellness and aromatherapy product formats.",
    relationshipNature: "Repeat wholesale supply arrangement.",
    image: null,
    imageAlt: "Product in hospitality operational context",
  },
  {
    title: "Resort Operator — Supply Continuity Project",
    clientType: "Resort operator",
    scope:
      "Batch production, quality control coordination, documentation, and ongoing supply.",
    productsSupplied: "Guest-use amenities and operational support products.",
    relationshipNature: "Long-term supply support.",
    image: null,
    imageAlt: "Product in hospitality operational context",
  },
];

function ProjectField({ label, value }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--text-soft)]">
        {label}
      </p>
      <p className="mt-2 text-[15px] leading-6 text-[var(--text-main)]">
        {value}
      </p>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="page-safe">
      <MiniHero
        title="Selected Manufacturing Projects"
        subtitle="The projects shown represent selected manufacturing work delivered for hospitality and wellness partners. Details are presented at a level suitable for commercial review while respecting client confidentiality."
        align="center"
        ctaPrimary={{
          label: "Discuss a Similar Manufacturing Project",
          href: "/contact",
        }}
        ctaSecondary={{
          label: "Private Label Manufacturing",
          href: "/private-label",
        }}
      />

      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-section">Portfolio</h2>

            <p className="text-body-lg mt-5">
              
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group overflow-hidden rounded-[2rem] bg-white/70 border border-black/5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]"
              >
                {project.image ? (
                  <div className="relative aspect-[4/3] bg-[var(--surface)]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="p-7 md:p-8">
                  <h3 className="heading-card transition-colors duration-300 group-hover:text-[var(--olive)]">
                    {project.title}
                  </h3>

                  <div className="mt-7 space-y-5">
                    <ProjectField
                      label="Client Type"
                      value={project.clientType}
                    />

                    <ProjectField label="Scope" value={project.scope} />

                    <ProjectField
                      label="Products Supplied"
                      value={project.productsSupplied}
                    />

                    <ProjectField
                      label="Relationship Nature"
                      value={project.relationshipNature}
                    />
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
    </div>
  );
}