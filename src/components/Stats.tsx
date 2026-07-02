"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FolderGit2, Users2, Cpu, GraduationCap } from "lucide-react";

type StatItemProps = {
  value: number;
  suffix?: string;
  label: string;
  icon: any;
  color: string;
  glowColor: string;
};

function StatCard({ value, suffix = "", label, icon: Icon, color, glowColor }: StatItemProps) {
  const [count, setCount] = useState(value === 2027 ? 2000 : 0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = value === 2027 ? 2000 : 0;
    const end = value;
    if (start === end) {
      setCount(end);
      return;
    }

    const duration = 1200; // ms
    const frameRate = 16;
    const totalFrames = duration / frameRate;
    const increment = (end - start) / totalFrames;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group rounded-2xl glass-card overflow-hidden p-6 border border-card-border flex flex-col items-center text-center justify-center gap-2"
    >
      {/* Glow Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Decorative gradient corner */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} rounded-bl-full blur-xl opacity-20 group-hover:scale-110 transition-transform duration-500`} />

      {/* Icon Container */}
      <div className="p-3 bg-input-bg border border-card-border rounded-xl group-hover:border-accent-blue/30 transition-all duration-300 relative z-10">
        <Icon className="w-6 h-6 text-text-theme group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Value */}
      <span className="text-3xl sm:text-4xl font-extrabold text-text-theme tracking-tight mt-2 relative z-10">
        {count}
        {suffix}
      </span>

      {/* Label */}
      <span className="text-xs sm:text-sm text-text-theme/50 group-hover:text-text-theme/75 transition-colors relative z-10 font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    {
      value: 4,
      suffix: "+",
      label: "Major Projects",
      icon: FolderGit2,
      color: "from-accent-blue/20 to-accent-blue/5",
      glowColor: "rgba(0, 240, 255, 0.2)",
    },
    {
      value: 3,
      suffix: "+",
      label: "Experience Roles",
      icon: Users2,
      color: "from-accent-purple/20 to-accent-purple/5",
      glowColor: "rgba(168, 85, 247, 0.2)",
    },
    {
      value: 10,
      suffix: "+",
      label: "Technologies",
      icon: Cpu,
      color: "from-accent-pink/20 to-accent-pink/5",
      glowColor: "rgba(236, 72, 153, 0.2)",
    },
    {
      value: 2027,
      suffix: "",
      label: "Graduate",
      icon: GraduationCap,
      color: "from-accent-blue/20 to-accent-purple/5",
      glowColor: "rgba(0, 240, 255, 0.15)",
    },
  ];

  return (
    <section className="relative py-8 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
