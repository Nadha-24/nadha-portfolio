"use client";

import { motion } from "framer-motion";
import { Award, FileCheck2, ExternalLink } from "lucide-react";

// Easily edit or append new certifications here
const certifications = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google via Coursera",
    date: "2024",
    id: "COURSERA-UXD-839X",
    link: "https://coursera.org",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta via Coursera",
    date: "2024",
    id: "COURSERA-META-FD21",
    link: "https://coursera.org",
  },
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis via Coursera",
    date: "2023",
    id: "COURSERA-UCD-SQL9",
    link: "https://coursera.org",
  },
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University via Coursera",
    date: "2023",
    id: "COURSERA-VANDY-PE01",
    link: "https://coursera.org",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 z-10 overflow-hidden">
      {/* Background neon visual glows */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-2">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Training
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => {
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-5 rounded-2xl glass-card border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 group flex items-start gap-4 relative overflow-hidden"
              >
                {/* Visual side glow accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent-blue to-accent-purple opacity-35 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Panel */}
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <FileCheck2 className="w-5 h-5 text-accent-blue group-hover:scale-110 transition-transform" />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between h-full gap-2 text-left">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-glow-blue transition-all">
                      {cert.title}
                    </h3>
                    <span className="text-xs text-white/55 font-semibold">
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-1 border-t border-white/5 pt-2 text-[10px]">
                    <div className="flex items-center gap-3 text-white/40">
                      <span>ID: <code className="text-white/60 font-mono text-[9px]">{cert.id}</code></span>
                      <span>•</span>
                      <span>Issued: <span className="text-white/60 font-medium">{cert.date}</span></span>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] text-accent-purple hover:text-accent-blue font-semibold transition-colors uppercase tracking-wider"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
