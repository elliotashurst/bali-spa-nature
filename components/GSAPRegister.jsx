"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPRegister() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!gsap.core.globals().ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }
    }
  }, []);

  return null;
}
