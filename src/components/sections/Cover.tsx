"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PageNumber from "../ui/PageNumber";
import { staggerContainer, fadeUp, pathDraw } from "@/lib/animations";

export default function Cover() {
  const { scrollY } = useScroll();
  // Subtly scale down the title when scrolling
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-bg">
      <motion.div 
        className="z-10 flex flex-col items-center text-center text-fg"
        style={{ scale }}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={fadeUp} className="text-sm label-caps tracking-[0.4em] mb-4">
          A R C H I T E C T U R E
        </motion.span>
        <motion.h1 variants={fadeUp} className="font-display font-bold text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-tight dark:text-gold-gradient">
          PORTFOLIO
        </motion.h1>
      </motion.div>

      {/* Animated SVG drawing */}
      <div className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] max-w-[800px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 600" className="w-full h-full stroke-fg fill-none" strokeWidth="1">
          <motion.g variants={staggerContainer} initial="hidden" animate="show">
            {/* Abstract building section lines */}
            <motion.path variants={pathDraw} d="M100 500 L700 500" />
            <motion.path variants={pathDraw} d="M200 500 L200 200 L400 150 L600 250 L600 500" />
            <motion.path variants={pathDraw} d="M250 500 L250 250 L350 220 L350 500" />
            <motion.path variants={pathDraw} d="M450 500 L450 250 L550 300 L550 500" />
            <motion.path variants={pathDraw} d="M150 500 L150 400 L200 400" />
            <motion.path variants={pathDraw} d="M600 350 L650 350 L650 500" />
            {/* Grid lines */}
            <motion.path variants={pathDraw} d="M200 300 L600 300" strokeDasharray="4 4" opacity="0.5"/>
            <motion.path variants={pathDraw} d="M200 400 L600 400" strokeDasharray="4 4" opacity="0.5"/>
          </motion.g>
        </svg>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 text-xs label-caps text-fg-muted text-right">
        MOHIT.S | SELECTED WORKS | 2022–2026
      </div>

      <PageNumber number="01" position="left" />

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-themeborder overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          className="w-full h-full bg-fg origin-top"
          animate={{ scaleY: [0, 1, 0], translateY: ["-100%", "0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
