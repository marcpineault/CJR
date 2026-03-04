import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Shield,
  Recycle,
  Clock,
  ThumbsUp,
  DollarSign,
} from "lucide-react";
import SchemaMarkup, {
  localBusinessSchema,
} from "@/components/SchemaMarkup";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import services from "../../../../data/services.json";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "residential-junk-removal": {
    src: "/images/junk-removal-furniture-hallway.jpg",
    alt: "Complete Junk Removal worker carrying a couch through a hallway during residential junk removal",
  },
  "commercial-junk-removal": {
    src: "/images/junk-hauling-walkway.jpg",
    alt: "Junk removal crew hauling commercial waste and bags from a property",
  },
  "garden-yard-waste": {
    src: "/images/demolition-wood-dumpster.jpg",
    alt: "Worker tossing yard waste and wood debris into a dump trailer",
  },
  "residential-demolition": {
    src: "/images/shed-demolition-service.jpg",
    alt: "Complete Junk Removal crew performing shed demolition with a sledgehammer in Ontario",
  },
  "commercial-demolition": {
    src: "/images/deck-demolition-sawzall.jpg",
    alt: "Worker using a reciprocating saw for deck demolition and removal",
  },
  "debris-removal": {
    src: "/images/demolition-wood-dumpster.jpg",
    alt: "Construction debris being loaded into a Complete Junk Removal dump trailer",
  },
  "estate-cleanouts": {
    src: "/images/junk-removal-furniture-hallway.jpg",
    alt: "Crew member carrying furniture during an estate cleanout in Southwestern Ontario",
  },
};

/* ---------- Static generation ---------- */

export function generateStaticParams(): { slug: string }[] {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/* ---------- Dynamic metadata ---------- */

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const ogImage = serviceImages[service.slug];

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://completejunkremoval.ca/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://completejunkremoval.ca/services/${service.slug}`,
      type: "website",
      locale: "en_CA",
      siteName: "Complete Junk Removal",
      images: ogImage
        ? [{ url: ogImage.src, width: 1200, height: 630, alt: ogImage.alt }]
        : [{ url: "/images/team-trucks-fleet.jpg", width: 1200, height: 630, alt: "Complete Junk Removal team and fleet" }],
    },
  };
}

/* ---------- Why-choose-us icon rotation ---------- */

const whyIcons = [Shield, Recycle, Clock, ThumbsUp, DollarSign];

/* ---------- Page component ---------- */

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  /* Related services data */
  const relatedServices = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  /* Schema: Service */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Complete Junk Removal",
      telephone: "+1-519-870-9136",
      url: "https://completejunkremoval.ca",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Grand Bend",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    areaServed: [
      { "@type": "City", name: "Grand Bend" },
      { "@type": "City", name: "London" },
      { "@type": "City", name: "Lambton Shores" },
      { "@type": "City", name: "Exeter" },
      { "@type": "City", name: "Bayfield" },
      { "@type": "City", name: "Zurich" },
      { "@type": "City", name: "Strathroy" },
      { "@type": "City", name: "St. Thomas" },
    ],
    url: `https://completejunkremoval.ca/services/${service.slug}`,
  };

  /* Schema: FAQPage */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, serviceSchema, faqSchema]} />

      {/* ───────── Hero ───────── */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green-light mb-3">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-heading">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              {service.heroDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:5198709136"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-green/90 transition-colors text-base"
              >
                <Phone className="w-5 h-5" />
                519-870-9136
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

      {/* ───────── Content section ───────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Service Image */}
            {serviceImages[service.slug] && (
              <div className="rounded-2xl overflow-hidden mb-12">
                <Image
                  src={serviceImages[service.slug].src}
                  alt={serviceImages[service.slug].alt}
                  width={1200}
                  height={500}
                  className="w-full h-64 md:h-80 object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            )}

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-16">
              {service.content.intro.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* What's Included */}
            <div className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading text-brand-black mb-8">
                What&apos;s Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.content.whatsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all text-sm"
                >
                  View our pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading text-brand-black mb-8">
                Our Process
              </h2>
              <div className="space-y-6">
                {service.content.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-heading font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who It's For */}
            <div className="mb-0">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading text-brand-black mb-6">
                Who It&apos;s For
              </h2>
              <div className="prose prose-lg max-w-none">
                {service.content.whoItsFor.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Why Choose Us ───────── */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max">
          <SectionHeader
            label="Why Choose Us"
            title="Why Choose Complete Junk Removal"
            subtitle="Locally owned, fully insured, and committed to responsible disposal across Grand Bend, London, and Lambton Shores."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.content.whyChooseUs.map((reason, idx) => {
              const Icon = whyIcons[idx % whyIcons.length];
              return (
                <div key={idx} className="card">
                  <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {reason}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.title.toLowerCase()} service.`}
          />
          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* ───────── Related Services ───────── */}
      <section className="section-padding bg-brand-dark">
        <div className="container-max">
          <SectionHeader
            label="Related Services"
            title="Other Services You May Need"
            subtitle="Explore more ways Complete Junk Removal can help with your project."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedServices.map((related) => (
              <ServiceCard
                key={related.slug}
                slug={related.slug}
                title={related.title}
                description={related.shortDescription}
                icon={related.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA Banner ───────── */}
      <CTABanner
        title="Ready to Get Started?"
        subtitle="Call for a free, no-obligation estimate. Same-day service available for most jobs in Grand Bend, London, and surrounding areas."
      />
    </>
  );
}
