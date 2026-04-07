// components/WhyUsIcons.jsx
"use client";

export default function WhyUsIcons() {
  const items = [
    { title: "Balinese Heritage", desc: "Traditional botanicals reimagined." },
    { title: "Sustainable", desc: "Glass, bamboo & low-waste packaging." },
    { title: "In-house R&D", desc: "Custom formulation & small MOQ." },
    { title: "Certified", desc: "GMP, BPOM, Halal-ready." },
  ];

  return (
    <section className="py-16 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-olive text-center mb-8">Why partner with us</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-cream p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-olive/10 flex items-center justify-center text-olive font-bold">{it.title.charAt(0)}</div>
              <h4 className="font-semibold text-olive">{it.title}</h4>
              <p className="text-text-light mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
