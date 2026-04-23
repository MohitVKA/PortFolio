"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Cover from "@/components/sections/Cover";
import About from "@/components/sections/About";
import TableOfContents from "@/components/sections/TableOfContents";
import ProjectDetail from "@/components/sections/ProjectDetail";
import Miscellaneous from "@/components/sections/Miscellaneous";
import Contact from "@/components/sections/Contact";
import { projects } from "@/data/projects";

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
  const [direction, setDirection] = useState(1);
  const lock = useRef(false);
  
  const handleNavigate = useCallback((index: number) => {
    if (index === activeIndex || lock.current) return;
    
    lock.current = true;
    
    let dir = index > activeIndex ? 1 : -1;
    if (activeIndex === sections.length - 1 && index === 0) dir = 1;
    if (activeIndex === 0 && index === sections.length - 1) dir = -1;

    setDirection(dir);
    setActiveIndex(index);
    
    setTimeout(() => {
      lock.current = false;
    }, 800);
  }, [activeIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (lock.current) return;
      if (Math.abs(e.deltaY) < 30) return;
      
      if (e.deltaY > 0) {
        handleNavigate((activeIndex + 1) % sections.length);
      } else {
        handleNavigate((activeIndex - 1 + sections.length) % sections.length);
      }
    };

    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const handleTouchEnd = (e: TouchEvent) => {
      if (lock.current) return;
      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;
      if (Math.abs(diff) > 50) {
        handleNavigate(diff > 0 ? (activeIndex + 1) % sections.length : (activeIndex - 1 + sections.length) % sections.length);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (lock.current) return;
      if (["ArrowDown", "ArrowRight", " ", "PageDown"].includes(e.key)) {
        handleNavigate((activeIndex + 1) % sections.length);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        handleNavigate((activeIndex - 1 + sections.length) % sections.length);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, handleNavigate]);

  const variants: Variants = {
    enter: (d: number) => ({
      y: d > 0 ? "100%" : "-100%",
      zIndex: d > 0 ? 1 : 0
    }),
    center: {
      y: "0%",
      zIndex: 1
    },
    exit: (d: number) => ({
      clipPath: d > 0 ? "inset(100% 0 0 0)" : "inset(0 0 0 0)",
      zIndex: 0
    }),
  };

  const Current = sections[activeIndex].Component;
  const props = sections[activeIndex].props;

  return (
    <main className="w-full h-screen overflow-hidden bg-bg relative">
      <Navbar activeIndex={activeIndex} totalSections={sections.length} onNavigate={handleNavigate} />
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* @ts-expect-error - Dynamic component props mismatch */}
          <Current {...props} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
