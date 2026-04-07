// components/PortfolioGrid.jsx
"use client";

import { motion } from "framer-motion";

const items = [
  { id: 1, title: "Resort Project A", subtitle: "Private Label" },
  { id: 2, title: "Hotel Collection B", subtitle: "Wholesale" },
  { id: 3, title: "Boutique Brand C", subtitle: "Private Label" },
  { id: 4, title: "Spa Line D", subtitle: "Wholesale" },
  { id: 5, title: "Signature Range E", subtitle: "Portfolio" },
  { id: 6, title: "Custom Set F", subtitle: "Private Label" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function PortfolioGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={card}
          className="bg-cream rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
        >
          <div className="h-40 rounded-xl bg-gradient-to-br from-olive/20 to-bronze/10 mb-4 flex items-center justify-center text-xl text-olive font-semibold">
            {item.title}
          </div>
          <h3 className="font-semibold text-text-dark">{item.title}</h3>
          <p className="text-text-light mt-2">{item.subtitle}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
