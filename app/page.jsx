import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import CertificationsSection from "@/components/CertificationsSection";

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
      <ProcessTimeline />
      <CertificationsSection />
      <USPSection />
    </div>
  );
}