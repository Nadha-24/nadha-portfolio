"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 dark:border-white/5 bg-bg-theme/40 py-12 z-10 text-text-theme">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding & Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <Link
            href="/"
            className="text-lg font-bold tracking-wider bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent"
          >
            NADHA SAAFIYA
          </Link>
          <span className="text-[10px] opacity-40 uppercase tracking-widest font-semibold">
            Portfolio Version 22.0
          </span>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium opacity-70">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-accent-blue hover:opacity-100 transition-all capitalize"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Badges & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Nadha-24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 border border-white/10 dark:border-white/5 rounded-lg text-text-theme/60 hover:text-accent-blue hover:border-accent-blue/30 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nadha-saafiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 border border-white/10 dark:border-white/5 rounded-lg text-text-theme/60 hover:text-accent-blue hover:border-accent-blue/30 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:saafiyanadha@gmail.com"
              className="p-2 bg-white/5 border border-white/10 dark:border-white/5 rounded-lg text-text-theme/60 hover:text-accent-blue hover:border-accent-blue/30 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <span className="text-[11px] opacity-40 font-light">
            Designed & Developed by Nadha Saafiya &copy; 2026
          </span>
        </div>
      </div>

      {/* Floating Scroll To Top Widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-accent-blue/90 to-accent-purple/90 text-white border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] backdrop-blur-md cursor-pointer transition-all duration-300 z-50 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
