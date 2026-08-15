"use client";
import Img from "next/image";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Technologies", href: "/technologies" },
  ],

  Services: [
    { name: "Web Development", href: "/services" },
    { name: "AI & Automation", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "UI / UX Design", href: "/services" },
  ],

  Resources: [
    { name: "Why Choose Us", href: "/why-us" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Plans", href: "/plans" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030610] text-white">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      {/* ================= GRID BACKGROUND ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            CTA SECTION
        ===================================================== */}

        <div className="border-b border-white/10 py-16 sm:py-20">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            {/* CTA TEXT */}

            <div className="max-w-2xl">

              <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300 sm:text-sm">
                Let's Build Something Great
              </span>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">

                Ready to transform your

                <span className="block bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  digital future?
                </span>

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                Tell us about your project and let's create a scalable,
                modern and intelligent solution together.
              </p>

            </div>

            {/* CTA BUTTON */}

            <Link
              href="/contact"
              className="group flex shrink-0 items-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              Start a Project

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-5">

          {/* ================= BRAND ================= */}

          <div className="lg:col-span-2">

            {/* Logo */}
        <Link href="/" className="">
          {/* <span className="text-cyan-400">IT</span>Services */}
          <Img src="/logo2.png" alt="Logo" width={180} height={180} className="mr-2 inline-block" />
        </Link>


            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              We build modern digital products, AI-powered systems, cloud
              infrastructure and scalable web applications that help businesses
              grow.
            </p>

            {/* ================= CONTACT INFO ================= */}

            <div className="mt-7 space-y-4">

              {/* EMAIL */}

              <a
                href="mailto:hello@itservices.com"
                className="group flex items-center gap-3 text-sm text-gray-400 transition hover:text-cyan-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                  <Mail
                    size={17}
                    className="text-cyan-400"
                  />
                </span>

                hello@itservices.com
              </a>

              {/* PHONE */}

              <a
                href="tel:+1234567890"
                className="group flex items-center gap-3 text-sm text-gray-400 transition hover:text-cyan-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                  <Phone
                    size={17}
                    className="text-cyan-400"
                  />
                </span>

                +1 234 567 890
              </a>

              {/* LOCATION */}

              <div className="flex items-center gap-3 text-sm text-gray-400">

                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <MapPin
                    size={17}
                    className="text-cyan-400"
                  />
                </span>

                Global • Remote
              </div>

            </div>

            {/* ================= SOCIAL LINKS ================= */}

            <div className="mt-7 flex gap-3">

              {/* GitHub */}

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                GH
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                in
              </a>

              {/* X */}

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-gray-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                X
              </a>

            </div>

          </div>

          {/* =====================================================
              FOOTER LINK COLUMNS
          ===================================================== */}

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>

              <h3 className="mb-5 text-sm font-semibold text-white">
                {title}
              </h3>

              <ul className="space-y-3">

                {links.map((link) => (
                  <li key={link.name}>

                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
                    >
                      {link.name}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />

                    </Link>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* =====================================================
            NEWSLETTER
        ===================================================== */}

        <div className="border-y border-white/10 py-8">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            {/* NEWSLETTER TEXT */}

            <div>

              <h3 className="font-semibold text-white">
                Stay ahead with technology
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Get our latest insights and technology updates.
              </p>

            </div>

            {/* NEWSLETTER FORM */}

            <form className="flex w-full max-w-md">

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 transition focus:border-cyan-400/50 focus:bg-white/[0.07]"
              />

              <button
                type="submit"
                className="rounded-r-xl bg-cyan-400 px-5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}

        <div className="flex flex-col gap-4 py-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          {/* COPYRIGHT */}

          <p>
            © {new Date().getFullYear()} IT Services. All rights reserved.
          </p>

          {/* LEGAL LINKS */}

          <div className="flex flex-wrap gap-5">

            <Link
              href="/privacy"
              className="transition hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-300"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}