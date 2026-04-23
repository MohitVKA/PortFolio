"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageNumber from "../ui/PageNumber";
import { projects } from "@/data/projects";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function TableOfContents() {
  return (
    <div className="w-full h-full flex flex-col pt-32 pb-20 px-6 md:px-12 relative bg-bg">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 flex flex-col md:flex-row h-full border-t border-themeborder"
      >
        {projects.map((project, i) => (
          <motion.div 
            key={project.id} 
            variants={fadeUp}
            className={`flex-1 flex flex-col pt-12 relative ${i !== projects.length - 1 ? 'md:border-r border-themeborder' : ''} px-4 md:px-8 group`}
          >
            {/* Thumbnail */}
            <div className="w-full aspect-square mb-12 overflow-hidden bg-bg-surface relative filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-700">
               {project.images.find(img => img.type === "axon") ? (
                  <Image 
                    src={project.images.find(img => img.type === "axon")!.src} 
                    alt={project.title} 
                    fill 
                    className="object-cover p-8 opacity-60"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
               ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
               )}
            </div>
            
            <div className="mt-auto pb-12">
              <div className="font-display text-[5rem] leading-none mb-4 group-hover:text-accent transition-colors duration-400">
                {project.number}
              </div>
              <h3 className="text-sm label-caps">
                {project.title}
              </h3>
              <p className="text-xs font-mono mt-2 text-fg-muted uppercase tracking-widest">
                {project.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <PageNumber number="04" position="left" />
      <PageNumber number="05" position="right" />
    </div>
  );
}
