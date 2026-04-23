"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageNumber from "../ui/PageNumber";
import SkillBar from "../ui/SkillBar";
import SectionDivider from "../ui/SectionDivider";
import { aboutData } from "@/data/about";
import { staggerContainer, fadeUp, fadeInDelay } from "@/lib/animations";
// Let's just import from about and skills respectively.

// Re-importing locally to ensure it works
import { skills as skillData } from "@/data/skills";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-bg">
      {/* Left Page */}
      <div className="flex-1 relative p-6 md:p-12 md:pr-16 flex flex-col pt-24 md:pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 flex flex-col"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display label-caps mb-12">
            A B O U T
          </motion.h2>

          <div className="flex flex-col xl:flex-row gap-8 flex-1">
            <motion.div variants={fadeInDelay} className="w-full xl:w-1/2 aspect-[3/4] bg-bg-surface overflow-hidden relative filter grayscale-[50%] hover:grayscale-0 transition-all duration-700">
              {/* Image Placeholder */}
              <Image 
                src="/images/portrait-placeholder.svg" 
                alt="Mohit S" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
            </motion.div>
            
            <motion.div variants={fadeInDelay} className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-base max-w-body mb-8 leading-relaxed">
                  {aboutData.bio}
                </p>
              </div>

              <div className="mt-auto">
                <div className="text-sm label-caps text-fg-muted mb-2">Contact</div>
                <div className="text-base font-mono">
                  <p>{aboutData.contact.email}</p>
                  <p>{aboutData.contact.phone}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <PageNumber number="02" position="left" />
      </div>

      <SectionDivider />

      {/* Right Page */}
      <div className="flex-1 relative p-6 md:p-12 md:pl-16 flex flex-col pt-12 md:pt-32 pb-20 overflow-y-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[500px]"
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h3 className="text-sm label-caps mb-6">Education</h3>
            {aboutData.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between font-mono text-sm mb-1">
                  <span>{edu.degree}</span>
                  <span className="text-fg-muted">{edu.years}</span>
                </div>
                <div className="text-base">{edu.institution}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mb-12">
            <h3 className="text-sm label-caps mb-6">Experience</h3>
            {aboutData.experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between font-mono text-sm mb-1">
                  <span>{exp.role}</span>
                  <span className="text-fg-muted">{exp.years}</span>
                </div>
                <div className="text-base">{exp.company}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mb-12">
            <h3 className="text-sm label-caps mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8 text-sm font-mono text-fg-muted">
              {aboutData.softwareSkills.map((skill, i) => (
                <div key={i}>{skill}</div>
              ))}
            </div>
            
            {skillData.map((skill, i) => (
              <SkillBar key={i} name={skill.name} percentage={skill.percentage} />
            ))}
          </motion.div>
        </motion.div>
        
        <PageNumber number="03" position="right" />
      </div>
    </div>
  );
}
