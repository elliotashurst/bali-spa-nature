"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function RightRail() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[200] hidden lg:flex flex-col gap-5 pointer-events-none">
      <a
        className="premium-coin pointer-events-auto"
        href="#"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        className="premium-coin pointer-events-auto"
        href="#"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        className="premium-coin pointer-events-auto"
        href="#"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        className="premium-coin pointer-events-auto"
        href="#"
        aria-label="Email"
      >
        <MdEmail />
      </a>
    </div>
  );
}
