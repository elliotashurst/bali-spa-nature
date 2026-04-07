import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";

export default function HomePage() {
  return (
    <div className="page-safe">
      <HeroSection
  title={`Private Label Spa & Hospitality Product Manufacturing`}

subtitle={`Manufactured in Indonesia for hotels, resorts, and wellness operators. Structured for consistency, compliance, and long-term supply.`}
        ctaPrimary={{ label: "Discuss a Private Label Project", href: "/private-label" }}
        ctaSecondary={{ label: "Explore Product Categories", href: "/products" }}
        plantImage="/hero-rice.jpg"
      />

      {/* softer transition from hero into content */}
      <div className="h-8 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),transparent)]" />

      {/* Bali Grounding Block */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#F2EEE8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            Rooted in Indonesia. Built for Professional Hospitality.
          </h2>

          <p className="text-[17px] leading-8 text-neutral-700">
            Bali Spa Nature manufactures spa and personal care products in Indonesia for hotels,
            resorts, and wellness operators. Our formulations draw from Indonesian botanical
            traditions and are executed through controlled, GMP-aligned production processes.
          </p>

          <p className="text-[17px] leading-8 text-neutral-700 mt-5">
            We focus on repeatability, compliance, and long-term supply relationships rather than
            retail trends.
          </p>
        </div>
      </section>

      {/* Process Block */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-neutral-900 mb-14 leading-tight">
            How Projects Move From Concept to Production
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="bg-white/55 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-3">
                Concept & Product Brief
              </h3>
              <p className="text-[16px] leading-7 text-neutral-700">
                Review of product intent, professional use case, volumes, and regulatory
                considerations.
              </p>
            </div>

            <div className="bg-white/55 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-3">
                Formulation & Sampling
              </h3>
              <p className="text-[16px] leading-7 text-neutral-700">
                Structured formulation development and refinement through sampling.
              </p>
            </div>

            <div className="bg-white/55 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-3">
                Production Planning & Compliance
              </h3>
              <p className="text-[16px] leading-7 text-neutral-700">
                Final specifications, documentation, and timelines confirmed prior to manufacture.
              </p>
            </div>

            <div className="bg-white/55 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-medium text-neutral-900 mb-3">
                Manufacturing & Ongoing Supply
              </h3>
              <p className="text-[16px] leading-7 text-neutral-700">
                Batch-based production with defined quality controls and repeat supply planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <USPSection />
    </div>
  );
}