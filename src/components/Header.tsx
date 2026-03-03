"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { slug: "residential-junk-removal", label: "Residential Junk Removal" },
  { slug: "commercial-junk-removal", label: "Commercial Junk Removal" },
  { slug: "garden-yard-waste", label: "Garden & Yard Waste" },
  { slug: "residential-demolition", label: "Residential Demolition" },
  { slug: "commercial-demolition", label: "Commercial Demolition" },
  { slug: "debris-removal", label: "Debris Removal" },
  { slug: "estate-cleanouts", label: "Estate Cleanouts" },
];

const areas = [
  { slug: "grand-bend", label: "Grand Bend" },
  { slug: "london-ontario", label: "London, ON" },
  { slug: "lambton-shores", label: "Lambton Shores" },
  { slug: "exeter", label: "Exeter" },
  { slug: "bayfield", label: "Bayfield" },
  { slug: "zurich", label: "Zurich" },
  { slug: "strathroy", label: "Strathroy" },
  { slug: "st-thomas", label: "St. Thomas" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-full.png"
              alt="Complete Junk Removal"
              width={200}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold text-brand-black hover:text-brand-green transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-brand-black hover:text-brand-green transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[260px]">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-green transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-brand-black hover:text-brand-green transition-colors">
                Areas Served
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                  {areas.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/areas/${a.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-green transition-colors"
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-semibold text-brand-black hover:text-brand-green transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-semibold text-brand-black hover:text-brand-green transition-colors"
            >
              About
            </Link>
            <Link
              href="/reviews"
              className="px-3 py-2 text-sm font-semibold text-brand-black hover:text-brand-green transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-semibold text-brand-black hover:text-brand-green transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:5198709136"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-green-light transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              519-870-9136
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-brand-dark text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Get Estimate
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-brand-black"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-brand-black rounded-lg hover:bg-brand-cream"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-brand-black rounded-lg hover:bg-brand-cream"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-green"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Areas */}
            <div>
              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-brand-black rounded-lg hover:bg-brand-cream"
              >
                Areas Served
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    areasOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {areasOpen && (
                <div className="pl-4 space-y-1">
                  {areas.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/areas/${a.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-green"
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-brand-black rounded-lg hover:bg-brand-cream"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-brand-black rounded-lg hover:bg-brand-cream"
            >
              About
            </Link>
            <Link
              href="/reviews"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-brand-black rounded-lg hover:bg-brand-cream"
            >
              Reviews
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-brand-black rounded-lg hover:bg-brand-cream"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-brand-black rounded-lg hover:bg-brand-cream"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-gray-100">
              <a
                href="tel:5198709136"
                className="flex items-center justify-center gap-2 w-full bg-brand-green text-white font-semibold py-3 rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                Call 519-870-9136
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
