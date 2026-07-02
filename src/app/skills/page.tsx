"use client";

import { motion } from "framer-motion";
import { Terminal, Layout, Server, Compass, LineChart, BrainCircuit, ShieldAlert } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Terminal,
    color: "text-accent-blue",
    skills: ["Python", "Java", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "text-accent-purple",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-accent-pink",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "UI/UX",
    icon: Compass,
    color: "text-accent-blue",
    skills: ["Figma", "Framer", "Canva"],
  },
  {
    title: "Data Analytics",
    icon: LineChart,
    color: "text-accent-purple",
    skills: ["Python", "SQL", "Excel", "Power BI (Learning)"],
  },
  {
    title: "AI",
    icon: BrainCircuit,
    color: "text-accent-pink",
    skills: ["RAG", "n8n", "LLMs"],
  },
  {
    title: "Tools & Security",
    icon: ShieldAlert,
    color: "text-accent-blue",
    skills: ["GitHub", "VS Code", "Postman", "OWASP ZAP"],
  },
];

export default function SkillsPage() {
  return (
    <div className="relative py-16 overflow-hidden text-text-theme">
      {/* Background aurora glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-2">
            My Toolbox
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-text-theme to-text-theme/70 bg-clip-text text-transparent">
            Technical Skills & Arsenal
          </h1>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl glass-card border border-card-border hover:bg-white/[0.02] dark:hover:bg-white/[0.01] transition-all duration-300 group flex flex-col gap-4 relative overflow-hidden"
              >
                {/* Visual background details */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />

                {/* Header */}
                <div className="flex items-center gap-3 relative z-10 text-left">
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                    <Icon className={`w-5 h-5 ${category.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h2 className="text-base font-bold tracking-wide">
                    {category.title}
                  </h2>
                </div>

                <div className="h-[1px] bg-white/10 dark:bg-white/5 w-full relative z-10" />

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2 mt-1 relative z-10">
                  {category.skills.map((skill) => {
                    const isLearning = skill.includes("(Learning)");
                    const displayName = isLearning ? skill.replace(" (Learning)", "") : skill;

                    return (
                      <div
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all duration-300 ${
                          isLearning
                            ? "bg-white/5 border-white/10 text-text-theme/40"
                            : "bg-white/[0.02] border-white/5 text-text-theme/80 hover:border-accent-blue/30 hover:bg-accent-blue/5 hover:text-accent-blue"
                        }`}
                      >
                        {isLearning && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
                        )}
                        <span>{displayName}</span>
                        {isLearning && (
                          <span className="text-[9px] font-bold text-accent-purple/80 uppercase tracking-wider ml-1">Learning</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
