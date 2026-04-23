"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageNumber from "../ui/PageNumber";
import SectionDivider from "../ui/SectionDivider";
import { Project } from "@/data/projects";
import { staggerContainer, fadeUp, imageScale, fadeInDelay } from "@/lib/animations";

interface ProjectDetailProps {
  project: Project;
  pageNumLeft: string;
  pageNumRight: string;
}

export default function ProjectDetail({ project, pageNumLeft, pageNumRight }: ProjectDetailProps) {
  const axonImage = project.images.find(img => img.type === "axon");
  const renderImage = project.images.find(img => img.type === "render") || { src: project.coverImage, caption: "RENDER VIEW", type: "render" };

  return (
    <div className="w-full h-full flex flex-col bg-bg relative">
      {/* Header Bar */}
      <div className="h-10 w-full border-b border-themeborder flex items-center px-6 md:px-12 font-mono text-[10px] text-fg-muted uppercase tracking-widest absolute top-0 left-0 bg-bg z-20">
        <span className="hidden md:inline">{project.title} | {project.semester} | {project.year}</span>
        <span className="md:hidden">{project.title}</span>
      </div>

      <div className="flex-1 flex flex-col md:flex-row pt-10 h-[calc(100%-40px)]">
        {/* Left Page */}
        <div className="flex-1 relative p-6 md:p-12 md:pr-16 flex flex-col h-full overflow-hidden">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 flex flex-col h-full"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-3xl md:text-5xl font-display label-caps mb-2">{project.title}</h2>
              <div className="text-sm font-mono tracking-widest text-fg-muted">{project.subtitle}</div>
            </motion.div>
            
            <div className="flex-1 flex flex-col xl:flex-row gap-8 min-h-0 pb-12">
              {/* Axonometric / Wireframe */}
              <motion.div variants={fadeInDelay} className="w-full xl:w-[45%] h-full flex flex-col min-h-[300px]">
                <div className="flex-1 bg-bg-surface overflow-hidden relative flex items-center justify-center p-8">
                  {axonImage ? (
                    <Image 
                      src={axonImage.src} 
                      alt={axonImage.caption} 
                      fill 
                      className="object-contain filter opacity-80 mix-blend-multiply dark:mix-blend-screen p-8"
                      sizes="(max-width: 1280px) 100vw, 40vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
                  )}
                </div>
                <div className="text-caption mt-4">
                  {axonImage?.caption || "AXONOMETRIC VIEW"}
                </div>
              </motion.div>

              {/* Text Description */}
              <motion.div variants={fadeInDelay} className="w-full xl:w-[55%] flex flex-col overflow-y-auto pr-2 custom-scrollbar">
                <div className="text-base leading-relaxed columns-1 gap-8 text-justify">
                  {project.description.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono border border-themeborder px-2 py-1 text-fg-muted uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <PageNumber number={pageNumLeft} position="left" />
        </div>

        <SectionDivider />

        {/* Right Page */}
        <div className="flex-1 relative h-[50vh] md:h-full overflow-hidden flex flex-col bg-bg-surface">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full h-full relative group"
          >
            <motion.div variants={imageScale} className="w-full h-full filter saturate-[0.9] dark:saturate-100 group-hover:saturate-100 transition-all duration-700">
               {renderImage ? (
                  <Image 
                    src={renderImage.src} 
                    alt={renderImage.caption} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
               ) : (
                  <div className="w-full h-full flex items-center justify-center opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
               )}
            </motion.div>
            
            <motion.div variants={fadeUp} className="absolute bottom-6 left-6 md:left-12 text-caption text-fg z-10 font-bold">
              {renderImage?.caption || "AERIAL RENDER"}
            </motion.div>
          </motion.div>
          <PageNumber number={pageNumRight} position="right" />
        </div>
      </div>
    </div>
  );
}
