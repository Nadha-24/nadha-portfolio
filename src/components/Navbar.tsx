"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-bg-theme/75 backdrop-blur-md border-b border-card-border text-text-theme">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wider flex items-center gap-2 group text-text-theme"
        >
          <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent group-hover:text-glow-blue transition-all duration-300">
            NADHA
          </span>
          <span className="opacity-60 font-light text-sm">PORTFOLIO</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? "text-accent-blue font-semibold"
                    : "text-text-theme/75 hover:text-text-theme"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions (Theme Toggle & Resume Button) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-input-bg border border-card-border text-text-theme hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download Resume */}
          <a
            href="/resume/resume.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-text-theme bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/30 rounded-full hover:border-accent-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
          >
            Resume <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Actions Container */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-input-bg border border-card-border text-text-theme"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-theme/80 hover:text-text-theme p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-card-border overflow-hidden bg-bg-theme/95 backdrop-blur-md text-text-theme"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium py-1 transition-colors ${
                      isActive
                        ? "text-accent-blue font-bold"
                        : "text-text-theme/70 hover:text-text-theme"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="/resume/resume.pdf"
                download
                className="flex items-center justify-center gap-1.5 w-full py-3 mt-2 text-sm font-semibold text-text-theme bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 border border-accent-blue/40 rounded-lg hover:border-accent-blue transition-all"
              >
                Download Resume <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
