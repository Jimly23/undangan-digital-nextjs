"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = (): null => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1500,
      once: false,
      easing: 'ease-out-back',
    });
  }, []);

  return null;
};