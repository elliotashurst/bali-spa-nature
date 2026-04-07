"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CATEGORY_LABELS = {
  amenities: "Hotel & Villa Amenities",
  skincare: "Boutique Skincare",
  "body-care": "Natural Body Care",
  "spa-professional": "Professional Spa Treatments",
  "home-fragrance": "Home Fragrance",
  "hair-care": "Hair Care",
  specialty: "Specialty",
};

function prettyType(value) {
  if (!value) return null;
  return value
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function ProductCard({ product }) {
  const slug = product?.slug;

  const categoryLabel = product?.category
    ? CATEGORY_LABELS[product.category] || product.category
    : null;

  const typeLabel = product?.productType ? prettyType(product.productType) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="
        bg-white rounded-3xl overflow-hidden
        shadow-[0_12px_30px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)]
        transition-shadow
        group
      "
    >
      <Link href={slug ? `/products/${slug}` : "/products"}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name || "Product"}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="
                object-cover
                transition-transform duration-700
                group-hover:scale-[1.06]
              "
            />
          )}

          {/* Badges */}
          {(categoryLabel || typeLabel) && (
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {categoryLabel && (
                <span className="rounded-full bg-white/85 backdrop-blur border border-black/10 px-3 py-1 text-[11px] font-medium text-black/80">
                  {categoryLabel}
                </span>
              )}
              {typeLabel && (
                <span className="rounded-full bg-white/85 backdrop-blur border border-black/10 px-3 py-1 text-[11px] font-medium text-black/70">
                  {typeLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold text-olive mb-2">
            {product.name}
          </h3>

          {product.description && (
            <p className="text-sm text-text-light line-clamp-3 mb-4">
              {product.description}
            </p>
          )}

          <span className="inline-block btn-secondary">
            View Product
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
