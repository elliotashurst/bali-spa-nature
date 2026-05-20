import Link from "next/link";
import Image from "next/image";

const navLinks = [
  ["Home", "/"],
  ["Private Label", "/private-label"],
  ["Wholesale", "/wholesale"],
  ["Manufacturing Capabilities", "/products"],
  ["About", "/about"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand summary */}
          <div>
            <h2 className="text-xl font-medium tracking-tight text-white">
              Bali Spa Nature
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/78">
              Bali Spa Nature is a formulation-led manufacturing partner for
              hospitality and wellness operators.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {navLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm leading-6 text-white/82 transition-colors duration-300 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + credentials */}
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
              Contact
            </h3>

            <div className="mt-5">
              <a
                href="mailto:contact@balispanature.com"
                className="text-sm leading-6 text-white/82 transition-colors duration-300 hover:text-white"
              >
                contact@balispanature.com
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="flex h-14 items-center">
                  <Image
                    src="/bpom-logo.png"
                    alt="BPOM"
                    width={90}
                    height={52}
                    className="h-11 w-auto object-contain opacity-90"
                  />
                </div>

                <p className="mt-2 text-[11px] leading-5 text-white/58">
                  BPOM support where applicable.
                </p>
              </div>

              <div>
                <div className="flex h-14 items-center">
                  <Image
                    src="/cpkb-logo.png"
                    alt="CPKB"
                    width={90}
                    height={52}
                    className="h-11 w-auto object-contain opacity-90"
                  />
                </div>

                <p className="mt-2 text-[11px] leading-5 text-white/58">
                  CPKB-aligned production.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-[11px] leading-6 text-white/50">
            © {new Date().getFullYear()} Bali Spa Nature. Manufacturing and
            wholesale supply for hospitality and wellness partners.
          </p>
        </div>
      </div>
    </footer>
  );
}