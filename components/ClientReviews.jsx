"use client";

export default function ClientReviews({ items = null }) {
  const defaultItems = [
    { author: "Resort Manager â€” Ubud", quote: "Exceptional product quality and timeline." },
    { author: "Spa Owner â€” Seminyak", quote: "We love the bespoke formulations." },
    { author: "Hotel Group â€” Bali", quote: "Reliable, premium, eco-friendly." },
  ];

  const list = items || defaultItems;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-olive text-center mb-8">What our clients say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((r, i) => (
          <blockquote key={i} className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-text-light mb-4">â€œ{r.quote}â€</p>
            <footer className="text-sm font-semibold text-olive">{r.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
