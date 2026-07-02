"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Bot, Terminal, Send } from "lucide-react";

const mockMessages = [
  { sender: "user", text: "How does FoundryBOT handle document retrieval?" },
  { sender: "bot", text: "FoundryBOT uses RAG (Retrieval-Augmented Generation) coupled with n8n workflows. It splits documents, creates vector embeddings, queries a vector database, and synthesizes answers using LLMs." },
  { sender: "user", text: "What about custom automation?" },
  { sender: "bot", text: "Through n8n nodes, it hooks into Slack, Notion, and email alerts automatically, triggering action workflows on user intent." }
];

export default function FeaturedProject() {
  const [messages, setMessages] = useState<typeof mockMessages>([]);
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    if (msgIdx >= mockMessages.length) {
      const timeout = setTimeout(() => {
        setMessages([]);
        setMsgIdx(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const delay = mockMessages[msgIdx].sender === "user" ? 1500 : 3000;
    const timeout = setTimeout(() => {
      setMessages((prev) => [...prev, mockMessages[msgIdx]]);
      setMsgIdx((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [msgIdx]);

  return (
    <section className="relative py-12 z-10 overflow-hidden text-text-theme">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Highlight Card Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 lg:p-12 rounded-3xl glass-card border border-card-border relative overflow-hidden bg-bg-theme">
        
        {/* Left Column: Visual chatbot simulator mockup (always styled as a dark CLI console for coding aesthetic) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 w-full flex flex-col h-[380px] rounded-2xl border border-white/10 bg-slate-950 overflow-hidden"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-[10px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-accent-blue" /> FoundryBOT AI Core
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/40" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
              <span className="w-2 h-2 rounded-full bg-green-500/40" />
            </div>
          </div>

          {/* Chat message viewport */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-thin">
            <AnimatePresence>
              {messages.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 text-white/30 text-xs">
                  <Terminal className="w-8 h-8 animate-bounce text-accent-purple/50" />
                  <span>Booting RAG Embedding Index...</span>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-2xl text-xs leading-relaxed font-light ${
                        msg.sender === "user"
                          ? "bg-accent-blue/10 border border-accent-blue/20 text-white rounded-br-none"
                          : "bg-white/5 border border-white/10 text-white/80 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-white/30 mt-1 uppercase font-semibold">
                      {msg.sender === "user" ? "You" : "FoundryBOT"}
                    </span>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Input Area Mock */}
          <div className="px-4 py-3 bg-white/5 border-t border-white/5 flex items-center gap-2">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white/35 font-light flex items-center justify-between">
              <span>Ask FoundryBOT something...</span>
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Project details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col gap-5 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-input-bg border border-card-border rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            <span className="text-accent-blue text-[9px] font-bold tracking-wider uppercase">Featured Project</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
            FoundryBOT
          </h3>

          <div className="text-[10px] font-bold tracking-wider text-text-theme/40 uppercase">
            Role: <span className="text-accent-blue font-semibold">ML Engineer</span>
          </div>

          <p className="opacity-60 text-sm sm:text-base leading-relaxed font-light">
            An evidence-driven startup viability analysis platform using Retrieval-Augmented Generation (RAG) to evaluate startup ideas against historical datasets. Features vector-based retrieval pipelines for similarity matching and LLM-powered grounded viability analysis.
          </p>

          <div className="flex flex-col gap-1 border-t border-white/5 pt-3 text-xs">
            <span className="font-semibold text-text-theme/50">Challenge:</span>
            <span className="opacity-50 font-light">Building efficient vector retrieval pipelines and ensuring LLM responses are grounded in factual data.</span>
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <span className="font-semibold text-text-theme/50">Outcome:</span>
            <span className="opacity-50 font-light">Achieved 85% accuracy in startup viability predictions based on historical pattern matching.</span>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Python", "RAG", "LLM", "Vector DB", "Machine Learning"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-input-bg border border-card-border rounded-lg text-xs text-text-theme/70 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/Nadha-24/FoundryBOT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              View Codebase
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
