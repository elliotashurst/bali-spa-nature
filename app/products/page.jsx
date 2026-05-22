import MiniHero from "@/components/MiniHero";
import Link from "next/link";

export const metadata = {
  title: "Manufacturing Capabilities | Bali Spa Nature",
  description:
    "Manufacturing capabilities for hospitality and wellness operators, including formulation, sampling, batch production, quality control, packaging coordination, and repeat supply support.",
};

const productionScope = [
  "Formulation and sampling",
  "Batch production",
  "Quality control checkpoints",
  "Production documentation",
  "Packaging coordination",
  "Ongoing supply planning",
];

const manufacturingCategories = [
  "Hospitality Amenities",
  "Professional Spa Products",
  "Hair & Personal Care",
  "Body Care & Treatment Oils",
  "Aromatherapy & Fragrance",
  "Wellness Formulations",
];

export default function ProductsPage() {
  return (
    <div className="page-safe">
      <MiniHero
        title="Manufacturing Capabilities"
        subtitle="Bali Spa Nature provides formulation, sampling, batch production, quality control, packaging coordination, and repeat supply support for hospitality and wellness operators."
        ctaPrimary={{ label: "Discuss Manufacturing Scope", href: "/contact" }}
        ctaSecondary={{
          label: "Start a Private Label Project",
          href: "/private-label",
        }}
      />
            {/* Production Equipment / Manufacturing Image */}
<section className="pt-6 pb-8 px-6 md:px-10 bg-[var(--page-bg)]">
  <div className="max-w-7xl mx-auto">
    <div className="overflow-hidden rounded-[2.25rem] border border-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
      <img
        src="/production-equipment.jpg"
        alt="Production equipment and manufacturing environment"
        className="h-[340px] md:h-[620px] w-full object-cover"
      />
    </div>
  </div>
</section>
      {/* Production Scope */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow mb-4">Production Scope</p>

            <h2 className="heading-section">Production Scope</h2>

            <p className="text-body-lg mt-5">
              Our production process is structured around defined formulation
              development, batch control, and repeat supply requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {productionScope.map((item) => (
              <div
                key={item}
                className="group rounded-3xl bg-white/70 border border-black/5 p-6 md:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sand)] bg-[var(--surface)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--olive)]" />
                  </div>

                  <p className="text-body font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Batch Production in Progress */}
<section className="pb-8 px-6 md:px-10 bg-[var(--page-bg)]">
  <div className="max-w-7xl mx-auto">
    
    <div className="overflow-hidden rounded-[2.25rem] border border-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
      <img
        src="/batch-production.jpg"
        alt="Batch production in progress"
        className="h-[320px] md:h-[560px] w-full object-cover"
      />
    </div>

  </div>
</section>
      {/* Formulation Standards */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Formulation Standards</p>

          <h2 className="heading-section">Formulation Standards</h2>

          <div className="mt-6 space-y-5">
            <p className="text-body-lg">
              Formulations are developed from proven botanical and production
              foundations, then refined to suit project requirements, hospitality
              use conditions, and approved specifications.
            </p>

            <p className="text-body-lg">
              Ingredient selection is based on formulation function, material
              behaviour, batch consistency, and suitability for professional-use
              environments.
            </p>

            <p className="text-body-lg">
              Essential oil and botanical inputs are treated as formulation
              decisions, not decorative claims. Approved compositions are
              documented and maintained across repeat production.
            </p>
          </div>
        </div>
      </section>
            {/* Ingredient Weighing / Measuring */}
<section className="pb-8 px-6 md:px-10 bg-[var(--page-bg)]">
  <div className="max-w-7xl mx-auto">
    
    <div className="overflow-hidden rounded-[2.25rem] border border-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
      <img
        src="/ingredient-weighing.jpg"
        alt="Ingredient weighing and formulation measuring process"
        className="h-[320px] md:h-[560px] w-full object-cover"
      />
    </div>

  </div>
</section>
      {/* Regulatory & Manufacturing Credentials */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow mb-4">Credentials</p>

            <h2 className="heading-section">
              Regulatory & Manufacturing Credentials
            </h2>

            <p className="text-body-lg mt-5">
              BSN supports hospitality and wellness projects with relevant
              manufacturing documentation and regulatory support where applicable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[2rem] bg-white/70 border border-black/5 p-8 md:p-10 shadow-sm">
              <p className="eyebrow mb-4">BPOM</p>

              <h3 className="heading-card">
                Badan Pengawas Obat dan Makanan
              </h3>

              <p className="text-body mt-5">
                Indonesia’s National Agency of Drug and Food Control. Relevant
                product registration and documentation support are managed
                according to product type and project requirements.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/70 border border-black/5 p-8 md:p-10 shadow-sm">
              <p className="eyebrow mb-4">CPKB</p>

              <h3 className="heading-card">
                Cara Pembuatan Kosmetika yang Baik
              </h3>

              <p className="text-body mt-5">
                Indonesia’s Good Manufacturing Practice standard for cosmetics.
                This supports production discipline, batch control, quality
                systems, and manufacturing environment standards.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Testing Stage */}
<section className="pb-8 px-6 md:px-10 bg-[var(--page-bg)]">
  <div className="max-w-7xl mx-auto">
    
    <div className="overflow-hidden rounded-[2.25rem] border border-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
      <img
        src="/testing-stage.jpg"
        alt="Product testing and formulation evaluation stage"
        className="h-[320px] md:h-[560px] w-full object-cover"
      />
    </div>

  </div>
</section>
      {/* Manufacturing Categories */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Capability Areas</p>

          <h2 className="heading-section">Manufacturing Categories</h2>

          <p className="text-body-lg mt-5">
            The categories below represent manufacturing capability areas.
            Specific formulations, formats, and specifications are confirmed
            during project briefing.
          </p>

          <div className="mt-12 border-y border-[var(--line-soft)]">
            {manufacturingCategories.map((item) => (
              <div
                key={item}
                className="border-b border-[var(--line-soft)] last:border-b-0 py-5"
              >
                <p className="text-lg md:text-xl font-medium tracking-tight text-[var(--text-main)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Production Parameters */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Production Parameters</p>

          <h2 className="heading-section">
            Packaging & Production Parameters
          </h2>

          <div className="mt-6 space-y-5">
            <p className="text-body-lg">
              Packaging formats, fill volumes, closure types, label requirements,
              and production schedules are defined during the project briefing
              and approval process.
            </p>

            <p className="text-body-lg">
              Minimum production volumes and lead time frameworks vary by product
              type, packaging format, formulation complexity, and production
              schedule.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Discuss Manufacturing Scope
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}