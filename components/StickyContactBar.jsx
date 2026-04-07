"use client";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function StickyContactBar() {
  return (
    <div className="fixed right-6 bottom-10 z-[200] flex flex-col gap-5">
      <a className="premium-coin social-ic" href="#">
        <FaWhatsapp />
      </a>
      <a className="premium-coin social-ic" href="#">
        <FaEnvelope />
      </a>
    </div>
  );
}
