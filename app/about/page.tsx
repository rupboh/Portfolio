"use client";

import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "@/lib/animations";

export default function About() {
  return (
    <motion.section
      className="min-h-screen py-20 px-6 bg-light-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-light-900 mb-12"
          variants={fadeInUp}
        >
          About <span className="text-primary">Me</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <p className="text-lg text-light-700 mb-6 leading-relaxed">
              I am a software developer passionate about building practical and impactful digital solutions. I have hands-on experience developing real-world projects using technologies such as JavaScript, React, React Native, and SQL, with a strong focus on creating efficient and user-friendly applications.

            </p>
            <p className="text-lg text-light-700 mb-6 leading-relaxed">
             In addition to software development, I have explored Generative AI through a research-focused internship, where I gained experience working with AI-driven solutions and data analysis. I also completed a Data Analytics certification, which strengthened my ability to analyze data, derive insights, and support data-driven decision making.

            </p>
            <p className="text-lg text-light-700 leading-relaxed">
             I completed my BCA from Banasthali Vidyapith, Jaipur, and my MCA from Bharati Vidyapeeth, Pune, where I developed a strong foundation in computer science and modern software technologies.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={fadeInUp}
          >
            <div className="bg-white p-6 rounded-xl shadow-md border border-light-200">
              <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
              <p className="text-light-600">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-light-200">
              <h3 className="text-3xl font-bold text-primary mb-2">1</h3>
              <p className="text-light-600">Years Experience</p>
            </div>
            {/* <div className="bg-white p-6 rounded-xl shadow-md border border-light-200">
              <h3 className="text-3xl font-bold text-primary mb-2">30+</h3>
              <p className="text-light-600">Happy Clients</p>
            </div> */}
            {/* <div className="bg-white p-6 rounded-xl shadow-md border border-light-200">
              <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
              <p className="text-light-600">Satisfaction Rate</p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
