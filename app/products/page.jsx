import MiniHero from "@/components/MiniHero";
import Link from "next/link";

export const metadata = {
  title: "Products & Manufacturing Capabilities | Bali Spa Nature",
  description:
    "Core manufacturing categories for private label and wholesale spa and hospitality products.",
};

export default function ProductsPage() {
  return (
    <div className="page-safe">
      <MiniHero
        title="Products & Manufacturing Capabilities"
        subtitle="The categories below represent our core manufacturing capabilities and are used as the basis for private label manufacturing and wholesale supply projects."
        ctaPrimary={{ label: "Discuss Manufacturing Scope", href: "/contact" }}
        ctaSecondary={{ label: "Private Label Manufacturing", href: "/private-label" }}
      />

      {/* Categories */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/70 rounded-2xl p-6 md:p-8">
            <h3 className="heading-card text-neutral-900">
              Hospitality Amenities
            </h3>
            <p className="mt-3 text-body">
              Manufactured for guest-use environments requiring consistency and
              operational reliability.
            </p>
          </div>

          <div className="bg-white/70 rounded-2xl p-6 md:p-8">
            <h3 className="heading-card text-neutral-900">
              Professional Spa Products
            </h3>
            <p className="mt-3 text-body">
              Products developed for spa treatment rooms and professional
              back-of-house use.
            </p>
          </div>

          <div className="bg-white/70 rounded-2xl p-6 md:p-8">
            <h3 className="heading-card text-neutral-900">
              Hair & Personal Care
            </h3>
            <p className="mt-3 text-body">
              Formulated for frequent professional use, prioritising safety and
              consistency.
            </p>
          </div>

          <div className="bg-white/70 rounded-2xl p-6 md:p-8">
            <h3 className="heading-card text-neutral-900">
              Aromatherapy & Fragrance
            </h3>
            <p className="mt-3 text-body">
              Developed for professional hospitality and wellness environments.
            </p>
          </div>
        </div>
      </section>

      {/* Reference catalogue CTA */}
      <section className="section-spacing-tight px-6 md:px-10 bg-[#F2EEE8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section">
            Need a More Detailed Reference View?
          </h2>
          <p className="text-body-lg mt-5">
            Explore representative product formats and manufacturing examples
            presented as a reference to manufacturing scope rather than fixed
            retail items.
          </p>

          <div className="mt-8">
            <Link href="/catalogue" className="btn-secondary">
              View Reference Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Context block */}
      <section className="section-spacing-tight px-6 md:px-10 bg-[#EEE8E0]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-body-lg">
            Product categories shown reflect manufacturing scope rather than
            fixed retail items. Final formulations, formats, and specifications
            are defined per project based on use case, volume, and operational
            requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--page-bg)] text-center">
        <a href="/contact" className="btn-primary">
          Discuss Manufacturing Scope
        </a>
      </section>
    </div>
  );
}