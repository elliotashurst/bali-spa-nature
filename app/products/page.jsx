import MiniHero from "@/components/MiniHero";
import Link from "next/link";
import { Hotel, Leaf, Droplets, Sparkles } from "lucide-react";

export const metadata = {
  title: "Products & Manufacturing Capabilities | Bali Spa Nature",
  description:
    "Core manufacturing categories for private label and wholesale spa and hospitality products.",
};

const categories = [
  {
    title: "Hospitality Amenities",
    text: "Manufactured for guest-use environments requiring consistency and operational reliability.",
    icon: Hotel,
  },
  {
    title: "Professional Spa Products",
    text: "Products developed for spa treatment rooms and professional back-of-house use.",
    icon: Leaf,
  },
  {
    title: "Hair & Personal Care",
    text: "Formulated for frequent professional use, prioritising safety and consistency.",
    icon: Droplets,
  },
  {
    title: "Aromatherapy & Fragrance",
    text: "Developed for professional hospitality and wellness environments.",
    icon: Sparkles,
  },
];

export default function ProductsPage() {
  return (
    <div className="page-safe">
      {/* MiniHero */}
      <MiniHero
        title="Products & Manufacturing Capabilities"
        subtitle="The categories below represent our core manufacturing capabilities and are used as the basis for private label manufacturing and wholesale supply projects."
        ctaPrimary={{ label: "Discuss Manufacturing Scope", href: "/contact" }}
        ctaSecondary={{
          label: "Private Label Manufacturing",
          href: "/private-label",
        }}
      />

      {/* Categories */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-3xl bg-white/70 border border-black/5 p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--sand)]">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="text-[var(--olive)] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="heading-card">{category.title}</h3>
                <p className="text-body mt-4">{category.text}</p>
              </div>
            );
          })}
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
        <Link href="/contact" className="btn-primary">
          Discuss Manufacturing Scope
        </Link>
      </section>
    </div>
  );
}