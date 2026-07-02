"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Send, CheckCircle2, AlertCircle, PhoneCall } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative py-16 overflow-hidden text-text-theme bg-bg-theme">
      {/* Background aurora glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-2">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-text-theme to-text-theme/70 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h1>
          <div className="h-[2px] w-12 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: Socials & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8 text-left"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Current Availability</h2>
              <p className="opacity-60 text-sm sm:text-base leading-relaxed font-light">
                I'm currently open to internships, freelance opportunities, and full-time roles. If you have a project or role that matches my skills in UI/UX design, full-stack development, or data analytics, feel free to connect!
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:saafiyanadha@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-card-border hover:border-accent-blue/30 hover:bg-input-bg/50 transition-all duration-300 group bg-bg-theme"
              >
                <div className="p-3 bg-input-bg border border-card-border rounded-xl group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-colors">
                  <Mail className="w-5 h-5 text-accent-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] opacity-40 font-bold uppercase tracking-wider">Direct Email</span>
                  <span className="text-xs sm:text-sm font-semibold mt-0.5">saafiyanadha@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:8122165339"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-card-border hover:border-accent-purple/30 hover:bg-input-bg/50 transition-all duration-300 group bg-bg-theme"
              >
                <div className="p-3 bg-input-bg border border-card-border rounded-xl group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-colors">
                  <PhoneCall className="w-5 h-5 text-accent-purple" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] opacity-40 font-bold uppercase tracking-wider">Contact Number</span>
                  <span className="text-xs sm:text-sm font-semibold mt-0.5">+91 8122165339</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nadha-saafiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-card-border hover:border-accent-pink/30 hover:bg-input-bg/50 transition-all duration-300 group bg-bg-theme"
              >
                <div className="p-3 bg-input-bg border border-card-border rounded-xl group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent-pink" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] opacity-40 font-bold uppercase tracking-wider">LinkedIn Profile</span>
                  <span className="text-xs sm:text-sm font-semibold mt-0.5">linkedin.com/in/nadha-saafiya</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Nadha-24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-card-border hover:border-accent-blue/30 hover:bg-input-bg/50 transition-all duration-300 group bg-bg-theme"
              >
                <div className="p-3 bg-input-bg border border-card-border rounded-xl group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-colors">
                  <Github className="w-5 h-5 text-accent-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] opacity-40 font-bold uppercase tracking-wider">GitHub Username</span>
                  <span className="text-xs sm:text-sm font-semibold mt-0.5">github.com/Nadha-24</span>
                </div>
              </a>

              {/* Resume */}
              <a
                href="/resume/resume.pdf"
                download
                className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-card-border hover:border-accent-purple/30 hover:bg-input-bg/50 transition-all duration-300 group bg-bg-theme"
              >
                <div className="p-3 bg-input-bg border border-card-border rounded-xl group-hover:bg-white/10 dark:group-hover:bg-white/5 transition-colors">
                  <FileText className="w-5 h-5 text-accent-purple" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] opacity-40 font-bold uppercase tracking-wider">Academic Resume</span>
                  <span className="text-xs sm:text-sm font-semibold mt-0.5">Download PDF copy</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border border-card-border relative overflow-hidden bg-bg-theme"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-bl-full blur-xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] opacity-50 font-bold uppercase tracking-widest pl-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`px-4 py-3 bg-input-bg border rounded-xl text-xs text-text-theme placeholder-text-theme/35 focus:outline-none transition-all duration-300 ${
                      errors.name 
                        ? "border-red-500/50 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                        : "border-card-border focus:border-accent-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-[10px] text-red-500 pl-1">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] opacity-50 font-bold uppercase tracking-widest pl-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-4 py-3 bg-input-bg border rounded-xl text-xs text-text-theme placeholder-text-theme/35 focus:outline-none transition-all duration-300 ${
                      errors.email 
                        ? "border-red-500/50 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                        : "border-card-border focus:border-accent-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && <span className="text-[10px] text-red-500 pl-1">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-[10px] opacity-50 font-bold uppercase tracking-widest pl-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`px-4 py-3 bg-input-bg border rounded-xl text-xs text-text-theme placeholder-text-theme/35 focus:outline-none transition-all duration-300 ${
                    errors.subject 
                      ? "border-red-500/50 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                      : "border-card-border focus:border-accent-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                  }`}
                  placeholder="Inquiry / Opportunities"
                />
                {errors.subject && <span className="text-[10px] text-red-500 pl-1">{errors.subject}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[10px] opacity-50 font-bold uppercase tracking-widest pl-1">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`px-4 py-3 bg-input-bg border rounded-xl text-xs text-text-theme placeholder-text-theme/35 focus:outline-none transition-all duration-300 resize-none ${
                    errors.message 
                      ? "border-red-500/50 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                      : "border-card-border focus:border-accent-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                  }`}
                  placeholder="Provide details about your project or proposal..."
                />
                {errors.message && <span className="text-[10px] text-red-500 pl-1">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none mt-2 group cursor-pointer"
              >
                {status === "sending" ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-xs text-green-500 mt-2 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Thank you! Your message was sent successfully.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-500 mt-2 font-medium"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Oops! Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
