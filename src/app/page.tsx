"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Cover from "@/components/sections/Cover";
import About from "@/components/sections/About";
import TableOfContents from "@/components/sections/TableOfContents";
import ProjectDetail from "@/components/sections/ProjectDetail";
import Miscellaneous from "@/components/sections/Miscellaneous";
import Contact from "@/components/sections/Contact";
import { projects } from "@/data/projects";

// Sections mapped out
const sections = [
  { id: "cover", Component: Cover, props: {} },
  { id: "about", Component: About, props: {} },
  { id: "toc", Component: TableOfContents, props: {} },
  { id: "project-01", Component: ProjectDetail, props: { project: projects[0], pageNumLeft: "06", pageNumRight: "07" } },
  { id: "project-02", Component: ProjectDetail, props: { project: projects[1], pageNumLeft: "08", pageNumRight: "09" } },
  { id: "project-03", Component: ProjectDetail, props: { project: projects[2], pageNumLeft: "10", pageNumRight: "11" } },
  { id: "miscellaneous", Component: Miscellaneous, props: { project: projects[3], pageNumLeft: "12", pageNumRight: "13" } },
  { id: "contact", Component: Contact, props: {} },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up
  const isAnimating = useRef(false);
  
  const handleNavigate = useCallback((index: number) => {
    if (index === activeIndex || isAnimating.current) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) return;
      
      const threshold = 50; // minimum scroll amount
      if (e.deltaY > threshold) {
        if (activeIndex < sections.length - 1) {
          handleNavigate(activeIndex + 1);
        }
      } else if (e.deltaY < -threshold) {
        if (activeIndex > 0) {
          handleNavigate(activeIndex - 1);
        }
      }
    };

    // Touch support
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      const threshold = 50;
      if (diff > threshold) {
        if (activeIndex < sections.length - 1) handleNavigate(activeIndex + 1);
      } else if (diff < -threshold) {
        if (activeIndex > 0) handleNavigate(activeIndex - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating.current) return;
      
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        if (activeIndex < sections.length - 1) handleNavigate(activeIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (activeIndex > 0) handleNavigate(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, handleNavigate]);

  const CurrentComponent = sections[activeIndex].Component;
  const currentProps = sections[activeIndex].props;

  // The requested animation: a vertical "page turn" — outgoing section clips upward while incoming section reveals from below.
  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      zIndex: direction > 0 ? 1 : 0,
    }),
    center: {
      y: "0%",
      zIndex: 1,
    },
    exit: (direction: number) => ({
      clipPath: direction > 0 ? "inset(100% 0 0 0)" : "inset(0 0 0 0)",
      zIndex: 0,
    }),
  };

  return (
    <main className="w-full h-screen overflow-hidden bg-bg relative">
      <Navbar 
        activeIndex={activeIndex} 
        totalSections={sections.length} 
        onNavigate={handleNavigate} 
      />
      
      <AnimatePresence 
        initial={false} 
        custom={direction}
        onExitComplete={() => { isAnimating.current = false; }}
      >
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationStart={() => { isAnimating.current = true; }}
          transition={{
            y: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            clipPath: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* @ts-expect-error - Component props vary by section index */}
          <CurrentComponent {...currentProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
