import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-base font-semibold mb-3">Bali Spa Nature</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Naturally formulated, mindfully manufactured.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm opacity-95">
              <li>
                <Link className="hover:opacity-80 transition" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:opacity-80 transition"
                  href="/private-label"
                >
                  Private Label
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-80 transition" href="/wholesale">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-80 transition" href="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-80 transition" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-3">Contact</h3>
            <p className="text-sm opacity-90">info@balispanature.com</p>

            <div className="mt-6 text-xs opacity-75">
              © {new Date().getFullYear()} Bali Spa Nature. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
