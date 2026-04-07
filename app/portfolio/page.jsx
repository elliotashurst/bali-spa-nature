"use client";

import MiniHero from "@/components/MiniHero";
import TrustStrip from "@/components/TrustStrip";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Luxury Resort Collection",
      desc: "Custom aromatherapy line for a 5-star eco-retreat in Ubud.",
      img: "/portfolio/portfolio-1.jpg",
    },
    {
      id: 2,
      title: "Boutique Spa Brand",
      desc: "Minimalist packaging + organic formulations for boutique spas.",
      img: "/portfolio/portfolio-2.jpg",
    },
    {
      id: 3,
      title: "Hotel Signature Fragrance",
      desc: "Custom scent development + diffuser oils.",
      img: "/portfolio/portfolio-3.jpg",
    },
    {
      id: 4,
      title: "Aromatherapy Gift Sets",
      desc: "Holiday gift series for a wellness retailer.",
      img: "/portfolio/portfolio-4.jpg",
    },
    {
      id: 5,
      title: "Organic Facial Care",
      desc: "Plant-based facial oils + scrubs for a salon chain.",
      img: "/portfolio/portfolio-5.jpg",
    },
    {
      id: 6,
      title: "Resort Amenities Line",
      desc: "Shampoos, conditioners and lotions for villas & retreats.",
      img: "/portfolio/portfolio-6.jpg",
    },
  ];

  return (
    <>
      <MiniHero
        title="Our Work & Partners"
        subtitle="Selected collaborations across hospitality, spa, and wellness."
        align="center"
        ctaPrimary={{ label: "Request Catalogue", href: "/contact" }}
        ctaSecondary={{ label: "Private Label", href: "/private-label" }}
      />

      <TrustStrip
        items={[
          { label: "Work type", value: "B2B collaborations" },
          { label: "Focus", value: "Spa + hospitality" },
          { label: "Support", value: "Packaging + R&D" },
          { label: "Export", value: "Global B2B" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-olive">
            Selected Projects
          </h2>
          <p className="mt-4 text-text-light max-w-2xl mx-auto leading-relaxed">
            A glimpse into the types of collections we support — from amenities
            to signature fragrance and private label ranges.
          </p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                rounded-3xl bg-white border border-black/10 overflow-hidden
                shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
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

              <div className="p-7 text-center">
                <h3 className="text-base font-semibold tracking-tight text-olive">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Request Catalogue
          </Link>
          <Link href="/products" className="btn-secondary">
            View Products
          </Link>
        </div>
      </section>
    </>
  );
}
