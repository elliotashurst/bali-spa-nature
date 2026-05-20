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
  title="Private Label Manufacturing for Hospitality"
  subtitle="Bali Spa Nature supports hospitality and wellness businesses seeking structured private-label manufacturing partnerships. Projects are reviewed for formulation fit, production compatibility, volume alignment, and long-term supply potential before development begins."
  ctaPrimary={{ label: "Start a Private Label Project", href: "/contact" }}
  ctaSecondary={{ label: "Explore Manufacturing Capabilities", href: "/products" }}
/>

     

      {/* Process */}
      <PrivateLabelTimeline />

      {/* What Can Be Customised */}
<section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
  <div className="max-w-5xl mx-auto">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <p className="eyebrow mb-4">Customisation</p>

      <h2 className="heading-section">
        What Can Be Customised
      </h2>

      <p className="text-body-lg mt-5">
        Private-label projects may include customisation across:
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Scent direction and essential oil profile",
        "Ingredient emphasis and botanical positioning",
        "Active ingredients where suitable",
        "Texture and usage profile",
        "Packaging format and label requirements",
        "Hospitality use case and operational format",
      ].map((item) => (
        <div
          key={item}
          className="group rounded-3xl bg-white/70 border border-black/5 p-6 md:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sand)] bg-[var(--surface)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--olive)]" />
            </div>

            <p className="text-body font-medium">
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="max-w-3xl mx-auto text-center mt-12">
      <p className="text-body-lg">
        Customisation is structured. It is not unlimited open-ended product
        development.
      </p>
    </div>
  </div>
</section>

      {/* Project Parameters */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#EEE8E0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-neutral-900 mb-12 leading-tight">
            Project Structure & Parameters
          </h2>

          <div className="bg-white/70 rounded-2xl p-8 md:p-10">
            <div className="space-y-5">
 <div className="grid md:grid-cols-2 gap-6">
  {[
    "Minimum order quantities are defined by product type and format",
    "Lead times include formulation, sampling, approval, and production phases",
    "Compliance support is available where applicable",
    "Packaging specifications are confirmed during project briefing",
  ].map((item) => (
    <div
      key={item}
      className="group rounded-3xl bg-white/70 border border-black/5 p-6 md:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sand)] bg-[var(--surface)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--olive)]" />
        </div>

        <p className="text-body font-medium">
          {item}
        </p>
      </div>
    </div>
  ))}
</div>

{/* Centered final item */}
<div className="mt-6 max-w-xl mx-auto">
  <div className="group rounded-3xl bg-white/70 border border-black/5 p-6 md:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]">
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sand)] bg-[var(--surface)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--olive)]" />
      </div>

      <p className="text-body font-medium">
        Repeat orders are produced against confirmed specifications
      </p>
    </div>
  </div>
</div>
  
</div>
          </div>
        </div>
      </section>

      {/* Partner Alignment */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            Partner Alignment
          </h2>

          <p className="text-[17px] leading-8 text-neutral-700">
            We work best with partners seeking structured, long-term supply relationships. All private-label projects are reviewed for feasibility, compliance, production fit, and repeat supply potential before acceptance.
          </p>

          <div className="mt-10">
            <a href="/contact" className="btn-primary">
              Submit Private Label Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}