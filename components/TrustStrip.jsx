"use client";

import { Package, Clock, Globe, MessageSquare } from "lucide-react";

const items = [
  {
    label: "MOQ",
    value: "Flexible",
    icon: Package,
  },
  {
    label: "Lead Time",
    value: "Defined per project",
    icon: Clock,
  },
  {
    label: "Export",
    value: "Global B2B",
    icon: Globe,
  },
  {
    label: "Response",
    value: "24–48h",
    icon: MessageSquare,
  },
];

export default function TrustStrip() {
  return (
    <section className="py-10 px-6 md:px-10 bg-[var(--page-bg)] border-t border-b border-black/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="group flex flex-col items-center gap-2">

              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--sand)]">
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className="text-[var(--olive)] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <p className="text-[11px] uppercase tracking-wide text-neutral-500">
                {item.label}
              </p>

              <p className="text-[15px] font-medium text-[var(--foreground)]">
                {item.value}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}