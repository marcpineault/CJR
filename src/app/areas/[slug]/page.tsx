import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import CTABanner from "@/components/CTABanner";
import ServiceCard from "@/components/ServiceCard";
import areas from "../../../../data/areas.json";

const services = [
  {
    slug: "residential-junk-removal",
    title: "Residential Junk Removal",
    description:
      "Furniture, appliances, mattresses, and household junk removed quickly from your home. We do all the heavy lifting.",
    icon: "Home",
  },
  {
    slug: "commercial-junk-removal",
    title: "Commercial Junk Removal",
    description:
      "Office cleanouts, retail store removals, and commercial waste disposal for businesses across the region.",
    icon: "Building2",
  },
  {
    slug: "garden-yard-waste",
    title: "Garden & Yard Waste",
    description:
      "Branches, brush, soil, sod, and garden debris hauled away. Perfect after landscaping or storm cleanup.",
    icon: "TreePine",
  },
  {
    slug: "residential-demolition",
    title: "Residential Demolition",
    description:
      "Deck removal, shed teardown, fence demolition, hot tub removal, and interior demolition for homeowners.",
    icon: "Hammer",
  },
  {
    slug: "commercial-demolition",
    title: "Commercial Demolition",
    description:
      "Interior strip-outs, storefront demolition, and commercial structure removal done safely and on schedule.",
    icon: "HardHat",
  },
  {
    slug: "debris-removal",
    title: "Debris Removal",
    description:
      "Post-construction, renovation, and storm debris cleanup. We haul away all materials and leave the site clean.",
    icon: "Truck",
  },
  {
    slug: "estate-cleanouts",
    title: "Estate Cleanouts",
    description:
      "Compassionate, thorough estate cleanout services. We handle everything with care and respect during difficult times.",
    icon: "Package",
  },
];

const otherAreas = areas.map((a) => ({ slug: a.slug, city: a.city }));

export function generateStaticParams(): { slug: string }[] {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) {
    return {
      title: "Area Not Found | Complete Junk Removal",
    };
  }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `https://completejunkremoval.ca/areas/${area.slug}`,
    },
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = areas.find((a) => a.slug === params.slug);

  if (!area) {
    return (
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-heading mb-4">
            Area Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The area you are looking for does not exist.
          </p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </section>
    );
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Complete Junk Removal",
    description: `Professional junk removal services in ${area.city}, Ontario.`,
    url: `https://completejunkremoval.ca/areas/${area.slug}`,
    telephone: "+1-519-870-9136",
    email: "info@completejunkremoval.ca",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Grand Bend",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "City",
      name: area.city,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
    priceRange: "$$",
    image: "https://completejunkremoval.ca/images/logo-full.png",
  };

  const introParagraphs = area.content.intro.split("\n\n");

  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green-light mb-3">
              Areas We Serve
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-heading">
              {area.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              {area.heroDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:5198709136"
                className="inline-flex items-center justify-center gap-2 btn-primary text-base"
              >
                <Phone className="w-5 h-5" />
                Call 519-870-9136
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-base"
              >
                Get a Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            {introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Local Details */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
            Local Knowledge
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading mb-6">
            What Makes {area.city} Unique
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            {area.content.localDetails.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              Local Landmarks & Areas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              Serving All of {area.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {area.landmarks.map((landmark) => (
              <div
                key={landmark}
                className="card flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
                <span className="font-heading font-bold text-brand-black text-sm">
                  {landmark}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              Neighbourhoods
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              Neighbourhoods We Serve in {area.city}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {area.neighbourhoods.map((neighbourhood) => (
              <span
                key={neighbourhood}
                className="inline-flex items-center gap-2 bg-white text-brand-black font-semibold px-5 py-3 rounded-full text-sm shadow-sm border border-gray-100"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                {neighbourhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              Our Services
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              Services Available in {area.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              {area.content.servicesAvailable}
            </p>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              More Areas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              Other Areas We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherAreas
              .filter((a) => a.slug !== area.slug)
              .map((otherArea) => (
                <Link
                  key={otherArea.slug}
                  href={`/areas/${otherArea.slug}`}
                  className="card group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-base font-bold text-brand-black">
                      {otherArea.city}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Junk Removal & Demolition
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-green transition-colors flex-shrink-0" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={`Need Junk Removal in ${area.city}?`}
        subtitle="Get a free, no-obligation estimate today. Same-day service available for most jobs."
      />
    </>
  );
}
