"use client";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@itservices.com",
    description: "We'll respond within 24 hours.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Global • Remote",
    description: "Working with clients worldwide.",
  },
];

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-4 py-24 text-white sm:px-6 lg:px-8">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            Let's Build Something Great
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Let's Talk About Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Next Project
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg">
            Have an idea, a challenge, or a project in mind? Tell us what
            you're building and our team will help turn it into reality.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7">
              <h2 className="text-2xl font-bold">
                Start a conversation
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                Whether you're looking for a website, web application,
                cloud solution, or AI-powered product, we're here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400/20">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-cyan-300">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400" size={20} />

                <p className="text-sm font-medium">
                  Free initial consultation
                </p>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400" size={20} />

                <p className="text-sm font-medium">
                  No obligation proposal
                </p>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400" size={20} />

                <p className="text-sm font-medium">
                  Transparent communication
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#0b1120] to-blue-500/10 p-[1px]"
          >
            <div className="rounded-[23px] bg-[#090f1d] p-6 sm:p-8 lg:p-10">

              <div className="mb-8">
                <h2 className="text-2xl font-bold">
                  Tell us about your project
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Fill out the form and we'll get back to you shortly.
                </p>
              </div>

              <form className="space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    What do you need?
                  </label>

                  <select
                    className="w-full rounded-xl border border-white/10 bg-[#0d1526] px-4 py-3.5 text-sm text-gray-300 outline-none transition focus:border-cyan-400/50"
                  >
                    <option>Web Development</option>
                    <option>AI Solutions</option>
                    <option>Cloud Solutions</option>
                    <option>UI/UX Design</option>
                    <option>Custom Software</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Estimated Budget
                  </label>

                  <select
                    className="w-full rounded-xl border border-white/10 bg-[#0d1526] px-4 py-3.5 text-sm text-gray-300 outline-none transition focus:border-cyan-400/50"
                  >
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Project Details
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300"
                >
                  Send Project Inquiry

                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs text-gray-600">
                  Your information is kept private and will never be shared.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            Not ready to start yet?
          </p>

          <a
            href="mailto:hello@itservices.com"
            className="mt-2 inline-flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
          >
            Just send us an email
            <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}