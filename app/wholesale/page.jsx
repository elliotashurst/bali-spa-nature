import MiniHero from "@/components/MiniHero";
import Link from "next/link";

export const metadata = {
  title: "Wholesale Supply for Hospitality & Wellness Operators",
  description:
    "Wholesale supply for hospitality and wellness businesses seeking ongoing bulk orders and repeat operational use.",
};

const ownBrandBullets = [
  "Finished Bali Spa Nature product range",
  "Hospitality-appropriate formats",
  "Repeat ordering available",
  "Suitable where private-label development is not required",
];

const manufacturingSupplyBullets = [
  "Bulk and operational formats",
  "Repeat supply planning",
  "Batch-based production",
  "Volume-aligned scheduling",
  "Suitable for operators requiring reliable supply without development complexity",
];

function BulletCard({ item }) {
  return (
    <div className="group rounded-3xl bg-white/70 border border-black/5 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_18px_45px_rgba(74,93,82,0.14)]">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sand)] bg-[var(--surface)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--olive)]" />
        </div>

        <p className="text-body font-medium">{item}</p>
      </div>
    </div>
  );
}

export default function WholesalePage() {
  return (
    <>
      <MiniHero
        title="Wholesale Supply for Hospitality Operations"
        subtitle="Wholesale supply is structured for hospitality operators requiring reliable product availability, defined formats, and repeat operational use."
        ctaPrimary={{
          label: "Discuss Wholesale Supply Requirements",
          href: "/contact",
        }}
        ctaSecondary={{
          label: "Explore Manufacturing Capabilities",
          href: "/products",
        }}
      />

      {/* Wholesale Supply Streams */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow mb-4">Wholesale</p>

            <h2 className="heading-section">Wholesale Supply Streams</h2>

            <p className="text-body-lg mt-5">
              Bali Spa Nature wholesale supply operates across two streams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Stream 1 */}
            <div className="rounded-[2rem] bg-white/65 border border-black/5 p-7 md:p-9 shadow-sm">
              <p className="eyebrow mb-4">Stream 1</p>

              <h3 className="heading-card">
                Bali Spa Nature Own-Brand Wholesale
              </h3>

              <div className="mt-5 space-y-5">
                <p className="text-body">
                  For operators requiring reliable supply without development
                  complexity, Bali Spa Nature own-brand products are available in
                  selected hospitality-appropriate formats.
                </p>

                <p className="text-body">
                  This stream is suitable for hotels, resorts, villas, spas, and
                  wellness operators seeking existing product solutions for
                  guest-use or professional-use environments.
                </p>
              </div>

              <div className="mt-8 grid gap-4">
                {ownBrandBullets.map((item) => (
                  <BulletCard key={item} item={item} />
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-secondary">
                  Request Wholesale Information
                </Link>
              </div>
              {/* Operational Context Image */}
<div className="my-8 overflow-hidden rounded-[1.75rem] border border-black/5">
  <img
    src="/wholesale-operational-context.jpg"
    alt="Bali Spa Nature products in hospitality operational context"
    className="h-[260px] md:h-[320px] w-full object-cover"
  />
</div>
            </div>

            {/* Stream 2 */}
            <div className="rounded-[2rem] bg-white/65 border border-black/5 p-7 md:p-9 shadow-sm">
              <p className="eyebrow mb-4">Stream 2</p>

              <h3 className="heading-card">
                Manufacturing Supply — Bulk & Repeat
              </h3>

              <div className="mt-5 space-y-5">
                <p className="text-body">
                  For operators requiring bulk or repeat supply outside a full
                  private-label development pathway, manufacturing supply can be
                  structured around confirmed product specifications, production
                  volumes, and scheduled batch cycles.
                </p>
              </div>

              <div className="mt-8 grid gap-4">
                {manufacturingSupplyBullets.map((item) => (
                  <BulletCard key={item} item={item} />
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-olive">
                  Discuss Manufacturing Supply
                </Link>
              </div>
              {/* Manufacturing Supply Image */}
<div className="my-8 overflow-hidden rounded-[1.75rem] border border-black/5">
  <img
    src="/manufacturing-supply.jpg"
    alt="Manufacturing supply and batch-based production"
    className="h-[260px] md:h-[320px] w-full object-cover"
  />
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom or Brand-Specific Products */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-black/5 bg-white/70 px-8 py-14 md:px-14 md:py-16 shadow-sm">
          <p className="eyebrow mb-4">Custom Development</p>

          <h2 className="heading-section">
            Custom or Brand-Specific Products
          </h2>

          <p className="text-body-lg mt-6 max-w-2xl mx-auto">
            Where custom formulations, brand-specific products, or packaging-led
            development are required, enquiries should be directed to Private
            Label Manufacturing.
          </p>

          <div className="mt-10">
            <Link href="/private-label" className="btn-primary">
              Private Label Manufacturing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}