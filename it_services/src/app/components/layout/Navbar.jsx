"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Img from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Technologies", href: "/technologies" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="">
          {/* <span className="text-cyan-400">IT</span>Services */}
          <Img src="/logo2.png" alt="Logo" width={180} height={180} className="mr-2 inline-block" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition duration-300 ${
                pathname === item.href
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}

              {pathname === item.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-cyan-400 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#111827] transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-125" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-5 py-5">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-cyan-500 text-black"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 rounded-xl bg-cyan-500 py-3 text-center font-semibold text-black hover:bg-cyan-400"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}