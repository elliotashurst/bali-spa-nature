import MiniHero from "@/components/MiniHero";
import Link from "next/link";

export default function ManufacturingCapabilitiesPage() {
  return (
    <div className="bg-[var(--page-bg)]">

      {/* HERO */}
      <MiniHero
        eyebrow="Manufacturing Capabilities"
        title="Formulation-Led Manufacturing for Hospitality and Wellness"
        subtitle="Bali Spa Nature supports hospitality, spa, villa, resort, and wellness partners through formulation-led product development, controlled batch production, packaging coordination, and repeat supply planning.

Every project is reviewed for formulation fit, production suitability, packaging requirements, compliance pathway, and long-term supply potential before work begins."
        ctaPrimary={{
          label: "Discuss Manufacturing Scope",
          href: "/contact",
        }}
        ctaSecondary={{
          label: "View Private Label Process",
          href: "/private-label",
        }}
      />

      {/* PRODUCTION SCOPE */}
      <section className="section-spacing px-6 md:px-10">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">Production Scope</p>

            <h2 className="heading-section">
              Manufacturing Capability Beyond Product Filling
            </h2>

            <p className="text-body-lg mt-6">
              Bali Spa Nature manufacturing capability covers more than product filling. Each suitable project is reviewed through formulation, sampling, specification, production, packaging, quality, and repeat supply considerations.
            </p>

            <p className="text-body-lg mt-5">
              
            </p>
          </div>

          {/* Capability Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "Formulation & Development",
                text: "Controlled product development based on existing formulation foundations, material selection, scent direction, texture, and intended hospitality use.",
              },
              {
                title: "Sampling & Specification",
                text: "Sample preparation, revision control, packaging direction, product format, and specification details reviewed before production",
              },
              {
                title: "Batch Production",
                text: "Production planning for approved formulations, operational quantities, packaging formats, and hospitality supply requirements.",
              },
              {
                title: "Quality Checks & Documentation",
                text: "Production records, batch checks, QC review points, and supporting documentation appropriate to the product type and project scope.",
              },
              {
                title: "Packaging Coordination",
                text: "Bottle, closure, label, refill, amenity, and bulk-format coordination based on the agreed product and supply model.",
              },
              {
                title: "Repeat Supply Planning",
                text: "Structured supply planning for hospitality and wellness operators requiring ongoing product availability and reorder consistency.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm"
              >
                <h3 className="heading-card">{item.title}</h3>

                <p className="text-body mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULATION & SAMPLING */}
      <section className="section-spacing px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 items-center">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-sm">
            <img
              src="/sampling-stage.jpg"
              alt="Formulation and sampling review"
              className="h-full w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="eyebrow mb-4">Formulation & Sampling</p>

            <h2 className="heading-section">
              Formulation and Sampling Before Production
            </h2>

            <p className="text-body-lg mt-6">
              Manufacturing begins with product purpose, hospitality use case, scent direction, texture, packaging format, and production suitability.
            </p>

            <p className="text-body-lg mt-5">
              Most private-label projects begin from BSN’s existing formulation foundations, then are adapted through controlled changes to scent direction, ingredient emphasis, texture, packaging, and professional-use requirements.

Where appropriate, samples are prepared and reviewed before production planning begins.
            </p>

            <ul className="mt-8 space-y-3 text-body">
              <li>• product brief review</li>
              <li>• formulation pathway selection</li>
              <li>• sample preparation</li>
              <li>• controlled revisions</li>
              <li>• material and scent direction review</li>
              <li>• packaging and use-case alignment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BATCH PRODUCTION */}
      <section className="section-spacing px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 items-center">

          {/* TEXT */}
          <div>
            <p className="eyebrow mb-4">Batch Production</p>

            <h2 className="heading-section">
              Batch Production for Hospitality and Professional Use
            </h2>

            <p className="text-body-lg mt-6">
              Approved products move into production through planned batch work,
              agreed formats, packaging requirements, and operational supply
              needs.
            </p>

            <p className="text-body-lg mt-5">
              The focus is consistency, practicality, and controlled output for
              hospitality and professional-use environments.
            </p>

            <ul className="mt-8 space-y-3 text-body">
              <li>• batch planning</li>
              <li>• mixing, filling, and finishing</li>
              <li>• production scheduling</li>
              <li>• operational quantities</li>
              <li>• hospitality and professional-use formats</li>
              <li>• repeat-order readiness</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-sm">
            <img
              src="/batch-production.jpg"
              alt="Batch production activity"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section-spacing px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 items-center">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-sm">
            <img
              src="/qc-review.jpg"
              alt="Quality review and documentation"
              className="h-full w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="eyebrow mb-4">Quality & Documentation</p>

            <h2 className="heading-section">
              Quality Checks and Production Records
            </h2>

            <p className="text-body-lg mt-6">
              Production work is supported by defined procedures, batch checks,
              documentation, and review points appropriate to the product type
              and project scope.
            </p>

            <p className="text-body-lg mt-5">
              Bali Spa Nature reviews production requirements, documentation needs, and quality checkpoints before suitable projects move into production.
            </p>

            <ul className="mt-8 space-y-3 text-body">
              <li>• ingredient and batch checks</li>
              <li>• production records</li>
              <li>• QC review points</li>
              <li>• formulation and specification references</li>
              <li>• retained documentation where applicable</li>
              <li>• BPOM-related review pathways where applicable</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="section-spacing px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-2 items-center">

          {/* TEXT */}
          <div>
            <p className="eyebrow mb-4">Packaging & Repeat Supply</p>

            <h2 className="heading-section">
              Packaging Coordination and Repeat Supply
            </h2>

            <p className="text-body-lg mt-6">
              Product supply depends on more than formula development. Bali Spa
              Nature supports packaging format, label coordination, refill or bulk formats, finished-goods preparation, and repeat supply planning for hospitality and wellness operations
            </p>

            <ul className="mt-8 space-y-3 text-body">
              <li>• bottles, jars, closures, and labels</li>
              <li>• amenity and professional-use packaging</li>
              <li>• refill and bulk supply formats</li>
              <li>• finished goods coordination</li>
              <li>• reorder planning and repeat supply</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[2rem] border border-black/5 shadow-sm">
            <img
              src="/packaging-coordination.jpg"
              alt="Packaging and repeat supply"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MANUFACTURING AREAS */}
<section className="section-spacing px-6 md:px-10">
  <div className="max-w-6xl mx-auto">

    <div className="max-w-3xl mx-auto text-center">
      <p className="eyebrow mb-4">Manufacturing Areas Supported</p>

      <h2 className="heading-section">
        Hospitality and Wellness Product Categories
      </h2>

      <p className="text-body-lg mt-6">
        Manufacturing capability areas are reviewed according to
        formulation requirements, packaging format, operational
        suitability, and repeat supply expectations.
      </p>
    </div>

    <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Hospitality Amenities",
          text: "Shampoo, conditioner, body wash, body lotion, hand wash, bar soap, room and linen products, and related guest-use formats.",
        },
        {
          title: "Professional Spa Products",
          text: "Massage oils, scrubs, masks, bath soaks, treatment products, backbar formats, and professional-use body care.",
        },
        {
          title: "Hair & Personal Care",
          text: "Shampoo, conditioner, body wash, hand wash, lotions, creams, and related personal care formats.",
        },
        {
          title: "Aromatherapy & Fragrance",
          text: "Essential oil blends, room sprays, linen mists, diffuser formats, and scent-led hospitality products.",
        },
        {
          title: "Bulk & Refill Formats",
          text: "Operational supply formats for spas, villas, resorts, and hospitality teams requiring repeat product availability.",
        },
        {
          title: "Packaging & Presentation Coordination",
          text: "Bottles, jars, closures, labels, refill packaging, amenity formats, and basic presentation coordination.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-[1.5rem] border border-black/5 bg-white/60 px-6 py-6 shadow-sm transition-all duration-300 hover:bg-white/80"
        >
          <h3 className="text-[15px] md:text-[16px] font-medium tracking-[-0.01em] text-[var(--heading)]">
            {item.title}
          </h3>

          <p className="mt-3 text-[14px] leading-7 text-[var(--text-body)]/80">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* REGULATORY */}
      <section className="section-spacing px-6 md:px-10">
        <div className="max-w-5xl mx-auto">

          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">
              Manufacturing Discipline
            </p>

            <h2 className="heading-section">
              Regulatory Awareness and Manufacturing Discipline
            </h2>
            <p className="text-body-lg mt-6">
            Bali Spa Nature operates in a regulated cosmetic and personal care environment. Product requirements, documentation needs, and BPOM-related pathways are reviewed according to product type, formula, packaging, and project scope.
          </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
              <h3 className="heading-card">
                BPOM Support Where Applicable
              </h3>

              <p className="text-body mt-4">
                Product registration and documentation support can be reviewed depending on product type, project scope, and Indonesian regulatory requirements.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-sm">
              <h3 className="heading-card">
                CPKB-Aligned Production Practices
              </h3>

              <p className="text-body mt-4">
                Production is managed through defined procedures, batch control, quality checks, and documentation practices aligned with cosmetic manufacturing expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION */}
      <section className="section-spacing px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">

          <p className="eyebrow mb-4">
            Before Production Begins
          </p>

          <h2 className="heading-section">
            Project Fit and Qualification Review
          </h2>

          <p className="text-body-lg mt-6">
            Manufacturing enquiries are reviewed for product type, formulation
            pathway, packaging requirements, estimated volume, timeline, and
            repeat supply potential.
          </p>
            <p className="text-body-lg mt-6">
            Where there is a good fit, Bali Spa Nature will recommend the appropriate next step: private-label development, wholesale supply, or manufacturing scope review.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">
            {[
              "business type",
              "intended product use",
              "product format",
              "formulation pathway",
              "packaging requirements",
              "estimated volume",
              "timeline",
              "repeat supply potential",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/5 bg-white/70 px-5 py-4 text-body shadow-sm"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pt-10 pb-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-black/5 bg-white/70 px-8 py-14 md:px-14 md:py-16 text-center shadow-sm">

          <p className="eyebrow mb-4">
            Manufacturing Enquiries
          </p>

          <h2 className="heading-section">
            Ready to Review a Manufacturing Requirement?
          </h2>

          <p className="text-body-lg mt-6 max-w-2xl mx-auto">
            Share your product type, intended use, volume expectation, packaging
            direction, and timeline. Bali Spa Nature will review whether the
            project aligns with its formulation and production model.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Submit Enquiry for Review
            </Link>

            <Link
              href="/private-label"
              className="btn-secondary"
            >
              View Private Label Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}