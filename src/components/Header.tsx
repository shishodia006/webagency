"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-dark shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          WebAgency<span className="text-black">.live</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/integration" className="hover:text-blue-600 transition">Integration</Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="block">Services</Link>
          <Link href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block">Portfolio</Link>
          <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block">Testimonials</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </header>
  );
}
