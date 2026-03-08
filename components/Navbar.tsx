"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";
  const resumeHref = `${basePath}/resume.pdf`;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-md bg-light-50/80 border-b border-light-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
          Rupal
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-light-700 hover:text-primary font-medium transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <a
            href={resumeHref}
            download="Rupal_Bohra_Resume.pdf"
            className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-light-900 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-light-900 transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-light-900 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-light-100 border-t border-light-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-light-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={resumeHref}
              download="Rupal_Bohra_Resume.pdf"
              className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

