export default function TrustSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-olive">
          Trusted by Global Wellness Brands
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-text-light leading-relaxed">
          From boutique spas to international hospitality groups, brands trust
          Bali Spa Nature for consistent quality and ethical manufacturing.
        </p>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Exceptional quality and service.",
            "Reliable private label partner.",
            "Our go-to manufacturer in Bali.",
          ].map((quote, i) => (
            <div
              key={i}
              className="
                rounded-3xl border border-black/10 bg-[#F5F3EF]
                p-7 text-left
                shadow-[0_10px_25px_rgba(0,0,0,0.06)]
              "
            >
              <p className="text-gray-800 leading-relaxed">
                <span className="text-gray-600">“</span>
                <span className="italic">{quote}</span>
                <span className="text-gray-600">”</span>
              </p>
              <div className="mt-5 h-px w-full bg-black/10" />
              <p className="mt-4 text-xs text-black/60">
                Verified B2B partner
              </p>
            </div>
          ))}
        </div>

        {/* Accreditations */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["ISO Certified", "GMP Compliant", "Eco-Conscious Manufacturing"].map(
            (item) => (
              <span
                key={item}
                className="
                  rounded-full border border-black/15
                  px-4 py-2 text-sm text-black/70
                "
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
