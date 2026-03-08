"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  level?: number; // 0-100
}

export default function SkillBadge({ skill, level = 85 }: SkillBadgeProps) {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-light-900">{skill}</span>
        <span className="text-sm text-light-600">{level}%</span>
      </div>
      <div className="w-full bg-light-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
