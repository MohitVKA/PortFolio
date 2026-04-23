"use client";

import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

interface NavbarProps {
  activeIndex: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

export default function Navbar({ activeIndex, totalSections, onNavigate }: NavbarProps) {
  const isCover = activeIndex === 0;

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full h-header z-50 flex items-center justify-between px-6 md:px-12 transition-colors duration-400"
      style={{
        backgroundColor: isCover ? "transparent" : "var(--bg)",
        borderBottom: isCover ? "1px solid transparent" : "1px solid var(--border)",
      }}
    >
      <div className="flex-1">
        <span className="font-display label-caps text-sm cursor-pointer" onClick={() => onNavigate(0)}>
          M.S
        </span>
      </div>

      <div className="flex-1 flex justify-center items-center gap-3">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className="w-1.5 h-1.5 rounded-full transition-colors duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              backgroundColor: activeIndex === i ? "var(--accent)" : "var(--border)",
            }}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      <div className="flex-1 flex justify-end">
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
