import MiniHero from "@/components/MiniHero";
import Link from "next/link";

export const metadata = {
  title: "Submit Enquiry for Review | Bali Spa Nature",
  description:
    "Submit a manufacturing, private label, or wholesale supply enquiry for review by Bali Spa Nature.",
};

const guidanceItems = [
  "Business / organisation name",
  "Business type",
  "Country / region",
  "Enquiry type",
  "Product category or manufacturing scope",
  "Approximate volume or order frequency",
  "Timeline",
  "Project description",
];

export default function ContactPage() {
  return (
    <div className="page-safe">
      <MiniHero
        title="Submit Enquiry for Review"
        subtitle="Bali Spa Nature reviews all enquiries for operational fit, production compatibility, volume alignment, and supply requirements before engagement proceeds."
        ctaPrimary={{ label: "Submit Enquiry for Review", href: "#enquiry-form" }}
        ctaSecondary={{
          label: "Explore Manufacturing Capabilities",
          href: "/products",
        }}
      />

      {/* Enquiry Guidance */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[var(--page-bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="eyebrow mb-4">Enquiry Guidance</p>

            <h2 className="heading-section">Before You Submit</h2>

            <div className="mt-6 space-y-5">
              <p className="text-body-lg">
                Please provide enough detail for initial assessment. Enquiries
                are reviewed based on project type, business fit, estimated
                volume, timeline, and manufacturing compatibility.
              </p>

              <p className="text-body-lg">
                We prioritise enquiries aligned with structured, repeat supply
                relationships.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {guidanceItems.map((item) => (
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

      {/* Contact form */}
      <section
        id="enquiry-form"
        className="py-16 md:py-20 px-6 md:px-10 bg-[var(--surface)]"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.4fr_0.8fr] gap-10 items-start">
          <div className="rounded-[2rem] bg-white/70 border border-black/5 p-7 md:p-10 shadow-sm">
            <div className="mb-8">
              <p className="eyebrow mb-4">Enquiry Form</p>

              <h2 className="heading-section">Submit Enquiry for Review</h2>
            </div>

            <form className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Organisation / Property Name *
                </label>
                <input
                  required
                  type="text"
                  name="organisation"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Contact Name *
                </label>
                <input
                  required
                  type="text"
                  name="contactName"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Country / Region *
                </label>
                <input
                  required
                  type="text"
                  name="countryRegion"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Business Type *
                </label>
                <input
                  required
                  type="text"
                  name="businessType"
                  placeholder="Hotel, resort, spa, villa group..."
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Enquiry Type *
                </label>
                <select
                  required
                  name="enquiryType"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  <option>Private Label Manufacturing</option>
                  <option>Wholesale Supply</option>
                  <option>Manufacturing Supply — Bulk & Repeat</option>
                  <option>General Business Enquiry</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Product Category / Manufacturing Scope *
                </label>
                <input
                  required
                  type="text"
                  name="manufacturingScope"
                  placeholder="Amenities, spa products, fragrance, body care..."
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Approximate Volume or Order Frequency *
                </label>
                <input
                  required
                  type="text"
                  name="volumeFrequency"
                  placeholder="Estimated monthly / quarterly requirement"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Anticipated Timeline *
                </label>
                <input
                  required
                  type="text"
                  name="timeline"
                  placeholder="Target launch or supply date"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[var(--text-main)] mb-2">
                  Project / Supply Description *
                </label>
                <textarea
                  required
                  name="description"
                  rows={6}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[var(--olive)]"
                />
              </div>

              <div className="md:col-span-2 pt-3">
                <button type="submit" className="btn-primary">
                  Submit Enquiry for Review
                </button>
              </div>
            </form>

            <div className="mt-8 space-y-4 border-t border-[var(--line-soft)] pt-6">
              <p className="text-body">
                Submissions are reviewed for production fit, volume alignment,
                and supply compatibility. Typical response window: 3–5 business
                days following qualification review. Where fit is confirmed, we
                will propose a structured next step.
              </p>

              <p className="text-body font-medium">
                Not all enquiries will proceed to engagement.
              </p>
            </div>
          </div>

          {/* Contact details */}
          <aside className="rounded-[2rem] bg-white/70 border border-black/5 p-7 md:p-8 shadow-sm">
            <p className="eyebrow mb-4">Contact Details</p>

            <h2 className="heading-card">Bali Spa Nature</h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--text-soft)]">
                  Address
                </p>
                <p className="text-body mt-2">
                  Jl. Gunung Anyar Sawah No. 73, Surabaya — Indonesia
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--text-soft)]">
                  Email
                </p>
                <p className="text-body mt-2">
                  <a href="mailto:contact@balispanature.com">
                    contact@balispanature.com
                  </a>
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--text-soft)]">
                  Phone
                </p>
                <p className="text-body mt-2">
                  <a href="tel:+62817595943">(+62) 817 595943</a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}