import { Phone, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-green-light rounded-full animate-pulse" />
            <span className="text-brand-green-light text-sm font-semibold">
              Same-Day Service Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-heading leading-[1.05]">
            Junk Removal &{" "}
            <span className="text-brand-green-light">Demolition</span> in Grand
            Bend & London ON
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Fast, affordable junk removal, demolition, and cleanup services
            for homes and businesses across Southwestern Ontario. Transparent
            pricing. Free estimates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="tel:5198709136"
              className="btn-primary text-base px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Call 519-870-9136
            </a>
            <Link
              href="/contact"
              className="btn-white text-base px-8 py-4"
            >
              Get a Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-brand-green-light font-heading">
                500+
              </p>
              <p className="text-sm text-gray-500 mt-1">Jobs Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-brand-green-light font-heading">
                5.0
              </p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-brand-green-light font-heading">
                Same Day
              </p>
              <p className="text-sm text-gray-500 mt-1">Service Available</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-brand-green-light font-heading">
                8+
              </p>
              <p className="text-sm text-gray-500 mt-1">Areas Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
