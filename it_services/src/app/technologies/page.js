"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe2,
  Database,
  Cloud,
  BrainCircuit,
  Smartphone,
  Container,
  GitBranch,
} from "lucide-react";

const technologyGroups = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Modern interfaces built for speed and scale.",
    technologies: [
      { name: "React", short: "RE" },
      { name: "Next.js", short: "NX" },
      { name: "JavaScript", short: "JS" },
      { name: "Tailwind CSS", short: "TW" },
      { name: "HTML5", short: "HT" },
      { name: "CSS3", short: "CS" },
    ],
  },
  {
    icon: Globe2,
    title: "Backend",
    description: "Reliable systems powering modern applications.",
    technologies: [
      { name: "Node.js", short: "ND" },
      { name: "Express.js", short: "EX" },
      { name: "Python", short: "PY" },
      { name: "FastAPI", short: "FA" },
      { name: "REST API", short: "API" },
      { name: "MongoDB", short: "MG" },
    ],
  },
  {
    icon: Database,
    title: "Data & Database",
    description: "Structured and scalable data solutions.",
    technologies: [
      { name: "MongoDB", short: "MG" },
      { name: "PostgreSQL", short: "PG" },
      { name: "MySQL", short: "MY" },
      { name: "SQL", short: "SQL" },
      { name: "Qdrant", short: "QD" },
      { name: "Neon", short: "NE" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "Intelligent systems and automated workflows.",
    technologies: [
      { name: "OpenAI", short: "AI" },
      { name: "Gemini", short: "GM" },
      { name: "n8n", short: "N8" },
      { name: "RAG", short: "RG" },
      { name: "AI Agents", short: "AG" },
      { name: "Chatbots", short: "CB" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infrastructure designed for reliable deployment.",
    technologies: [
      { name: "AWS", short: "AWS" },
      { name: "Docker", short: "DK" },
      { name: "Vercel", short: "VC" },
      { name: "CI/CD", short: "CD" },
      { name: "GitHub", short: "GH" },
      { name: "CloudWatch", short: "CW" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile & Apps",
    description: "Responsive experiences across every device.",
    technologies: [
      { name: "React Native", short: "RN" },
      { name: "Android", short: "AN" },
      { name: "iOS", short: "iOS" },
      { name: "Expo", short: "EX" },
      { name: "PWA", short: "PW" },
      { name: "Responsive UI", short: "UI" },
    ],
  },
];

function TechItem({ technology }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/2 px-3 py-3 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/4"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-[#0b1224] text-[10px] font-bold text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/25 group-hover:bg-cyan-400/10">
        {technology.short}
      </div>

      <span className="text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-white sm:text-sm">
        {technology.name}
      </span>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* =====================================================
          AMBIENT GLOWS
          ===================================================== */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
            =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          {/* Label */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Our Technology
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
            Built with modern
            <span className="block bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              technology.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We use proven technologies and modern development tools to build
            fast, scalable, secure and maintainable digital products.
          </p>
        </motion.div>

        {/* ===================================================
            TECHNOLOGY CARDS
            =================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#080d1d]/80 p-5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-6"
              >
                {/* Top Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/0 blur-[70px] transition-all duration-700 group-hover:bg-cyan-400/10" />

                {/* Header */}

                <div className="relative z-10 flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/6 text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10"
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
                      {group.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Technologies */}

                <div className="relative z-10 mt-6 grid grid-cols-2 gap-2">
                  {group.technologies.map((technology) => (
                    <TechItem
                      key={technology.name}
                      technology={technology}
                    />
                  ))}
                </div>

                {/* Bottom Glow Line */}

                <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/50" />
              </motion.article>
            );
          })}
        </div>

        {/* ===================================================
            TECHNOLOGY STRIP
            =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/2"
        >
          <div className="flex flex-col items-center justify-between gap-5 px-5 py-6 sm:flex-row sm:px-7">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-white sm:text-base">
                The right technology for every challenge.
              </p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                We choose the stack based on your product, goals and scale.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {[GitBranch, Container, Cloud].map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-[#0b1224] text-slate-500 transition-colors duration-300 hover:border-cyan-400/25 hover:text-cyan-400"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}