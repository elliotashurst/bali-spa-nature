"use client";

import { motion } from "framer-motion";

export default function ProductDetail({ product }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <motion.img
        src={product.imageUrl}
        className="w-full max-h-[500px] object-cover rounded-3xl shadow-lg mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <h1 className="text-4xl font-bold text-olive mb-4">{product.name}</h1>

      <p className="text-text-light text-lg leading-relaxed max-w-3xl">
        {product.description}
      </p>

      {product.price && (
        <p className="text-2xl text-olive font-semibold mt-6">
          ${product.price}
        </p>
      )}
    </div>
  );
}
