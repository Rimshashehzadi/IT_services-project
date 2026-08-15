"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Doccure",
    category: "Healthcare Platform",
    description:
      "A modern healthcare platform that connects patients with doctors and provides a smooth digital healthcare experience.",
    image: "/images/projects/doccure.webp",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "AI To-Do Management",
    category: "MERN Stack",
    description:
      "A full-stack task management application with authentication, MongoDB, AI chatbot integration and automated workflows.",
    image: "/images/projects/todo.webp",
    technologies: ["React", "Node.js", "MongoDB", "n8n"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    category: "Next.js",
    description:
      "A modern e-commerce frontend focused on high performance, responsive design and a premium shopping experience.",
    image: "/images/projects/ecommerce-next.webp",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Roofing Solutions",
    category: "Business Website",
    description:
      "A responsive roofing business website with service information, project showcase and an AI-powered customer chatbot.",
    image: "/images/projects/roofing.webp",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "n8n"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Plumbing Services",
    category: "Business Website",
    description:
      "A responsive plumbing service website designed to present services, projects and contact information clearly.",
    image: "/images/projects/plumbing.webp",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Fashion E-Commerce",
    category: "E-Commerce",
    description:
      "A responsive fashion outlet website with category-based shopping experiences and a modern premium interface.",
    image: "/images/projects/fashion.webp",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    live: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* =====================================================
          BACKGROUND GLOW
          ===================================================== */}

      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[150px]" />

      {/* =====================================================
          CONTAINER
          ===================================================== */}

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

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <Sparkles
              size={14}
              className="text-cyan-400"
            />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Our Work
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
            Projects built to make
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              an impact.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Explore some of the digital products, business websites and
            intelligent applications we have built using modern technologies.
          </p>
        </motion.div>

        {/* ===================================================
            PROJECT GRID
            =================================================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            BOTTOM CTA
            =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:flex-row sm:p-7"
        >
          <div className="text-center sm:text-left">
            <p className="text-base font-medium text-white sm:text-lg">
              Want to see more of our work?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Explore our complete project portfolio.
            </p>
          </div>

          <a
            href="/projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-3.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200 sm:w-auto"
          >
            View All Projects

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({ project, index }) {
  return (
    <motion.article
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
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080d1d]/80 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/25 hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
    >
      {/* ===================================================
          IMAGE
          =================================================== */}

      <div className="relative aspect-[16/10] overflow-hidden bg-[#0b1224]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent opacity-90" />

        {/* Hover Cyan Glow */}

        <div className="absolute inset-0 bg-cyan-400/0 transition-all duration-500 group-hover:bg-cyan-400/[0.04]" />

        {/* Category */}

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/10 bg-[#050816]/75 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-cyan-300 backdrop-blur-md sm:text-xs">
            {project.category}
          </span>
        </div>

        {/* Featured */}

        {project.featured && (
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 backdrop-blur-md">
            <Sparkles
              size={11}
              className="text-cyan-300"
            />

            <span className="text-[10px] font-semibold text-cyan-300">
              Featured
            </span>
          </div>
        )}

        {/* View Button */}

        <motion.a
          href={project.live}
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full border border-cyan-400/20 bg-[#050816]/80 text-cyan-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight size={18} />
        </motion.a>
      </div>

      {/* ===================================================
          CONTENT
          =================================================== */}

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {project.description}
            </p>
          </div>

          <div className="hidden shrink-0 text-slate-700 transition-colors duration-300 group-hover:text-cyan-400 sm:block">
            <Code2 size={19} />
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] font-medium text-slate-500 transition-colors duration-300 group-hover:border-cyan-400/10 group-hover:text-slate-400 sm:text-xs"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}

        <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
          <a
            href={project.live}
            className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-300 sm:text-sm"
          >
            Live Project

            <ExternalLink
              size={14}
              className="transition-transform group-hover/link:-translate-y-0.5"
            />
          </a>

          <span className="h-4 w-px bg-white/10" />

         <a
  href={project.github}
  className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-300 sm:text-sm"
>
  GitHub

  <span className="text-[10px] font-bold transition-transform group-hover/link:scale-110">
    GH
  </span>
</a>
        </div>
      </div>

      {/* ===================================================
          BOTTOM GLOW LINE
          =================================================== */}

      <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/50" />
    </motion.article>
  );
}