"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ArrowUpRight,
  MessageSquareQuote,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "The team transformed our idea into a polished digital product. Their communication, technical expertise and attention to detail were exceptional.",
    name: "Alex Morgan",
    role: "Founder & CEO",
    company: "TechFlow",
    initials: "AM",
  },
  {
    quote:
      "From the first discussion to the final delivery, everything was handled professionally. The new platform is fast, modern and exactly what our business needed.",
    name: "Sarah Williams",
    role: "Product Manager",
    company: "Nova Systems",
    initials: "SW",
  },
  {
    quote:
      "Their ability to combine development, automation and AI helped us simplify several manual processes and improve the experience for our customers.",
    name: "Daniel Carter",
    role: "Operations Director",
    company: "Vertex Labs",
    initials: "DC",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* Background Glows */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[150px]" />

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
            <MessageSquareQuote
              size={14}
              className="text-cyan-400"
            />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Client Stories
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted by teams
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              building what's next.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Don't just take our word for it. Here's what our clients say about
            working with us.
          </p>
        </motion.div>

        {/* Featured testimonial */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group relative mb-5 overflow-hidden rounded-3xl border border-cyan-400/15 bg-[#080d1d]/80 p-6 backdrop-blur-xl sm:p-8 lg:p-12"
        >
          {/* Glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.05] blur-[100px]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Quote */}

            <div>
              <div className="mb-7 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    className="text-cyan-400"
                  />
                ))}
              </div>

              <Quote
                size={40}
                className="mb-5 text-cyan-400/30"
              />

              <blockquote className="max-w-4xl text-xl font-medium leading-9 text-slate-200 sm:text-2xl sm:leading-10 lg:text-3xl lg:leading-[1.5]"
              >
                "{testimonials[0].quote}"
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-sm font-bold text-cyan-300">
                  {testimonials[0].initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonials[0].name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonials[0].role} · {testimonials[0].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Icon */}

            <div className="hidden h-24 w-24 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] lg:flex">
              <Quote
                size={42}
                className="text-cyan-400/50"
              />
            </div>
          </div>

          {/* Bottom glow */}

          <div className="absolute bottom-0 left-20 right-20 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </motion.div>

        {/* Smaller testimonials */}

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080d1d]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-7"
            >
              {/* Top */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      fill="currentColor"
                      className="text-cyan-400"
                    />
                  ))}
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                />
              </div>

              {/* Quote */}

              <Quote
                size={28}
                className="mt-7 text-cyan-400/25"
              />

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                "{testimonial.quote}"
              </p>

              {/* User */}

              <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] text-xs font-bold text-cyan-300">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-600">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Bottom Glow */}

              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/50" />
            </motion.article>
          ))}
        </div>

        {/* Bottom rating */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={15}
                fill="currentColor"
                className="text-cyan-400"
              />
            ))}
          </div>

          <span className="text-sm text-slate-500">
            Trusted by businesses building the future
          </span>
        </motion.div>
      </div>
    </section>
  );
}