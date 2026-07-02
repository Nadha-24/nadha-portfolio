"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show the screen loader once per browser session for fluid subpage clicks
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasLoaded", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030303] select-none"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Glowing spin circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: 360,
                transition: { duration: 1.6, ease: "easeInOut", repeat: Infinity }
              }}
              className="w-24 h-24 rounded-full border-t-2 border-b-2 border-accent-blue border-r-2 border-r-transparent border-l-2 border-l-transparent shadow-[0_0_30px_rgba(0,240,255,0.15)]"
            />

            {/* Inner Initials */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { delay: 0.3, duration: 0.8, type: "spring" }
              }}
              className="absolute text-3xl font-extrabold tracking-widest bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent text-glow-blue"
            >
              NS
            </motion.div>

            {/* Subtext */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 0.5,
                transition: { delay: 0.6, duration: 0.5 }
              }}
              className="text-[10px] text-white tracking-[0.2em] uppercase font-bold mt-6 text-center"
            >
              Loading Experiences
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
