"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {
  if (!products?.length) {
    return (
      <p className="text-center py-24 text-text-light">
        No products found.
      </p>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-12
      "
    >
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </motion.div>
  );
}
