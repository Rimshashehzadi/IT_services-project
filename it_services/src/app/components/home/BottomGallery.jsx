"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const galleryItems = [
  {
    title: "AI & Automation",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    size: "large",
  },
  {
    title: "Cloud Infrastructure",
    category: "Cloud Solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    size: "small",
  },
  {
    title: "Modern Development",
    category: "Web Applications",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    size: "small",
  },
  {
    title: "Digital Experiences",
    category: "UI / UX Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80",
    size: "small",
  },
  {
    title: "Data & Analytics",
    category: "Business Intelligence",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    size: "small",
  },
];

export default function BottomGallery() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 lg:px-8">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            Our Expertise
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technology That
            <span className="block bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Drives Innovation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            From intelligent automation to scalable cloud infrastructure,
            we build digital solutions designed for modern businesses.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220] ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative w-full overflow-hidden ${
                  index === 0
                    ? "h-95 sm:h-full"
                    : "h-62.5"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-[#050816]/30 to-transparent" />

                {/* Cyan Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:bg-cyan-400/10 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">

                  <span className="text-xs font-medium uppercase tracking-wider text-cyan-300">
                    {item.category}
                  </span>

                  <div className="mt-2 flex items-end justify-between gap-4">

                    <h3 className="text-xl font-bold sm:text-2xl">
                      {item.title}
                    </h3>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                      <ArrowUpRight size={18} />
                    </div>

                  </div>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/0 transition duration-500 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]" />
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
          >
            Explore All Projects
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}