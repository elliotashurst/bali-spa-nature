"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function FadeInOnLoad({ children, delay = 0.35 }) {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
        );
      });
      return () => ctx.revert();
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={ref} className="opacity-0">
      {children}
    </div>
  );
}
