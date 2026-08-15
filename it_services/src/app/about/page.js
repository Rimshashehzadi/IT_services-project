"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
    },
    {
      number: "30+",
      label: "Happy Clients",
    },
    {
      number: "5+",
      label: "Years Experience",
    },
    {
      number: "24/7",
      label: "Technical Support",
    },
  ];

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Modern, high-performance websites and web applications built around your business goals.",
    },
    {
      icon: BrainCircuit,
      title: "AI & Automation",
      description:
        "Intelligent AI solutions and automation workflows that reduce repetitive work and improve productivity.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Reliable and scalable cloud infrastructure designed for modern digital businesses.",
    },
    {
      icon: Layers3,
      title: "Custom Software",
      description:
        "Powerful software solutions designed specifically around your processes, customers and business needs.",
    },
  ];

  const reasons = [
    "Modern and scalable technology",
    "Experienced development team",
    "Clean and maintainable code",
    "Performance-focused solutions",
    "Transparent communication",
    "Long-term technical support",
  ];

  const technologies = [
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative px-6 pb-24 pt-32 sm:px-10 lg:px-20">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[140px]" />

        <div className="pointer-events-none absolute right-0 top-32 h-75 w-75 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 text-sm text-slate-500"
          >
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-indigo-400">About</span>
          </motion.div>

          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
            >
              <Sparkles size={16} />

              <span>Innovation • Technology • Growth</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building Digital
              <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions That Matter.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              We are a technology-driven IT services team helping businesses
              transform ideas into powerful digital products through
              innovative technology, intelligent solutions and thoughtful
              design.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-medium text-white transition duration-300 hover:bg-indigo-500"
              >
                Start a Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/3 px-6 py-3.5 font-medium text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/6"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-white/6 bg-white/1.5 px-6 py-12 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                {stat.number}
              </h3>

              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-indigo-600/20 blur-[100px]" />

            <div className="relative rounded-3xl border border-white/8 bg-linear-to-br from-indigo-500/10 via-white/3 to-cyan-500/10 p-5 sm:p-8">
              <div className="rounded-2xl border border-white/8 bg-[#080d1d] p-5 sm:p-7">
                {/* Terminal Header */}
                <div className="mb-8 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                {/* Code */}
                <div className="space-y-4 font-mono text-xs sm:text-sm">
                  <p className="text-slate-500">
                    // our approach
                  </p>

                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">solution</span> ={" "}
                    <span className="text-indigo-300">
                      {"{"}
                    </span>
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">
                      innovation:
                    </span>{" "}
                    <span className="text-green-300">true</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">
                      scalable:
                    </span>{" "}
                    <span className="text-green-300">true</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">
                      secure:
                    </span>{" "}
                    <span className="text-green-300">true</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">
                      clientFocused:
                    </span>{" "}
                    <span className="text-green-300">true</span>,
                  </p>

                  <p>
                    <span className="text-indigo-300">
                      {"}"}
                    </span>
                  </p>

                  {/* Bottom Card */}
                  <div className="mt-8 rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-4">
                    <div className="flex items-center gap-3">
                      <Zap
                        size={20}
                        className="text-indigo-400"
                      />

                      <span className="text-slate-200">
                        Turning ideas into reality
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Technology that helps your
              <span className="text-indigo-400"> business grow.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              We believe technology should solve real problems, simplify
              complex processes and create opportunities for growth. Our team
              combines technical expertise, creative thinking and business
              understanding to deliver digital solutions that make an impact.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Whether you are launching a new product, modernizing an existing
              system or looking to automate your business, we work closely
              with you from idea to deployment.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Business-focused technology",
                "Modern development practices",
                "Scalable architecture",
                "Continuous innovation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-indigo-400"
                  />

                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              What We Do
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Solutions built for the
              <span className="text-indigo-400"> digital future.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              We provide technology services that help businesses innovate,
              automate and scale.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group rounded-2xl border border-white/[0.07] bg-white/2.5 p-6 transition duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/4"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition duration-300 group-hover:bg-indigo-500/20">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-5 h-px w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-3xl border border-indigo-500/20 bg-linear-to-br from-indigo-500/10 to-transparent p-8 sm:p-10"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <Rocket size={24} />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Our mission is to make advanced technology accessible to
              businesses of every size. We create reliable digital solutions
              that improve productivity, enhance customer experiences and
              accelerate growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-3xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-transparent p-8 sm:p-10"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
              <Globe size={24} />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              We envision a future where businesses use technology
              intelligently to work smarter, serve customers better and
              continuously evolve in a rapidly changing digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              We don't just build software.
              <span className="block text-indigo-400">
                We build possibilities.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Choosing the right technology partner can make the difference
              between an idea that stays an idea and a product that changes
              your business.
            </p>

            {/* Reasons */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-indigo-400"
                  />

                  <span className="text-sm text-slate-300">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-indigo-600/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/8 bg-[#090e1e] p-8 sm:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <ShieldCheck size={28} />
                </div>

                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  Trusted
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Built with security in mind.
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                From application architecture to deployment, we follow modern
                development and security practices to create dependable
                digital products.
              </p>

              <div className="mt-8 space-y-4">
                {/* Infrastructure */}
                <div className="flex items-center gap-4 rounded-xl border border-white/6 p-4">
                  <Cloud
                    size={20}
                    className="text-cyan-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Reliable Infrastructure
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Designed for scalability
                    </p>
                  </div>
                </div>

                {/* Security */}
                <div className="flex items-center gap-4 rounded-xl border border-white/6 p-4">
                  <ShieldCheck
                    size={20}
                    className="text-indigo-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Secure Development
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Modern security practices
                    </p>
                  </div>
                </div>

                {/* Partnership */}
                <div className="flex items-center gap-4 rounded-xl border border-white/6 p-4">
                  <Users
                    size={20}
                    className="text-purple-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Client Partnership
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Collaboration from start to finish
                    </p>
                  </div>
                </div>

                {/* Data */}
                <div className="flex items-center gap-4 rounded-xl border border-white/6 p-4">
                  <Database
                    size={20}
                    className="text-emerald-400"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Data Driven
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Decisions powered by technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGIES
      ========================================================= */}
      <section className="border-y border-white/6 bg-white/1.5 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Our Technology
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Powered by modern technologies
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              We use reliable and modern technologies to build fast, scalable
              and maintainable digital products.
            </p>
          </div>

          {/* Technology Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -3,
                }}
                className="rounded-xl border border-white/8 bg-[#090e1e] px-5 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-indigo-500/30 hover:text-white"
              >
                {technology}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative px-6 py-28 sm:px-10 lg:px-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-75 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-4xl rounded-3xl border border-indigo-500/20 bg-linear-to-br from-indigo-500/10 via-white/2 to-cyan-500/10 px-6 py-14 text-center sm:px-10"
        >
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
            <Sparkles size={26} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to build something
            <span className="text-indigo-400"> amazing?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Let's turn your idea into a powerful digital solution that helps
            your business grow.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 font-medium text-white transition duration-300 hover:bg-indigo-500"
          >
            Let's Work Together

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}