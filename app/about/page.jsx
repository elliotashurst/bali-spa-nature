import MiniHero from "@/components/MiniHero";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-safe">
      <MiniHero
        title="About Bali Spa Nature"
        subtitle="Bali Spa Nature is an Indonesian manufacturer of spa and personal care products for professional hospitality and wellness use."
        ctaPrimary={{ label: "Discuss a Manufacturing Partnership", href: "/contact" }}
        ctaSecondary={{ label: "Explore Product Categories", href: "/products" }}
      />

      {/* Opening */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-body-lg">
            We work with hotels, resorts, spas, and wellness businesses seeking
            reliable, long-term manufacturing partnerships.
          </p>

          <p className="mt-5 text-body-lg">
            Our operations are focused on private label manufacturing and wholesale
            supply, structured for repeatability and consistency.
          </p>
        </div>
      </section>

      {/* Manufacturing-led by design */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Manufacturing-Led by Design
          </h2>

          <p className="text-body-lg">
            Bali Spa Nature operates as a manufacturing-first business. Products
            are formulated, sampled, and produced through defined processes designed
            to support professional environments where consistency, safety, and
            reliability matter.
          </p>

          <p className="mt-5 text-body-lg">
            Each engagement is approached as a manufacturing project rather than a
            retail transaction.
          </p>
        </div>
      </section>

      {/* Founder perspective */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="eyebrow mb-4">Founder Perspective</p>

            <h2 className="heading-section mb-6">
              Rooted in Indonesian Knowledge and Practical Manufacturing Experience
            </h2>

            <div className="space-y-5">
              <p className="text-body-lg">
                Bali Spa Nature is shaped by a background rooted in Indonesian
                culture, where traditional values, craftsmanship, and natural
                ingredients have long played an important role in daily life and
                production practices.
              </p>

              <p className="text-body-lg">
                Early experience across handicraft and natural product manufacturing
                developed a strong interest in formulation, material quality, and
                the relationship between product function and aesthetic presentation.
              </p>

              <p className="text-body-lg">
                This foundation continues to influence how products are approached
                today, with an emphasis on combining traditional knowledge with
                structured, modern manufacturing processes.
              </p>

              <p className="text-body-lg">
                The focus remains on supporting businesses in creating products that
                reflect their identity while maintaining consistency, reliability,
                and suitability for professional hospitality and wellness environments.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white/50 shadow-sm">
            <img
              src="/hero-rice.jpg"
              alt="Indonesian landscape connected to Bali Spa Nature manufacturing origins"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Manufacturing approach */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Our Vision</p>

          <h2 className="heading-section mb-6">
            Manufacturing Partnerships Built Around Brand Identity
          </h2>

          <div className="space-y-5">
            <p className="text-body-lg">
              Bali Spa Nature operates as a manufacturing partner supporting
              hospitality and wellness businesses in developing their own branded
              product ranges.
            </p>

            <p className="text-body-lg">
              The focus is on private label manufacturing, where products are
              designed to align with each client’s brand identity while meeting the
              functional requirements of professional environments such as hotels,
              resorts, villas, and spas.
            </p>

            <p className="text-body-lg">
              Manufacturing is managed across formulation, sampling, and production,
              allowing projects to be structured according to operational needs,
              volume requirements, and budget parameters.
            </p>

            <p className="text-body-lg">
              The objective is to enable partners to integrate product supply into
              their operations with minimal friction, ensuring reliable manufacturing
              output while allowing them to focus on business growth and guest
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our mission */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">Our Mission</p>

            <h2 className="heading-section mb-6">
              Responsible Manufacturing With Long-Term Supply in Mind
            </h2>

            <div className="space-y-5">
              <p className="text-body-lg">
                Bali Spa Nature supports hospitality and wellness businesses with
                product manufacturing that considers quality, consistency, and
                environmental responsibility from the outset.
              </p>

              <p className="text-body-lg">
                Our approach prioritises natural-origin ingredients where suitable,
                responsible packaging choices, and production planning that reduces
                unnecessary waste across repeat supply projects.
              </p>

              <p className="text-body-lg">
                Sustainability is treated as a practical manufacturing consideration,
                including how materials are sourced, how packaging is selected, and
                how products are developed for ongoing professional use.
              </p>

              <p className="text-body-lg">
                We aim to help partners create spa, hospitality, and personal care
                products that support their operational needs while reflecting a more
                conscious approach to manufacturing.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white/50 shadow-sm">
            <img
              src="/hero-rice.jpg"
              alt="Natural ingredients and responsible manufacturing"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* From formulation to supply */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            From Indonesian Formulation to Ongoing Supply
          </h2>

          <p className="text-body-lg">
            The business was established to serve hospitality and wellness operators
            seeking professionally manufactured products rooted in Indonesian botanical
            knowledge.
          </p>

          <p className="mt-5 text-body-lg">
            Formulation, sampling, and production are structured to support private
            label and wholesale partnerships through controlled stages from concept
            to supply.
          </p>
        </div>
      </section>

      {/* Manufacturing, quality & compliance */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-center mb-12">
            Manufacturing, Quality & Compliance
          </h2>

          <div className="bg-white/70 rounded-2xl p-8 md:p-10">
            <div className="space-y-5">
              {[
                "Manufacturing conducted in Indonesia",
                "GMP-aligned production processes",
                "Batch-based production with defined quality checks",
                "BPOM support available where applicable",
                "Export documentation supported per destination market",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--olive)]" />
                  <p className="text-[16px] leading-7 text-[var(--text-main)] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing px-6 md:px-10 bg-[var(--page-bg)] text-center">
        <Link href="/contact" className="btn-olive">
          Discuss a Manufacturing Partnership
        </Link>
      </section>
    </div>
  );
}