import MiniHero from "@/components/MiniHero";
import TrustStrip from "@/components/TrustStrip";
import TrustSection from "@/components/TrustSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-safe">
      <MiniHero
        title="About Us"
        subtitle="Balinese heritage, modern manufacturing, and a premium standard of quality for B2B wellness brands."
        ctaPrimary={{ label: "Create Your Own Brand", href: "/private-label" }}
        ctaSecondary={{ label: "View Products", href: "/products" }}
      />

      <TrustStrip
        items={[
          { label: "Origin", value: "Bali, Indonesia" },
          { label: "Focus", value: "B2B manufacturing" },
          { label: "Quality", value: "Consistent batches" },
          { label: "Ethos", value: "Mindful production" },
        ]}
      />

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-olive">
            Crafted in Bali for Premium Guest Experiences
          </h2>
          <p className="mt-5 text-lg text-text-light leading-relaxed">
            Bali Spa Nature blends traditional Indonesian botanicals with modern,
            sustainable manufacturing processes. We support spa, hospitality, and
            wellness brands with reliable production, export-ready operations,
            and refined product presentation — from concept to delivery.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Heritage + Formulation",
              text: "Inspired by Balinese wellness traditions and developed with a modern quality mindset.",
            },
            {
              title: "Sustainable Production",
              text: "Thoughtful ingredient sourcing and packaging options aligned with premium brands.",
            },
            {
              title: "B2B Reliability",
              text: "Clear communication, consistent output, and support across compliance and logistics.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl bg-white border border-black/10
                p-7 text-center
                shadow-[0_10px_25px_rgba(0,0,0,0.06)]
              "
            >
              <h3 className="text-lg font-semibold text-olive">{item.title}</h3>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Request Catalogue
          </Link>
          <Link href="/private-label" className="btn-secondary">
            Private Label Manufacturing
          </Link>
        </div>
      </section>

      <TrustSection />
    </div>
  );
}
