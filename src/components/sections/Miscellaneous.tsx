"use client";

import { motion } from "framer-motion";
import PageNumber from "../ui/PageNumber";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Project } from "@/data/projects";

interface MiscellaneousProps {
  project: Project;
  pageNumLeft: string;
  pageNumRight: string;
}

export default function Miscellaneous({ project, pageNumLeft, pageNumRight }: MiscellaneousProps) {
  return (
    <div className="w-full h-full flex flex-col pt-32 pb-20 px-6 md:px-12 relative bg-bg">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 flex flex-col h-full"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-display label-caps mb-2">{project.title}</h2>
          <div className="text-sm font-mono tracking-widest text-fg-muted">{project.subtitle}</div>
          <p className="max-w-body mt-4 text-sm">{project.description[0]}</p>
        </motion.div>

        {/* 2x3 Grid */}
        <motion.div variants={fadeUp} className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 min-h-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-bg-surface relative group overflow-hidden">
               {/* Placeholder for smaller project images */}
               <div className="absolute inset-0 flex items-center justify-center opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
               <div className="absolute inset-0 bg-fg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <PageNumber number={pageNumLeft} position="left" />
      <PageNumber number={pageNumRight} position="right" />
    </div>
  );
}
