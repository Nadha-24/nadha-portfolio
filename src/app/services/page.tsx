"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Palette, Code2, LineChart, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Design intuitive, user-friendly interfaces that provide excellent user experiences.",
    icon: Palette,
    accent: "text-accent-blue",
    glowBorder: "group-hover:border-accent-blue/30",
    features: [
      "User Research",
      "Wireframes",
      "High-Fidelity Mockups",
      "Interactive Prototypes",
      "Design Systems"
    ],
    featured: false,
    delay: 0,
  },
  {
    title: "Full Stack Development",
    description: "Build scalable, responsive, and modern web applications using the latest technologies.",
    icon: Code2,
    accent: "text-accent-purple",
    glowBorder: "group-hover:border-accent-purple/30",
    features: [
      "Responsive Websites",
      "REST APIs",
      "Database Integration",
      "Authentication",
      "Performance Optimization"
    ],
    featured: true, // Small badge: Core Service / Most Popular
    featuredText: "Featured Expertise",
    delay: 0.1,
  },
  {
    title: "Data Analytics & AI",
    description: "Transform raw data into meaningful insights and build intelligent AI-powered solutions.",
    icon: LineChart,
    accent: "text-accent-pink",
    glowBorder: "group-hover:border-accent-pink/30",
    features: [
      "Data Visualization",
      "Dashboard Development",
      "Machine Learning Models",
      "AI Workflows",
      "Business Insights"
    ],
    featured: false,
    delay: 0.2,
  },
];

export default function ServicesPage() {
  return (
    <div className="relative py-16 overflow-hidden text-text-theme">
      {/* Aurora visual glow elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-2">
            My Services
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-text-theme to-text-theme/70 bg-clip-text text-transparent">
            Specialized Services
          </h1>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Services Grid (Equal Height Cards using flex items-stretch) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group rounded-[2.5rem] p-8 glass-card bg-bg-theme flex flex-col justify-between overflow-hidden shadow-lg border border-card-border hover:shadow-2xl hover:border-accent-blue/30 transition-all duration-300"
              >
                {/* Visual decorative hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-accent-blue/10 to-accent-purple/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col gap-6 text-left">
                  
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-fit group-hover:border-white/20 transition-all duration-300">
                      <Icon className={`w-7 h-7 ${service.accent} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    {service.featured && (
                      <span className="text-[10px] font-bold text-accent-blue bg-accent-blue/15 border border-accent-blue/20 px-3 py-1 rounded-full uppercase tracking-wider">
                        {service.featuredText}
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-bold tracking-wide group-hover:text-glow-blue transition-all">
                      {service.title}
                    </h2>
                    <p className="text-sm opacity-60 leading-relaxed font-light min-h-[48px]">
                      {service.description}
                    </p>
                  </div>

                  <div className="h-[1px] bg-white/10 dark:bg-white/5 w-full my-1" />

                  {/* Feature Lists */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Deliverables</span>
                    <ul className="flex flex-col gap-2.5 list-none pl-0">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs opacity-75 font-light">
                          <CheckCircle2 className={`w-4 h-4 ${service.accent} flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 text-xs font-semibold rounded-2xl border border-white/10 group-hover:border-accent-blue/30 group-hover:bg-gradient-to-r group-hover:from-accent-blue/10 group-hover:to-accent-purple/10 transition-all duration-300 group/btn"
                  >
                    Discuss Project
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </div>

                {/* Bottom Glowing Indicator line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
