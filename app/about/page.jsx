import MiniHero from "@/components/MiniHero";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-safe">
      <MiniHero
        title="Founder-Led Formulation. Structured Manufacturing."
        subtitle="Bali Spa Nature was founded in 2009 by Susi Winarti and has developed into a formulation-led manufacturing business serving hospitality and wellness operators across Indonesia."
        ctaPrimary={{
          label: "Discuss a Manufacturing Partnership",
          href: "/contact",
        }}
        ctaSecondary={{
          label: "Explore Manufacturing Capabilities",
          href: "/products",
        }}
      />

      {/* The Work Behind the Work */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Founder-Led Formulation</p>

          <h2 className="heading-section">The Work Behind the Work</h2>

          <div className="mt-6 space-y-5">
            <p className="text-body-lg">
              Susi’s value is not only in knowing ingredients. It is in
              formulation judgement — understanding how materials behave, how
              scent reads across repeat guest use, how texture performs in humid
              environments, and how approved products can be reproduced
              consistently.
            </p>

            <p className="text-body-lg">
              This knowledge comes from doing the work repeatedly: developing,
              testing, correcting, producing, and supplying products for real
              hospitality conditions.
            </p>

            <p className="text-body-lg">
              Not as a story — but as something that performs.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing-Led by Design */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Manufacturing Discipline</p>

          <h2 className="heading-section">Manufacturing-Led by Design</h2>

          <div className="mt-6 space-y-5">
            <p className="text-body-lg">
              BSN operates as a manufacturing-first business. Products are
              formulated, sampled, documented, and produced through defined
              processes designed to support professional-use environments.
            </p>

            <p className="text-body-lg">
              Each engagement is approached as a manufacturing project, not a
              casual product request.
            </p>
          </div>
        </div>
      </section>

      {/* From Indonesian Formulation to Ongoing Supply */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Origin & Supply</p>

          <h2 className="heading-section">
            From Indonesian Formulation to Ongoing Supply
          </h2>

          <div className="mt-6 space-y-5">
            <p className="text-body-lg">
              The business is grounded in Indonesian botanical knowledge and
              practical manufacturing experience.
            </p>

            <p className="text-body-lg">
              Formulation, sampling, and production are structured to support
              private-label and wholesale partnerships through controlled stages
              from concept to supply.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing, Quality & Compliance */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow mb-4">Quality & Compliance</p>

            <h2 className="heading-section">
              Manufacturing, Quality & Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Manufacturing conducted in Indonesia",
              "CPKB-aligned production processes",
              "Batch-based production with defined quality checks",
              "BPOM support available where applicable",
              "Export documentation supported by destination market",
            ].map((item, index) => {
              const isLast = index === 4;

              return (
                <div
                  key={item}
                  className={`group rounded-3xl bg-white/70 border border-black/5 p-6 md:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)] ${
                    isLast ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sand)] bg-[var(--surface)]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--olive)]" />
                    </div>

                    <p className="text-body font-medium">{item}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--surface)] text-center">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-black/5 bg-white/70 px-8 py-14 md:px-14 md:py-16 shadow-sm">
          <p className="eyebrow mb-4">Private Label</p>

          <h2 className="heading-section">Start a Private Label Project</h2>

          <p className="text-body-lg mt-6 max-w-2xl mx-auto">
            Share your project requirements and we will review formulation fit,
            production suitability, and supply potential.
          </p>

          <div className="mt-10">
            <Link href="/private-label" className="btn-primary">
              Start a Private Label Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}