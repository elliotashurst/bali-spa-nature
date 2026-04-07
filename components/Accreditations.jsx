export default function Accreditations() {
  return (
    <section className="bg-[var(--page-bg)] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-80">
          {[
            "/accreditations/gmp.png",
            "/accreditations/iso.png",
            "/accreditations/eco.png",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Certification logo"
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
