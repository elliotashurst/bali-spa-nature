"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[200] hidden lg:flex flex-col gap-5 pointer-events-none">
      <a
        className="premium-coin social-ic pointer-events-auto"
        href="#"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        className="premium-coin social-ic pointer-events-auto"
        href="#"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
