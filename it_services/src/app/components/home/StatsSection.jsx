"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Award,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    value: "250+",
    label: "Projects Delivered",
    description: "Digital products built and launched",
    icon: BriefcaseBusiness,
  },
  {
    value: "100+",
    label: "Happy Clients",
    description: "Businesses growing with our solutions",
    icon: Users,
  },
  {
    value: "10+",
    label: "Years Experience",
    description: "Building technology that matters",
    icon: Award,
  },
  {
    value: "15+",
    label: "Countries Reached",
    description: "Technology without borders",
    icon: Globe2,
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* =====================================================
          BACKGROUND GLOWS
          ===================================================== */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[130px]" />

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
            =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Our Impact
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            Numbers that tell our
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              story.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Our experience, partnerships and results reflect the impact we
            create through technology.
          </p>
        </motion.div>

        {/* ===================================================
            STATS
            =================================================== */}

        <div className="grid overflow-hidden rounded-3xl border border-white/[0.08] bg-[#080d1d]/70 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ backgroundColor: "rgba(34,211,238,0.025)" }}
                className={`group relative p-6 transition-all duration-500 sm:p-8 lg:p-9 ${
                  index !== 0
                    ? "border-t border-white/[0.07] sm:border-t-0 sm:border-l"
                    : ""
                } ${
                  index === 2
                    ? "lg:border-l"
                    : ""
                }`}
              >
                {/* Hover Glow */}

                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/0 blur-[60px] transition-all duration-700 group-hover:bg-cyan-400/10" />

                {/* Icon */}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                  />
                </div>

                {/* Number */}

                <div className="relative z-10 mt-8">
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.1,
                    }}
                    className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
                  >
                    {stat.value}
                  </motion.h3>

                  <h4 className="mt-3 text-sm font-semibold text-white sm:text-base">
                    {stat.label}
                  </h4>

                  <p className="mt-2 max-w-[220px] text-xs leading-5 text-slate-500 sm:text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Line */}

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/40" />
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
            =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-slate-600 sm:text-sm">
            Building better digital experiences, one project at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}