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
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[#F2EEE8]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[17px] leading-8 text-neutral-700">
            We work with hotels, resorts, spas, and wellness businesses seeking
            reliable, long-term manufacturing partnerships.
          </p>

          <p className="mt-5 text-[17px] leading-8 text-neutral-700">
            Our operations are focused on private label manufacturing and wholesale
            supply, structured for repeatability and consistency.
          </p>
        </div>
      </section>

      {/* Manufacturing-led by design */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            Manufacturing-Led by Design
          </h2>

          <p className="text-[17px] leading-8 text-neutral-700">
            Bali Spa Nature operates as a manufacturing-first business. Products
            are formulated, sampled, and produced through defined processes designed
            to support professional environments where consistency, safety, and
            reliability matter.
          </p>

          <p className="mt-5 text-[17px] leading-8 text-neutral-700">
            Each engagement is approached as a manufacturing project rather than a
            retail transaction.
          </p>
        </div>
      </section>

      {/* From formulation to supply */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[#EEE8E0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            From Indonesian Formulation to Ongoing Supply
          </h2>

          <p className="text-[17px] leading-8 text-neutral-700">
            The business was established to serve hospitality and wellness operators
            seeking professionally manufactured products rooted in Indonesian botanical
            knowledge.
          </p>

          <p className="mt-5 text-[17px] leading-8 text-neutral-700">
            Formulation, sampling, and production are structured to support private
            label and wholesale partnerships through controlled stages from concept
            to supply.
          </p>
        </div>
      </section>

      {/* Manufacturing, quality & compliance */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-neutral-900 mb-12 leading-tight">
            Manufacturing, Quality & Compliance
          </h2>

          <div className="bg-white/70 rounded-2xl p-8 md:p-10">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Manufacturing conducted in Indonesia
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  GMP-aligned production processes
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Batch-based production with defined quality checks
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  BPOM support available where applicable
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Export documentation supported per destination market
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[#EEE8E0] text-center">
        <Link href="/contact" className="btn-primary">
          Discuss a Manufacturing Partnership
        </Link>
      </section>
    </div>
  );
}