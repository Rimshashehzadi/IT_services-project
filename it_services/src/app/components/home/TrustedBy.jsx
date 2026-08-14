"use client";

import { motion } from "framer-motion";

const companies = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Shopify",
  "Stripe",
  "Vercel",
  "Azure",
  "HubSpot",
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 text-white">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Cyan Glow */}
      <div className="absolute left-1/2 top-1/2 h-40 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              Trusted By
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Trusted by{" "}
            <span className="text-cyan-400">100+ businesses</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Businesses trust us to build reliable digital products,
            scalable systems, and modern technology solutions.
          </p>
        </motion.div>

        {/* Companies */}
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/2 sm:grid-cols-4 lg:grid-cols-8">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              whileHover={{
                backgroundColor: "rgba(34, 211, 238, 0.05)",
              }}
              className="
                group
                flex
                min-h-22.5
                items-center
                justify-center
                border-b
                border-r
                border-white/10
                px-4
                transition-all
                duration-300
                sm:min-h-25
              "
            >
              <span
                className="
                  text-sm
                  font-semibold
                  tracking-wide
                  text-slate-500
                  transition-all
                  duration-300
                  group-hover:text-cyan-400
                  sm:text-base
                "
              >
                {company}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 h-px max-w-5xl origin-center bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"
        />
      </div>
    </section>
  );
}