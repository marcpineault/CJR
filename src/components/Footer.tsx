import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { href: "/services/residential-junk-removal", label: "Residential Junk Removal" },
  { href: "/services/commercial-junk-removal", label: "Commercial Junk Removal" },
  { href: "/services/garden-yard-waste", label: "Garden & Yard Waste" },
  { href: "/services/residential-demolition", label: "Residential Demolition" },
  { href: "/services/commercial-demolition", label: "Commercial Demolition" },
  { href: "/services/debris-removal", label: "Debris Removal" },
  { href: "/services/estate-cleanouts", label: "Estate Cleanouts" },
];

const areaLinks = [
  { href: "/areas/grand-bend", label: "Grand Bend" },
  { href: "/areas/london-ontario", label: "London, ON" },
  { href: "/areas/lambton-shores", label: "Lambton Shores" },
  { href: "/areas/exeter", label: "Exeter" },
  { href: "/areas/bayfield", label: "Bayfield" },
  { href: "/areas/zurich", label: "Zurich" },
  { href: "/areas/strathroy", label: "Strathroy" },
  { href: "/areas/st-thomas", label: "St. Thomas" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo + Contact */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/images/logo-mono.png"
                alt="Complete Junk Removal"
                width={180}
                height={44}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional junk removal, demolition, and cleanup services
              serving Grand Bend, London, and surrounding communities in
              Southwestern Ontario.
            </p>
            <div className="space-y-3">
              <a
                href="tel:5198709136"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-green-light transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-green-light flex-shrink-0" />
                519-870-9136
              </a>
              <a
                href="mailto:info@completejunkremoval.ca"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-green-light transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-green-light flex-shrink-0" />
                info@completejunkremoval.ca
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-brand-green-light flex-shrink-0 mt-0.5" />
                Grand Bend, Ontario
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-brand-green-light flex-shrink-0 mt-0.5" />
                Mon–Sat: 7:00 AM – 7:00 PM
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-green-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Areas Served */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">
              Areas Served
            </h3>
            <ul className="space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-green-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-green-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-sm font-semibold text-white mb-1">
                Fully Insured
              </p>
              <p className="text-xs text-gray-400">
                Licensed and insured for your peace of mind. We carry full
                liability coverage on every job.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Complete Junk Removal. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-brand-green-light transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-500 hover:text-brand-green-light transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
