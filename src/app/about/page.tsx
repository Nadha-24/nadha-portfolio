"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Trophy, Crown, Sparkles, BookOpen, Users, Compass } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "KAIROX AI",
    period: "Ongoing",
    description: "Developing scalable full-stack features, optimizing application performance, and supporting automated artificial intelligence workflow integrations.",
    icon: Briefcase,
    color: "bg-accent-blue",
    glow: "shadow-[0_0_15px_rgba(0,240,255,0.3)]",
  },
  {
    role: "UI/UX Designer Intern",
    company: "NSP Nexus",
    period: "June 23 - July 23, 2025 (1 Month)",
    description: "Collaborated closely with visual designers and developers to design, iterate, and deliver user-centered website interface layouts.",
    bullets: [
      "Designed and iterated on clean web layout concepts as part of the digital design team.",
      "Collaborated with project stakeholders to deliver usable, aesthetic digital interfaces."
    ],
    icon: Compass,
    color: "bg-accent-purple",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
  },
  {
    role: "Operations Insight Intern",
    company: "Shiftco Pvt. Ltd.",
    period: "June 20 - July 7, 2025 (15 Days)",
    description: "Gained operations understanding, mapping organizational structures, and assisting IT systems workflows.",
    bullets: [
      "Obtained hands-on knowledge of business operations execution pipelines.",
      "Partnered with corporate IT teams to support operational systems and workflow setups."
    ],
    icon: Users,
    color: "bg-accent-pink",
    glow: "shadow-[0_0_15px_rgba(236,72,153,0.3)]",
  }
];

const achievements = [
  {
    title: "1st Place Win - HackRoot Hackathon",
    category: "Hackathon Win",
    detail: "Awarded 1st Prize (₹5,000 cash reward) for proposing and designing the FlowRoute Mood-Based Navigation App concept.",
    icon: Trophy,
    color: "text-accent-blue"
  },
  {
    title: "President - Trailblazers Club",
    category: "Leadership",
    detail: "Leading student coding collectives and organizing software workshops in the Information Technology Department.",
    icon: Crown,
    color: "text-accent-purple"
  },
  {
    title: "Creative Head - Crescent Literature Society",
    category: "Creative Direction",
    detail: "Managing visual media branding guidelines and event creative systems at B.S. Abdur Rahman Crescent Institute.",
    icon: Sparkles,
    color: "text-accent-pink"
  },
  {
    title: "Social Media Head - Crescent Readers Club",
    category: "Marketing & Strategy",
    detail: "Directing campaign reach, coordinating article releases, and managing page engagement grids.",
    icon: BookOpen,
    color: "text-accent-blue"
  },
  {
    title: "Guide Member - School Leadership Programme",
    category: "Community Service",
    detail: "Mentoring junior classes and managing school student body programs as a student representative.",
    icon: Users,
    color: "text-accent-purple"
  }
];

export default function About() {
  return (
    <div className="relative py-16 overflow-hidden text-text-theme bg-bg-theme">
      {/* Glow shapes */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-2">
            My Biography
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-text-theme to-text-theme/70 bg-clip-text text-transparent">
            About Nadha Saafiya
          </h1>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Narrative & Education Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            <h2 className="text-2xl font-bold">Bridging Design, Code, and Systems</h2>
            <p className="opacity-60 text-sm sm:text-base leading-relaxed font-light">
              I am a final-year Information Technology student operating at the intersections of UI/UX Design, Machine Learning, and Full Stack Development. My academic and internship experiences focus on combining interface details with efficient, scalable system logic.
            </p>
            <p className="opacity-60 text-sm sm:text-base leading-relaxed font-light">
              As a student leader and creative coordinator, I value clean workflows, structured project design, and open collaboration. I seek technical solutions that deliver clear user value while leveraging data and automation to solve real-world tasks.
            </p>
          </motion.div>

          {/* Education glass container */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl glass-card border border-card-border relative overflow-hidden bg-bg-theme"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-bl-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-input-bg border border-card-border rounded-xl">
                <GraduationCap className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold">Academic Journey</h3>
            </div>
            
            <div className="flex items-start gap-4 text-left">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 animate-pulse" />
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-extrabold">
                  B.Tech in Information Technology
                </span>
                <span className="text-xs opacity-70 font-semibold leading-relaxed">
                  B.S. Abdur Rahman Crescent Institute of Science and Technology
                </span>
                <span className="text-[10px] font-bold tracking-wider text-accent-purple uppercase mt-1">
                  Expected Graduation Class of 2027
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience vertical timeline */}
        <div className="mb-24">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-accent-purple uppercase mb-2">History</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Professional Internships</h2>
            <div className="h-[2px] w-8 bg-accent-purple mt-3 rounded-full" />
          </div>

          <div className="relative max-w-3xl mx-auto mt-12">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-accent-pink/30 transform md:-translate-x-1/2" />
            
            <div className="flex flex-col gap-12">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div key={exp.role} className={`relative flex flex-col md:flex-row ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}>
                    {/* Circle Node */}
                    <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full ${exp.color} ${exp.glow} border-4 border-bg-theme flex items-center justify-center z-10`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Timeline card side */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      idx % 2 === 0 ? "md:pl-8" : "md:pr-8"
                    }`}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="p-6 rounded-2xl glass-card border border-card-border hover:bg-input-bg/40 transition-all duration-300 relative group flex flex-col gap-3 text-left bg-bg-theme"
                      >
                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h3 className="text-base font-bold group-hover:text-glow-blue transition-all">
                              {exp.role}
                            </h3>
                            <span className="text-xs text-accent-blue font-semibold">
                              {exp.company}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 bg-input-bg border border-card-border px-2.5 py-1 rounded-lg text-[9px] opacity-60 font-semibold">
                            <Calendar className="w-3 h-3 text-accent-purple" />
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm opacity-60 leading-relaxed font-light">
                          {exp.description}
                        </p>

                        {exp.bullets && (
                          <ul className="flex flex-col gap-1.5 list-none my-1 pl-0">
                            {exp.bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx} className="flex items-start gap-2 text-xs opacity-50 leading-relaxed font-light">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple/50 mt-1.5 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements / Extracurriculars Grid */}
        <div>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-accent-pink uppercase mb-2">Milestones</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Achievements & Leadership</h2>
            <div className="h-[2px] w-8 bg-accent-pink mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {achievements.map((ach, idx) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl glass-card border border-card-border hover:bg-input-bg/40 transition-all duration-300 group flex flex-col gap-4 relative overflow-hidden text-left bg-bg-theme"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2.5 bg-input-bg border border-card-border rounded-xl">
                      <Icon className={`w-5 h-5 ${ach.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] opacity-40 font-bold uppercase tracking-widest">
                        {ach.category}
                      </span>
                      <h3 className="text-sm font-bold tracking-wide mt-0.5 group-hover:text-glow-blue transition-all">
                        {ach.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm opacity-60 leading-relaxed font-light relative z-10">
                    {ach.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
