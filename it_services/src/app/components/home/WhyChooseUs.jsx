"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Layers3,
  Headphones,
  Sparkles,
  Target,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "We understand your business goals first, then design technology solutions that are built around your real requirements.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Fast & Scalable",
    description:
      "Our applications are designed for speed, reliability and scalability so your digital product can grow with your business.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Modern Technology",
    description:
      "We use modern frameworks, cloud platforms and development practices to create maintainable and future-ready products.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Security and reliability are considered throughout the development process to help protect your applications and data.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our relationship doesn't end after launch. We provide ongoing support and improvements as your business evolves.",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "AI & Automation",
    description:
      "We combine modern development with AI and automation to eliminate repetitive work and create smarter digital experiences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <Sparkles
              size={14}
              className="text-cyan-400"
            />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
            Technology built around
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              your success.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We combine technical expertise, creative thinking and business
            understanding to build digital solutions that create measurable
            value.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080d1d]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-7"
              >
                {/* Hover Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/0 blur-[70px] transition-all duration-700 group-hover:bg-cyan-400/10" />

                {/* Top */}

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-medium tracking-widest text-slate-700 transition-colors duration-300 group-hover:text-cyan-400/60">
                    {reason.number}
                  </span>
                </div>

                {/* Content */}

                <div className="relative z-10 mt-7">
                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom line */}

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/50" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex flex-col items-center gap-2 text-center sm:flex-row">
            <span className="text-sm text-slate-500">
              From idea to production
            </span>

            <span className="hidden h-px w-8 bg-cyan-400/30 sm:block" />

            <span className="text-sm font-medium text-cyan-300">
              We build it with you.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}