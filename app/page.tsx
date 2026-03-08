"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-light-50 to-light-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl w-full text-center">
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/profile.jpg`}
              alt="Rupal Bohra"
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-light-900 mb-6"
          variants={itemVariants}
        >
          Hi, II&apos;m <span className="text-primary">Rupal Bohra</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-light-600 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Full Stack Developer passionate about creating beautiful and functional web experiences
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap mb-12"
          variants={itemVariants}
        >
          <Link
            href="/resume.pdf"
            download="Rupal_Bohra_Resume.pdf"
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2"
          >
            📥 Download Resume
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center text-light-500"
          variants={itemVariants}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-primary transition-colors">
            LinkedIn
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}






