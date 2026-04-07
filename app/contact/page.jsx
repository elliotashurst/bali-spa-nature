import MiniHero from "@/components/MiniHero";

export const metadata = {
  title: "Contact & Enquiries | Bali Spa Nature",
  description:
    "Contact Bali Spa Nature to discuss manufacturing and wholesale supply partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <MiniHero
        title="Contact & Enquiries"
        subtitle="Bali Spa Nature works with hospitality and wellness businesses seeking manufacturing and wholesale supply partnerships."
        align="center"
        ctaPrimary={{ label: "Submit Enquiry for Review", href: "#contact-form" }}
        ctaSecondary={{ label: "Explore Product Categories", href: "/products" }}
      />

      <section
        id="contact-form"
        className="py-20 md:py-24 px-6 md:px-10 bg-[#F2EEE8]"
      >
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">

          {/* Contact context */}
          <div className="bg-white/70 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900">
              Enquiry Guidance
            </h2>

            <p className="mt-5 text-[16px] leading-7 text-neutral-700">
              Enquiries are reviewed based on operational fit and feasibility.
              Please provide as much relevant detail as possible to support initial assessment.
            </p>

            <div className="mt-8 space-y-4 text-[15px] text-neutral-700">
              <p>• Business name and location</p>
              <p>• Type of enquiry (private label or wholesale)</p>
              <p>• Product categories or requirements</p>
              <p>• Approximate volumes or order frequency</p>
            </div>

            <p className="mt-8 text-sm text-neutral-600">
              Response target: 2–3 business days.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <div>
                <div className="text-neutral-500">Email</div>
                <a
                  href="mailto:info@balispanature.com"
                  className="font-medium text-neutral-900 hover:underline"
                >
                  info@balispanature.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/70 rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-medium tracking-tight text-neutral-900">
              Submit Enquiry for Review
            </h3>

            <form className="mt-6 grid grid-cols-1 gap-4">

              <input
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                placeholder="Business name"
                name="business"
              />

              <input
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                placeholder="Contact name"
                name="name"
              />

              <input
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                placeholder="Email"
                type="email"
                name="email"
              />

              <input
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                placeholder="Country / region"
                name="region"
              />

              <select
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                name="enquiryType"
              >
                <option value="">Enquiry type</option>
                <option>Private Label Manufacturing</option>
                <option>Wholesale Supply</option>
                <option>General Business Enquiry</option>
              </select>

              <textarea
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                rows={5}
                placeholder="Project or supply description"
                name="description"
              />

              <input
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-black/30"
                placeholder="Approximate volumes or order frequency (optional)"
                name="volume"
              />

              <button type="submit" className="btn-primary">
                Submit Enquiry for Review
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer positioning note */}
      <section className="py-16 px-6 md:px-10 bg-[var(--page-bg)] text-center">
        <p className="text-[15px] text-neutral-600">
          Bali Spa Nature is currently focused on manufacturing and wholesale supply
          for hospitality and wellness partners.
        </p>
      </section>
    </>
  );
}