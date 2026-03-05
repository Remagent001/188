"use client";

import { useState } from "react";
import type { SiteConfig } from "@repo/ui/types/site";

interface HeaderProps {
  site: SiteConfig;
}

const services = [
  { label: "Men's Haircuts", href: "/services/mens-haircuts" },
  { label: "Hair Coloring & Blending", href: "/services/hair-coloring" },
  { label: "Men's Skin Treatments", href: "/services/mens-facials" },
  { label: "Straight-Razor Shaves", href: "/services/straight-razor-shaves" },
  { label: "Men's Waxing", href: "/services/mens-waxing" },
  { label: "Scalp Treatments", href: "/services/scalp-treatments" },
  { label: "Facial Hair Sculpting", href: "/services/facial-hair-sculpting" },
  { label: "Groom & Bachelor Packages", href: "/services/groom-bachelor-packages" },
];

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header({ site }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#212934] text-center text-xs text-white/70 py-1.5 tracking-wider uppercase">
        Open 7 Days a Week &nbsp;|&nbsp;{" "}
        <a href={`tel:${site.phone}`} className="hover:text-white transition-colors">
          {site.phoneFormatted}
        </a>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/images/Logo.gif"
            alt="18|8 Fine Men's Salon"
            className="h-10 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="/services"
              className="text-[#212934] hover:text-[#aa0000] uppercase tracking-wider text-xs font-medium transition-colors flex items-center gap-1"
            >
              Services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 py-2 w-56 shadow-lg">
                {services.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-xs text-gray-600 hover:text-[#aa0000] hover:bg-gray-50 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#212934] hover:text-[#aa0000] uppercase tracking-wider text-xs font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#aa0000] hover:bg-[#880000] text-white font-bold text-xs uppercase tracking-widest px-4 py-2.5 transition-colors"
          >
            Book Online
          </a>
          <button
            className="lg:hidden text-[#212934] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-1">
          <a href="/services" className="block text-[#212934] py-2 text-sm uppercase tracking-wider">Services</a>
          {services.map((s) => (
            <a key={s.href} href={s.href} className="block text-gray-500 py-1.5 text-xs pl-4 hover:text-[#aa0000]">
              {s.label}
            </a>
          ))}
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block text-[#212934] py-2 text-sm uppercase tracking-wider hover:text-[#aa0000]">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
