"use client";

import { motion } from "framer-motion";
import SectionDivider from "../ui/SectionDivider";
import { aboutData } from "@/data/about";
import { staggerContainer, fadeUp, pathDraw } from "@/lib/animations";

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-bg">
      {/* Left Page - Blank Warm Page */}
      <div className="flex-1 relative bg-bg" />

      <SectionDivider />

      {/* Right Page - Back Cover */}
      <div className="flex-1 relative p-6 md:p-12 flex flex-col items-center justify-center bg-bg-surface overflow-hidden">
        
        {/* Cover Graphic Repeated */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] opacity-10 pointer-events-none">
          <svg viewBox="0 0 800 600" className="w-full h-full stroke-fg fill-none" strokeWidth="1">
            <motion.g variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.path variants={pathDraw} d="M100 500 L700 500" />
              <motion.path variants={pathDraw} d="M200 500 L200 200 L400 150 L600 250 L600 500" />
              <motion.path variants={pathDraw} d="M250 500 L250 250 L350 220 L350 500" />
              <motion.path variants={pathDraw} d="M450 500 L450 250 L550 300 L550 500" />
            </motion.g>
          </svg>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-auto text-center z-10 w-full flex flex-col items-center pb-12"
        >
          {/* Signature SVG Placeholder */}
          <motion.div variants={fadeUp} className="mb-12 opacity-80">
             <svg width="200" height="80" viewBox="0 0 200 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 60 Q 40 20, 60 50 T 100 40 T 140 60 T 180 30" />
                <path d="M50 40 L 70 40" />
             </svg>
          </motion.div>

          <motion.div variants={fadeUp} className="font-display label-caps text-2xl mb-4">
            {aboutData.name}
          </motion.div>

          <motion.div variants={fadeUp} className="font-mono text-xs text-fg-muted flex flex-col gap-2 uppercase tracking-widest">
            <a href={`mailto:${aboutData.contact.email}`} className="hover:text-accent transition-colors">
              {aboutData.contact.email}
            </a>
            <span>{aboutData.contact.phone}</span>
            <a href={`https://instagram.com/${aboutData.contact.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              {aboutData.contact.instagram}
            </a>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
