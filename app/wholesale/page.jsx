import MiniHero from "@/components/MiniHero";
import Link from "next/link";

export const metadata = {
  title: "Wholesale Supply for Hospitality & Wellness Operators",
  description:
    "Wholesale supply for hospitality and wellness businesses seeking ongoing bulk orders and repeat operational use.",
};

export default function WholesalePage() {
  return (
    <>
      <MiniHero
        title="Wholesale Supply for Hospitality & Wellness"
        subtitle="Wholesale supply is structured for ongoing bulk orders and repeat operational use rather than transactional resale."
        ctaPrimary={{ label: "Discuss Wholesale Supply Requirements", href: "/contact" }}
        ctaSecondary={{ label: "Explore Product Categories", href: "/products" }}
      />

      {/* Intro / audience */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[#F2EEE8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-neutral-900 mb-12 leading-tight">
            Who Wholesale Supply Is Designed For
          </h2>

          <div className="bg-white/70 rounded-2xl p-8 md:p-10">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Hotels, resorts, and villas
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Day spas and wellness centres
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Hospitality operators requiring consistent bulk supply
                </p>
              </div>
            </div>

            <p className="mt-8 text-[16px] leading-7 text-neutral-700">
              Wholesale supply is assessed based on operational fit and volume requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-neutral-900 mb-12 leading-tight">
            Wholesale Supply Parameters
          </h2>

          <div className="bg-white/70 rounded-2xl p-8 md:p-10">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Defined formats and sizes
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Bulk pricing based on volume and order frequency
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Lead times aligned with production scheduling
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
                <p className="text-[16px] leading-7 text-neutral-800 font-medium">
                  Ongoing supply prioritised over one-off orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply grades clarification */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[#EEE8E0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            Wholesale Supply Grades
          </h2>

          <p className="text-[17px] leading-8 text-neutral-700">
            Wholesale supply may be structured in different grades depending on
            volume, price parameters, and operational use case. Where required,
            hospitality-focused formulations are developed specifically for
            guest-use environments and bulk supply.
          </p>
        </div>
      </section>

      {/* Separation note + CTA */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            Need a Custom or Brand-Specific Product?
          </h2>

          <p className="text-[17px] leading-8 text-neutral-700">
            For custom formulations or brand-specific products, please refer to
            Private Label Manufacturing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Discuss Wholesale Supply Requirements
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