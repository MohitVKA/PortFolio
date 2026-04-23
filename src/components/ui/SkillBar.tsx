"use client";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm label-caps text-fg-muted">{name}</span>
      </div>
      <div className="w-full h-[1px] bg-themeborder overflow-hidden">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
}
