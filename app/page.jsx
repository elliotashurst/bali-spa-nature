import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import CertificationsSection from "@/components/CertificationsSection";

export default function HomePage() {
  return (
    <div className="page-safe">
      <HeroSection
        title={`Formulation-Led Manufacturing for Hospitality`}
        subtitle={`Bali Spa Nature develops and manufactures private-label and wholesale spa, amenity, and personal care products for hotels, resorts, spas, villas, and wellness operators across Indonesia.\n\nOur work combines Indonesian botanical formulation knowledge with structured development, controlled production, and long-term supply planning.`}
        ctaPrimary={{
          label: "Start a Private Label Project",
          href: "/private-label",
        }}
        ctaSecondary={{
          label: "Explore Manufacturing Capabilities",
          href: "/products",
        }}
        plantImage="/hero-rice.jpg"
      />

      {/* softer transition from hero into content */}
      <div className="h-8 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),transparent)]" />

      {/* Process Timeline */}
      <div className="-mt-6">
        <ProcessTimeline />
      </div>

      {/* Certifications */}
      <div className="-mt-8">
        <CertificationsSection />
      </div>

      {/* USP Section */}
      <div className="-mt-4">
        <USPSection />
      </div>

        {/* Manufacturing / QC Image Section */}
<section className="pb-8 px-6 md:px-10 bg-[var(--surface)]">
  <div className="max-w-6xl mx-auto">
    
    <div className="overflow-hidden rounded-[2rem] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <img
        src="/qc-testing.jpg"
        alt="Manufacturing quality control and formulation testing"
        className="h-[320px] md:h-[520px] w-full object-cover"
      />
    </div>

  </div>
</section>



      {/* Final CTA */}
      <section className="pt-10 pb-24 px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-black/5 bg-white/70 px-8 py-14 md:px-14 md:py-16 shadow-sm">
          <p className="eyebrow mb-4">Enquiries</p>

          <h2 className="heading-section">
            Start a Structured Manufacturing Conversation
          </h2>

          <p className="text-body-lg mt-6 max-w-2xl mx-auto">
            If your property or business requires private-label development or
            repeat wholesale supply, submit an enquiry for review.
          </p>

          <div className="mt-10">
            <a href="/contact" className="btn-primary">
              Submit Enquiry for Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}