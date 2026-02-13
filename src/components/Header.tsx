"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#projects" },
    { label: "Our Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact Us", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-vesper-charcoal text-white py-2">
        <div className="container mx-auto px-4 flex justify-end">
          <a
            href="tel:555.123.4567"
            className="flex items-center gap-2 text-sm font-medium hover:text-vesper-tan transition-colors"
          >
            <Phone size={14} />
            555.123.4567
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/vesper-logo.png"
              alt="Vesper Painting"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-vesper-charcoal font-medium hover:text-vesper-blue transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="#quote"
              className="hidden sm:block bg-vesper-charcoal hover:bg-vesper-slate text-white font-oswald font-semibold uppercase px-5 py-2.5 text-sm tracking-wide transition-colors"
            >
              Get a Free Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-vesper-charcoal hover:text-vesper-blue transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-vesper-charcoal font-medium hover:text-vesper-blue transition-colors text-sm uppercase tracking-wide py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#quote"
                className="sm:hidden bg-vesper-charcoal hover:bg-vesper-slate text-white font-oswald font-semibold uppercase px-5 py-2.5 text-sm tracking-wide transition-colors text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
