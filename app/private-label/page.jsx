import MiniHero from "@/components/MiniHero";
import PrivateLabelTimeline from "@/components/PrivateLabelTimeline";

export const metadata = {
 title: "Private Label Manufacturing for Hospitality & Wellness",
  description:
    "Private label manufacturing for hospitality and wellness businesses seeking structured long-term supply partnerships.",
};

export default function PrivateLabelPage() {
  return (
    <>
      <MiniHero
  title="Private Label Manufacturing"
  subtitle="Bali Spa Nature supports hospitality and wellness businesses seeking private label manufacturing partnerships. Projects are approached as structured manufacturing engagements rather than short-term retail launches."
  ctaPrimary={{ label: "Discuss a Private Label Manufacturing Project", href: "/contact" }}
  ctaSecondary={{ label: "Explore Product Categories", href: "/products" }}
/>

     

      {/* Process */}
      <PrivateLabelTimeline />

      {/* Project Parameters */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[#EEE8E0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-neutral-900 mb-12 leading-tight">
            Project Parameters
          </h2>

          <div className="bg-white/70 rounded-2xl p-8 md:p-10">
            <div className="space-y-5">
  <div className="flex items-start gap-3">
    <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
    <p className="text-[16px] leading-7 text-neutral-800 font-medium">
      Minimum order quantities defined per product and format
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
    <p className="text-[16px] leading-7 text-neutral-800 font-medium">
      Lead times include formulation and production phases
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
    <p className="text-[16px] leading-7 text-neutral-800 font-medium">
      Compliance support available where applicable
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900"></span>
    <p className="text-[16px] leading-7 text-neutral-800 font-medium">
      Packaging specifications defined during project briefing
    </p>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Partner Alignment */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            Partner Alignment
          </h2>

          <p className="text-[17px] leading-8 text-neutral-700">
            We work best with partners seeking long-term supply relationships.
            All private label projects are reviewed for feasibility, compliance,
            and production fit prior to acceptance.
          </p>

          <div className="mt-10">
            <a href="/contact" className="btn-primary">
              Discuss a Private Label Manufacturing Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}