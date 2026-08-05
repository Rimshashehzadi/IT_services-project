"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
// import Bg from "../animations/Bg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}
      {/* <Bg/> */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[180px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              🚀 Trusted by 100+ Businesses
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl xl:text-7xl">
              Transform Your
              <br />
              Business With
              <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Modern IT Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              We help startups and enterprises build scalable web applications,
              AI-powered systems, cloud infrastructure, and digital experiences
              that accelerate business growth.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/projects"
                className="flex items-center gap-3 rounded-xl border border-white/10 px-7 py-4 font-semibold transition hover:border-cyan-500 hover:bg-white/5"
              >
                <Play size={18} />
                View Projects
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              {[
                ["10+", "Years"],
                ["250+", "Projects"],
                ["100%", "Client Focus"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <h3 className="text-3xl font-bold text-cyan-400">{num}</h3>
                  <p className="mt-2 text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Dashboard */}
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="relative w-full max-w-lg rounded-3xl border border-cyan-500/20 bg-[#111827] p-8 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                <span className="rounded-full bg-green-500 px-3 py-1 text-xs">
                  Live
                </span>
              </div>

              {/* Graph */}
              <div className="flex h-56 items-end gap-3">
                {[45, 90, 70, 120, 80, 160, 130].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-500"
                    style={{ height }}
                  />
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <div>
                  <p className="text-gray-400">Revenue</p>
                  <h2 className="text-3xl font-bold">$98K</h2>
                </div>

                <div>
                  <p className="text-gray-400">Growth</p>
                  <h2 className="text-3xl font-bold text-green-400">
                    +36%
                  </h2>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute left-0 top-10 rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-xl"
            >
              <CheckCircle2 className="mb-3 text-cyan-400" />
              <h4 className="font-semibold">AI Automation</h4>
              <p className="text-sm text-gray-400">Smart Workflows</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-12 right-0 rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-xl"
            >
              <CheckCircle2 className="mb-3 text-green-400" />
              <h4 className="font-semibold">Cloud Solutions</h4>
              <p className="text-sm text-gray-400">AWS • Azure</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}