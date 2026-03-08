"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-900 text-light-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Rupal Bohra</h3>
            <p className="text-light-300">Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-light-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-light-300 hover:text-primary transition-colors">About</Link></li>
              {/* <li><Link href="/projects" className="text-light-300 hover:text-primary transition-colors">Projects</Link></li> */}
              <li><Link href="/contact" className="text-light-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light-700 pt-8 text-center text-light-400">
          <p>&copy; {currentYear} Rupal Bohra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
