export default function TrustStrip({
  items = [
    { label: "MOQ", value: "On request" },
    { label: "Lead time", value: "On request" },
    { label: "Export", value: "Global B2B" },
    { label: "Compliance", value: "On request" },
  ],
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 -mt-8">
      <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-5 md:p-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="
                rounded-2xl border border-black/10 bg-white
                px-5 py-4
                transition
                hover:-translate-y-[1px]
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]
              "
            >
              <div className="text-xs tracking-wide uppercase text-black/50">
                {it.label}
              </div>
              <div className="mt-1.5 text-sm font-medium text-black/80">
                {it.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
