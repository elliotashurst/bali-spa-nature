"use client";

import Image from "next/image";

export default function ProductClient({ product }) {
  if (!product) {
    return (
      <div className="p-20 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-olive mb-6 text-center">
        {product.name}
      </h1>

      {product.imageUrl && (
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={500}
          className="rounded-2xl shadow-md mx-auto mb-10"
        />
      )}

      <p className="text-text-light text-lg leading-relaxed mb-6 max-w-3xl mx-auto text-center">
        {product.description}
      </p>

      {product.price && (
        <p className="text-2xl text-olive font-semibold text-center">
          ${product.price}
        </p>
      )}
    </main>
  );
}
