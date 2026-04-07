import MiniHero from "@/components/MiniHero";
import TrustStrip from "@/components/TrustStrip";
import Link from "next/link";

export const metadata = {
  title: "Wholesale Spa Products | Bali Spa Nature",
  description:
    "Wholesale eco-friendly spa and hotel amenities for resorts, spas, and wellness businesses.",
};

export default function WholesalePage() {
  return (
    <>
      <MiniHero
        title="Wholesale"
        subtitle="Bulk supply for spas, hotels, and wellness brands worldwide."
        ctaPrimary={{ label: "Request Catalogue", href: "/contact" }}
        ctaSecondary={{ label: "View Products", href: "/products" }}
      />

      <TrustStrip
        items={[
          { label: "MOQ", value: "Wholesale volumes" },
          { label: "Lead time", value: "On request" },
          { label: "Export", value: "Global B2B" },
          { label: "Collections", value: "Spa + hotel" },
        ]}
      />

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-olive">
          Trusted by Resorts Worldwide
        </h2>
        <p className="mt-5 text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
          Our wholesale collections are designed for luxury spas, hotels,
          villas, and wellness centers — consistent, reliable, and ready for
          scale.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Request Catalogue
          </Link>
          <Link href="/private-label" className="btn-secondary">
            Private Label Manufacturing
          </Link>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Spas & Wellness Centers",
              text: "Curated retail and treatment products that align with premium guest experiences.",
            },
            {
              title: "Hotels & Resorts",
              text: "Amenities and in-room lines designed for brand consistency and operational reliability.",
            },
            {
              title: "Retail & Distributors",
              text: "Bulk-ready supply with export support for regional and international distribution.",
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
      </section>
    </>
  );
}
