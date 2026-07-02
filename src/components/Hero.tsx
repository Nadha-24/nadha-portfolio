"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "UI/UX Designer",
  "Full Stack Developer",
  "Data Analyst",
  "AI Enthusiast"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : fullText.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-16 overflow-hidden text-text-theme bg-bg-theme"
    >
      {/* Background aurora glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[80px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-accent-purple/10 rounded-full blur-[80px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Portrait photo in premium glass container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center order-2 lg:order-1"
        >
          <div className="relative group">
            {/* Soft decorative glow backdrops */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-3xl blur opacity-35 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            
            {/* Glass Container */}
            <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] aspect-[4/5] rounded-3xl glass-card overflow-hidden p-3 border border-card-border flex flex-col justify-between">
              
              {/* Image box */}
              <div className="relative w-full h-[85%] rounded-2xl overflow-hidden bg-input-bg border border-card-border flex items-center justify-center">
                {imgError ? (
                  <svg
                    className="w-full h-full p-8 text-accent-blue/30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <circle cx="12" cy="12" r="11" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="0.5" />
                  </svg>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/images/profile.jpg"
                    alt="Nadha Saafiya"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                )}
                {/* Scanner effect line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-20 group-hover:opacity-80 transition-all duration-300 shadow-[0_0_8px_#00f0ff]" 
                     style={{ animation: "scan 4s linear infinite" }} />
              </div>
              
              {/* Profile tag name */}
              <div className="h-[12%] flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider uppercase text-text-theme">Nadha Saafiya</span>
                  <span className="opacity-40 text-[9px] tracking-wider uppercase text-text-theme">IT Student / Designer</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse shadow-[0_0_8px_#00f0ff]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Headline and copy */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-input-bg border border-card-border rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-ping" />
            <span className="opacity-60 text-xs font-semibold tracking-wider uppercase text-text-theme">Open to Opportunities</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="opacity-60 text-lg sm:text-xl font-medium tracking-wide text-text-theme">Hi, I'm</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-text-theme">
              Nadha Saafiya
            </h1>
            
            {/* Animated Typing Role Container */}
            <div className="h-10 sm:h-12 flex items-center mt-2">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent text-glow-blue">
                {currentText}
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-light text-accent-blue cursor-blink ml-1">|</span>
            </div>
          </div>

          {/* Tagline */}
          <h2 className="text-lg sm:text-2xl font-medium leading-snug text-text-theme">
            Designing Experiences. Building Solutions. Driving Innovation.
          </h2>

          {/* Intro Summary */}
          <p className="opacity-60 text-sm sm:text-base max-w-xl leading-relaxed font-light text-text-theme">
            I'm Nadha Saafiya, a fourth-year Information Technology student passionate about designing intuitive user experiences, developing scalable full-stack applications, and leveraging artificial intelligence and data analytics to solve real-world challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="/work"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/resume/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-input-bg hover:bg-white/10 dark:hover:bg-white/5 border border-card-border transition-all duration-300 hover:-translate-y-0.5 text-text-theme"
            >
              <FileText className="w-4 h-4 text-accent-blue" />
              Download Resume
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-input-bg text-sm font-semibold rounded-xl transition-all duration-300 text-text-theme"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-4 mt-4">
            <span className="opacity-30 text-xs font-semibold tracking-widest uppercase text-text-theme">Connect</span>
            <div className="h-[1px] w-8 bg-card-border" />
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Nadha-24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-input-bg hover:bg-accent-blue/15 text-text-theme/60 hover:text-accent-blue border border-card-border rounded-xl hover:border-accent-blue/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nadha-saafiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-input-bg hover:bg-accent-blue/15 text-text-theme/60 hover:text-accent-blue border border-card-border rounded-xl hover:border-accent-blue/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:saafiyanadha@gmail.com"
                className="p-2.5 bg-input-bg hover:bg-accent-blue/15 text-text-theme/60 hover:text-accent-blue border border-card-border rounded-xl hover:border-accent-blue/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}</style>
    </section>
  );
}
