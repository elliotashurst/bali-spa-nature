"use client";

import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, image }) {
  return (
    <section
      className="h-[50vh] md:h-[60vh] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/70 to-beige/40"></div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-olive drop-shadow-sm">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
