import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to Clear the Clutter?",
  subtitle = "Get a free, no-obligation estimate today. Same-day service available for most jobs.",
}: CTABannerProps) {
  return (
    <section className="bg-brand-green">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-heading">
              {title}
            </h2>
            <p className="mt-3 text-green-100 text-lg max-w-xl">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="tel:5198709136"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-green font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              519-870-9136
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-bold px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-base"
            >
              Get Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
