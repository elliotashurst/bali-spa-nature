import MiniHero from "@/components/MiniHero";
import TrustStrip from "@/components/TrustStrip";

export const metadata = {
  title: "Private Label Manufacturing | Bali Spa Nature",
  description:
    "Launch your own spa or wellness brand with Bali Spa Nature’s private label manufacturing services.",
};

export default function PrivateLabelPage() {
  return (
    <>
      <MiniHero
        title="Private Label Manufacturing"
        subtitle="Create your own luxury spa or wellness brand with expert formulation and sustainable production."
        ctaPrimary={{ label: "Request Catalogue", href: "/contact" }}
        ctaSecondary={{ label: "View Products", href: "/products" }}
      />

      <TrustStrip />

      {/* Core value proposition */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-olive">
          End-to-End Manufacturing
        </h2>

        <p className="mt-5 text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
          From formulation and packaging to compliance and logistics, we help
          you bring premium wellness products to market — efficiently,
          ethically, and at scale.
        </p>
      </section>

      {/* Process overview */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Formulation & R&D",
              text: "Custom formulations developed by our in-house experts using high-quality botanicals.",
            },
            {
              title: "Design & Packaging",
              text: "Packaging guidance, label support, and sustainable material options.",
            },
            {
              title: "Production & Compliance",
              text: "Scalable manufacturing with export-ready documentation and quality control.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl bg-white border border-black/10
                p-7 text-center
                shadow-[0_10px_25px_rgba(0,0,0,0.06)]
              "
            >
              <h3 className="text-lg font-semibold text-olive">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
