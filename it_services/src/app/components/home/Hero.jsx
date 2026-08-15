"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Galaxy from "../animations/Galaxy";

export default function Hero() {
  return (
  <section className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-white">

  {/* =====================================================
      GALAXY BACKGROUND
      ===================================================== */}

  <div className="pointer-events-none absolute inset-0 z-0">
    <Galaxy
        focal={[0.5, 0.5]}
  rotation={[1, 0]}
  starSpeed={0.18}
  density={0.55}
  hueShift={195}
  speed={0.35}
  mouseInteraction={true}
  glowIntensity={0.25}
  saturation={0.1}
  mouseRepulsion={true}
  repulsionStrength={0.8}
  twinkleIntensity={0.2}
  rotationSpeed={0.03}
  autoCenterRepulsion={0}
  transparent={true}
    />
  </div>

  {/* Dark Theme Overlay */}
  <div className="pointer-events-none absolute inset-0 z-1 bg-[#050816]/45" />

  {/* Cyan Glow */}
  <motion.div
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.12, 0.22, 0.12],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-32 -top-32 z-2 h-80 w-80 rounded-full bg-cyan-400/20 blur-[140px]"
  />

  {/* Blue Glow */}
  <motion.div
    animate={{
      scale: [1.1, 1, 1.1],
      opacity: [0.1, 0.18, 0.1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -bottom-40 -right-40 z-2 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]"
  />

    

      {/* =========================================================
          CONTENT
          ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">

          {/* =====================================================
              LEFT CONTENT
              ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3.5 py-2 text-xs text-cyan-300 backdrop-blur-sm sm:mb-8 sm:px-5 sm:text-sm"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span>Trusted by 100+ Businesses</span>
            </motion.div>

            {/* Heading */}

            <h1 className="max-w-4xl text-[2.65rem] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl">
              Transform Your
              <br />

              <span className="text-white">
                Business With
              </span>

              <span className="block bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Modern IT Solutions
              </span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              We help startups and enterprises build scalable web
              applications, AI-powered systems, cloud infrastructure,
              and digital experiences that accelerate business growth.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.22)] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                Get Started

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/2 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/6 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                <Play
                  size={17}
                  className="fill-current"
                />

                View Projects
              </Link>
            </div>

            {/* =================================================
                STATS
                ================================================= */}

            <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:max-w-xl">
              {[
                ["10+", "Years"],
                ["250+", "Projects"],
                ["100%", "Client Focus"],
              ].map(([num, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35 + index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-white/8 bg-white/[0.035] p-4 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/20 sm:p-5"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                    {num}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-500 sm:mt-2 sm:text-sm">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
              ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:max-w-none"
          >
            {/* Dashboard floating animation */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-lg rounded-2xl border border-cyan-400/15 bg-[#0b1224]/90 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8"
            >
              {/* Dashboard Header */}

              <div className="mb-5 flex items-center justify-between sm:mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                    Overview
                  </p>

                  <h3 className="mt-1 text-base font-semibold sm:text-xl">
                    Analytics Dashboard
                  </h3>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-[10px] text-green-400 sm:px-3 sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Live
                </span>
              </div>

              {/* Graph */}

              <div className="flex h-40 items-end gap-2 sm:h-52 sm:gap-3">
                {[45, 90, 70, 120, 80, 160, 130].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height }}
                      transition={{
                        delay: 0.5 + index * 0.08,
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      className="flex-1 rounded-t-lg bg-linear-to-t from-cyan-500 to-blue-500 opacity-80 sm:rounded-t-xl"
                    />
                  )
                )}
              </div>

              {/* Dashboard Stats */}

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/6 pt-5 sm:mt-8 sm:pt-6">
                <div>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Revenue
                  </p>

                  <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                    $98K
                  </h2>
                </div>

                <div>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Growth
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-green-400 sm:text-3xl">
                    +36%
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING CARD 1
                ================================================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -left-2 top-2 z-20 hidden rounded-2xl border border-white/10 bg-[#0d1529]/95 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8 lg:top-10"
            >
              <CheckCircle2
                size={22}
                className="mb-2 text-cyan-400"
              />

              <h4 className="text-sm font-semibold">
                AI Automation
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                Smart Workflows
              </p>
            </motion.div>

            {/* =================================================
                FLOATING CARD 2
                ================================================= */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute -bottom-3 -right-2 z-20 hidden rounded-2xl border border-white/10 bg-[#0d1529]/95 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-right-8 lg:bottom-8"
            >
              <CheckCircle2
                size={22}
                className="mb-2 text-green-400"
              />

              <h4 className="text-sm font-semibold">
                Cloud Solutions
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                AWS • Azure
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-32 w-full bg-linear-to-t from-[#050816] to-transparent" />
    </section>
  );
}