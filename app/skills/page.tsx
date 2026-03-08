"use client";

import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "@/lib/animations";
import SkillBadge from "@/components/SkillBadge";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 70 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 89 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 70 },
      { name: "REST APIs", level: 72 },

    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 73 },
    ],
  },
];

export default function Skills() {
  return (
    <motion.section
      className="min-h-screen py-20 px-6 bg-light-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-light-900 mb-12"
          variants={fadeInUp}
        >
          My <span className="text-primary">Skills</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              className="bg-white p-8 rounded-xl shadow-md border border-light-200"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-light-900 mb-6">
                {category.category}
              </h2>
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill.name} level={skill.level} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
