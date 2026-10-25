"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import usePrefersReducedMotion from "@/components/animation/usePrefersReducedMotion";

import {
  shutterBottomVariants,
  shutterTopVariants,
} from "@/animations/variants";
import { businessInfo } from "@/constants/data/reusable";

const shutterSessionKey = "common-grounds-home-shutter-played";

export default function IntroShutter() {
  const [shouldShow, setShouldShow] = useState(false);
  const pathname = usePathname();
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = document.documentElement;

    if (pathname !== "/") {
      delete root.dataset.introShutter;
      return;
    }

    if (reduceMotion) {
      delete root.dataset.introShutter;
      return;
    }

    if (root.dataset.introShutter !== "active") {
      if (sessionStorage.getItem(shutterSessionKey)) return;

      sessionStorage.setItem(shutterSessionKey, "true");
      root.dataset.introShutter = "active";
    }

    const frameId = window.requestAnimationFrame(() => setShouldShow(true));
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, reduceMotion]);

  const completeShutter = () => {
    delete document.documentElement.dataset.introShutter;
    setShouldShow(false);
  };

  return (
    <div className="intro-shutter" aria-hidden="true">
      <motion.div
        className="intro-shutter__panel intro-shutter__panel--top"
        variants={shutterTopVariants}
        initial="closed"
        animate={shouldShow && !reduceMotion ? "open" : "closed"}
        onAnimationComplete={() => {
          if (shouldShow && !reduceMotion) completeShutter();
        }}
      >
        <div className="intro-shutter__brand">
          <span className="intro-shutter__name">{businessInfo.name}</span>
          <span className="intro-shutter__tagline">
            <span />
            {businessInfo.brandDescriptor}
            <span />
          </span>
        </div>
      </motion.div>
      <motion.div
        className="intro-shutter__panel intro-shutter__panel--bottom"
        variants={shutterBottomVariants}
        initial="closed"
        animate={shouldShow && !reduceMotion ? "open" : "closed"}
      />
    </div>
  );
}
