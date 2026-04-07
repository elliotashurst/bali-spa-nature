"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.22, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.18, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname || "root"}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ minHeight: "calc(100vh - 220px)" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
