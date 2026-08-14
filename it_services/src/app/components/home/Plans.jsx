"use client";

import Link from "next/link";
import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "For startups and small businesses getting started.",
    price: "$499",
    period: "project",
    features: [
      "Responsive website",
      "Modern UI/UX design",
      "Up to 5 pages",
      "Contact form",
      "Basic SEO setup",
      "Mobile optimization",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    description: "For growing businesses that need a powerful digital presence.",
    price: "$1,499",
    period: "project",
    features: [
      "Everything in Starter",
      "Up to 12 pages",
      "Advanced animations",
      "CMS integration",
      "API integration",
      "Performance optimization",
      "Advanced SEO",
      "Deployment support",
    ],
    button: "Choose Business",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for complex business requirements.",
    price: "Custom",
    period: "pricing",
    features: [
      "Everything in Business",
      "Custom web applications",
      "AI integrations",
      "Cloud infrastructure",
      "Advanced APIs",
      "Custom dashboards",
      "Priority support",
      "Scalable architecture",
    ],
    button: "Let's Talk",
    popular: false,
  },
];

export default function Plans() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-24 text-white sm:px-6 lg:px-8">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[160px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            Simple & Transparent Pricing
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Plans That Fit Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Business
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg">
            Flexible solutions designed to help startups, growing businesses,
            and enterprises build better digital experiences.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-7 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`relative rounded-3xl border p-[1px] ${
                plan.popular
                  ? "border-cyan-400/60 bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="h-full rounded-[23px] bg-[#0b1120] p-7 sm:p-8">

                {plan.popular && (
                  <div className="absolute right-6 top-5 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-[#031018]">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-7">
                  <h2 className="text-2xl font-bold">{plan.name}</h2>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-400">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-extrabold sm:text-5xl">
                    {plan.price}
                  </span>

                  <span className="ml-2 text-sm text-gray-500">
                    / {plan.period}
                  </span>
                </div>

                {/* Button */}
                <Link
                  href="/contact"
                  className={`group mb-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold transition ${
                    plan.popular
                      ? "bg-cyan-400 text-black hover:bg-cyan-300"
                      : "border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  }`}
                >
                  {plan.button}

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-300">
                    What's included:
                  </p>

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-400"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                        <Check size={13} />
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 p-8 text-center sm:p-10"
        >
          <Zap className="mx-auto mb-4 text-cyan-400" size={28} />

          <h3 className="text-2xl font-bold">
            Need a custom solution?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Tell us about your project and we'll create a solution around your
            business requirements.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            Discuss Your Project
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}