import MiniHero from "@/components/MiniHero";
import TrustStrip from "@/components/TrustStrip";

export const metadata = {
  title: "Contact Us | Bali Spa Nature",
  description:
    "Contact Bali Spa Nature to discuss private label manufacturing, wholesale products, or custom formulations.",
};

export default function ContactPage() {
  return (
    <>
      <MiniHero
        title="Contact Us"
        subtitle="Tell us what you're building — we’ll share catalogue options, MOQ guidance, and next steps."
        align="center"
        ctaPrimary={{ label: "Request Catalogue", href: "#contact-form" }}
        ctaSecondary={{ label: "View Products", href: "/products" }}
      />

      <TrustStrip
        items={[
          { label: "Response", value: "Typically 24–48h" },
          { label: "MOQ", value: "On request" },
          { label: "Export", value: "Global B2B" },
          { label: "Support", value: "Private label + wholesale" },
        ]}
      />

      <section
        id="contact-form"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Direct contact */}
          <div className="rounded-3xl bg-white border border-black/10 p-8 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight text-olive">
              Get in touch
            </h2>
            <p className="mt-4 text-text-light leading-relaxed">
              Share your brand concept, target market, and the type of products
              you’re interested in. We’ll reply with catalogue options and
              recommended next steps.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="rounded-2xl border border-black/10 p-4">
                <div className="text-black/60">Email</div>
                <a
                  href="mailto:info@balispanature.com"
                  className="mt-1 inline-block font-medium text-black/80 hover:underline"
                >
                  info@balispanature.com
                </a>
              </div>

              {/* Replace with your real WhatsApp link/number */}
              <div className="rounded-2xl border border-black/10 p-4">
                <div className="text-black/60">WhatsApp</div>
                <a
                  href="#"
                  className="mt-1 inline-block font-medium text-black/80 hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </div>

              {/* Replace with your real phone if you want */}
              <div className="rounded-2xl border border-black/10 p-4">
                <div className="text-black/60">Call</div>
                <a
                  href="#"
                  className="mt-1 inline-block font-medium text-black/80 hover:underline"
                >
                  Book a call (by request)
                </a>
              </div>
            </div>

            <p className="mt-8 text-xs text-black/50">
              Tip: include desired product types, estimated quantities, and your
              target launch timeline.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white border border-black/10 p-8 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
            <h3 className="text-lg font-semibold tracking-tight">
              Send a message
            </h3>

            <form className="mt-6 grid grid-cols-1 gap-4">
              <input
                className="w-full rounded-2xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-black/30"
                placeholder="Name"
                name="name"
              />

              <input
                className="w-full rounded-2xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-black/30"
                placeholder="Email"
                type="email"
                name="email"
              />

              <input
                className="w-full rounded-2xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-black/30"
                placeholder="Company / Brand (optional)"
                name="company"
              />

              <textarea
                className="w-full rounded-2xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-black/30"
                rows={6}
                placeholder="Tell us what you need (products, quantities, private label or wholesale, timeline)…"
                name="message"
              />

              <button type="submit" className="btn-primary">
                Send Message
              </button>

              <p className="text-xs text-black/50">
                By sending this message, you agree to be contacted about your
                enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
