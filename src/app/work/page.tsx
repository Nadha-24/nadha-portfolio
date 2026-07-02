"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Map, Palette, Calendar } from "lucide-react";
import FeaturedProject from "@/components/FeaturedProject";
import GithubShowcase from "@/components/GithubShowcase";

const otherProjects = [
  {
    title: "FlowRoute",
    role: "Full-Stack Developer",
    period: "25 - Present",
    award: "1st Place Winner - HackRoot Hackathon (₹5,000)",
    description: "A smart traffic navigation web app suggesting routes based on user mood and environmental variables, parsing real-time APIs to calculate route recommendations.",
    challenges: "Integrating multiple real-time external APIs and structuring route optimization algorithm edge cases.",
    outcome: "Reduced average route suggestion calculation speed by 40% compared to static map query systems.",
    tech: ["Python", "API Integration", "Maps API", "Weather API"],
    github: "https://github.com/Nadha-24",
    visual: (
      <div className="w-full h-full relative flex items-center justify-center bg-slate-950/40 overflow-hidden">
        <svg className="w-[75%] h-[65%] text-accent-blue/30" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="4" fill="#00f0ff" className="animate-ping" />
          <circle cx="20" cy="20" r="3" fill="#00f0ff" />
          <circle cx="80" cy="80" r="4" fill="#a855f7" />
          <circle cx="80" cy="80" r="3" fill="#a855f7" />
          <path d="M20,20 Q40,30 50,50 T80,80" stroke="url(#grad-blue-purple)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_5s_linear_infinite]" />
          <path d="M20,20 Q60,10 80,80" stroke="rgba(0,240,255,0.08)" strokeWidth="1.5" />
          <defs>
            <linearGradient id="grad-blue-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute bottom-4 right-4 bg-black/60 border border-green-500/30 px-2 py-1 rounded-md text-[9px] font-bold text-green-400 uppercase tracking-wider">
          1st Place Win
        </div>
      </div>
    )
  },
  {
    title: "DotedOn",
    role: "UI/UX Designer",
    period: "25 - Present",
    award: "Freelance Client Project",
    description: "Designed a comprehensive modern user interface and full design system guidelines for a client company focused on visual usability and responsiveness.",
    challenges: "Aligning creative designs to client expectations and handling multiple revision loops while keeping design consistency.",
    outcome: "Delivered a complete responsive interface prototype consisting of 20+ screens and component states.",
    tech: ["Figma", "UI/UX Design", "Component Design", "Client Handoff"],
    github: "#",
    demo: "https://www.figma.com/proto/080nXNlsfyiF2qRA0sUC7n/DotedOn?node-id=11-3&t=itFB8uvoMl6kZBNO-1",
    visual: (
      <div className="w-full h-full relative flex items-center justify-center bg-slate-950/40 overflow-hidden">
        <div className="grid grid-cols-2 gap-3.5 w-[85%] h-[75%] p-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-card-border bg-input-bg p-2.5 rounded-lg flex flex-col justify-between">
              <div>
                <div className="h-1.5 w-1/2 bg-accent-purple/35 rounded-full mb-2" />
                <div className="h-2 w-full bg-text-theme/10 rounded-full mb-1" />
                <div className="h-1.5 w-3/4 bg-text-theme/5 rounded-full" />
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="h-2.5 w-6 bg-text-theme/10 rounded-md" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-4 right-4 bg-black/60 border border-accent-purple/30 px-2 py-1 rounded-md text-[9px] font-bold text-accent-purple uppercase tracking-wider">
          Figma Prototype
        </div>
      </div>
    )
  }
];

export default function Work() {
  return (
    <div className="relative py-16 overflow-hidden text-text-theme bg-bg-theme">
      {/* Background visual glows */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-0 translate-y-1/2 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-2">
            My Portfolio
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-text-theme to-text-theme/70 bg-clip-text text-transparent">
            Selected Work & Projects
          </h1>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* 1. Featured Project: FoundryBOT */}
        <FeaturedProject />

        {/* 2. Other Projects Section */}
        <div className="my-24">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-accent-purple uppercase mb-2">Other Projects</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Creative Engineering</h2>
            <div className="h-[2px] w-8 bg-accent-purple mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {otherProjects.map((project, idx) => {
              const Icon = project.title === "FlowRoute" ? Map : Palette;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group rounded-3xl overflow-hidden glass-card border border-card-border flex flex-col glass-card-hover bg-bg-theme"
                  style={{ boxShadow: "0 20px 40px var(--card-shadow)" }}
                >
                  {/* Visual wrapper */}
                  <div className="relative w-full aspect-video border-b border-card-border overflow-hidden">
                    {project.visual}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-theme/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Details block */}
                  <div className="p-6 sm:p-8 flex flex-col gap-4 text-left flex-1 justify-between">
                    <div className="flex flex-col gap-3">
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-accent-blue" />
                          <h3 className="text-xl font-bold group-hover:text-glow-blue transition-all">
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-[10px] text-accent-purple font-semibold tracking-wider flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {project.period}
                        </span>
                      </div>

                      <div className="text-[10px] font-bold tracking-wider opacity-40 uppercase">
                        Role: <span className="text-accent-blue font-semibold">{project.role}</span>
                      </div>

                      {project.award && (
                        <div className="text-[10px] font-bold text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-md w-fit">
                          {project.award}
                        </div>
                      )}

                      <p className="text-xs sm:text-sm opacity-60 leading-relaxed font-light mt-1">
                        {project.description}
                      </p>

                      <div className="flex flex-col gap-1 border-t border-card-border pt-3 text-xs">
                        <span className="font-semibold opacity-50">Challenge:</span>
                        <span className="opacity-45 font-light">{project.challenges}</span>
                      </div>
                      <div className="flex flex-col gap-1 text-xs">
                        <span className="font-semibold opacity-50">Outcome:</span>
                        <span className="opacity-45 font-light">{project.outcome}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-4 border-t border-card-border pt-4">
                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-input-bg border border-card-border rounded-md text-[9px] opacity-70 font-semibold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Code / Demo CTAs */}
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <div className="flex items-center gap-4">
                          {project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-accent-blue transition-all"
                            >
                              <Github className="w-4 h-4" /> Codebase
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 opacity-60 hover:opacity-100 hover:text-accent-blue transition-all"
                            >
                              <ExternalLink className="w-4 h-4" /> Prototype / Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. GitHub Activity Grid */}
        <GithubShowcase />

      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </div>
  );
}
