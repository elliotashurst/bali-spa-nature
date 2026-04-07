export default function ReviewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-olive mb-12">
          Trusted by Global Spa & Hospitality Brands
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              quote:
                "Exceptional formulations and reliable manufacturing. Our guests love the products.",
              name: "Luxury Resort Group",
            },
            {
              quote:
                "Bali Spa Nature delivered a premium private-label range beyond expectations.",
              name: "Boutique Spa Brand",
            },
            {
              quote:
                "Outstanding attention to detail, sustainability, and consistency.",
              name: "Wellness Hotel Chain",
            },
          ].map((r, i) => (
            <blockquote
              key={i}
              className="bg-[var(--page-bg)] p-8 rounded-3xl shadow-sm"
            >
              <p className="text-text-light italic mb-6">“{r.quote}”</p>
              <footer className="font-semibold text-olive">
                — {r.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
