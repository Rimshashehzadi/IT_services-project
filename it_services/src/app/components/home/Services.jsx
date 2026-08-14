"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Cloud,
  Smartphone,
  Palette,
  ServerCog,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    description:
      "Build fast, scalable and high-performance web applications designed around your business goals.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Transform repetitive workflows with intelligent AI solutions, automation and custom business systems.",
    tags: ["AI", "n8n", "Automation"],
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Deploy secure, scalable and reliable cloud infrastructure that grows with your business.",
    tags: ["AWS", "Azure", "Cloud"],
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Create modern mobile experiences that deliver smooth performance across platforms and devices.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    number: "05",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design intuitive digital experiences that combine beautiful interfaces with exceptional usability.",
    tags: ["Figma", "Design", "UX"],
  },
  {
    number: "06",
    icon: ServerCog,
    title: "DevOps & Infrastructure",
    description:
      "Streamline development and deployment with modern DevOps practices, CI/CD and reliable infrastructure.",
    tags: ["Docker", "CI/CD", "DevOps"],
  },
];

function GlowBorder() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-px h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"
      />

      <motion.div
        animate={{
          y: ["-120%", "120%"],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "linear",
          delay: 1.1,
        }}
        className="absolute -right-px h-1/2 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60"
      />

      <motion.div
        animate={{
          x: ["120%", "-120%"],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "linear",
          delay: 2.2,
        }}
        className="absolute -bottom-px right-0 h-px w-1/2 bg-gradient-to-l from-transparent via-blue-500 to-transparent opacity-60"
      />

      <motion.div
        animate={{
          y: ["120%", "-120%"],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "linear",
          delay: 3.3,
        }}
        className="absolute -left-px bottom-0 h-1/2 w-px bg-gradient-to-t from-transparent via-blue-500 to-transparent opacity-60"
      />
    </div>
  );
}

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* =====================================================
          BACKGROUND GLOW
          ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* =====================================================
          CONTAINER
          ===================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            SECTION HEADER
            =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          {/* Label */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              What We Do
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
            Technology that moves
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              your business forward.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            From powerful web applications to intelligent automation and
            scalable cloud infrastructure, we build technology that solves
            real business problems.
          </p>
        </motion.div>

        {/* ===================================================
            SERVICES GRID
            =================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative min-h-[340px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080d1d]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-7 lg:min-h-[360px]"
              >
                {/* Animated React-Bits-style border */}

                <GlowBorder />

                {/* Hover Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/0 blur-[70px] transition-all duration-700 group-hover:bg-cyan-400/10" />

                {/* Number */}

                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-slate-600">
                    {service.number}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10"
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </motion.div>
                </div>

                {/* Content */}

                <div className="relative z-10 mt-12">
                  <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}

                <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:border-cyan-400/10 group-hover:text-slate-400 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}

                <div className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] text-slate-600 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
                  <ArrowUpRight size={17} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM CTA
            =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:flex-row sm:p-7"
        >
          <div>
            <p className="text-base font-medium text-white sm:text-lg">
              Have a project in mind?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Let&apos;s turn your idea into a digital product.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] sm:w-auto"
          >
            Start a Project

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}