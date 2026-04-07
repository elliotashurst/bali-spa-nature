"use client";

import Link from "next/link";

export default function MobileStickyCTA({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[250] border-t border-black/10 bg-white/90 backdrop-blur px-4 py-3 md:hidden">
      <div className="mx-auto flex max-w-6xl gap-3">
        <Link
          href={primaryHref}
          className="flex-1 btn-primary text-center"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="flex-1 btn-secondary text-center"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}
