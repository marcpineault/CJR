import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import AreaCard from "@/components/AreaCard";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ReviewCard from "@/components/ReviewCard";
import CTABanner from "@/components/CTABanner";
import SectionHeader from "@/components/SectionHeader";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";
import reviews from "../../data/reviews.json";

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

const areas = [
  { slug: "grand-bend", city: "Grand Bend" },
  { slug: "london-ontario", city: "London, ON" },
  { slug: "lambton-shores", city: "Lambton Shores" },
  { slug: "exeter", city: "Exeter" },
  { slug: "bayfield", city: "Bayfield" },
  { slug: "zurich", city: "Zurich" },
  { slug: "strathroy", city: "Strathroy" },
  { slug: "st-thomas", city: "St. Thomas" },
];

const homeFaqs = [
  {
    question: "How much does junk removal cost in Grand Bend and London?",
    answer:
      "Our pricing is based on the volume of junk you need removed, starting from $150 for a small load. We offer free, no-obligation estimates so you know exactly what to expect before we start. Visit our pricing page for detailed rates or text us a photo for a quick quote.",
  },
  {
    question: "Do you offer same-day junk removal?",
    answer:
      "Yes! We offer same-day service for most jobs depending on availability. Call or text us at 519-870-9136 and we will do our best to accommodate your schedule. We understand that sometimes junk removal is urgent.",
  },
  {
    question: "What items do you accept for removal?",
    answer:
      "We accept almost everything including furniture, appliances, electronics, mattresses, yard waste, construction debris, and more. We do not accept hazardous materials such as chemicals, paint, asbestos, or biological waste. If you are unsure, just ask.",
  },
  {
    question: "Do you recycle or donate items?",
    answer:
      "Absolutely. We are committed to eco-friendly disposal. Usable items are donated to local charities, recyclable materials are taken to appropriate facilities, and we aim to divert as much as possible from the landfill.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Grand Bend, London, Lambton Shores, Exeter, Bayfield, Zurich, Strathroy, St. Thomas, and surrounding communities across Southwestern Ontario.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Complete Junk Removal is fully licensed and carries comprehensive liability insurance. You can trust that your property is protected on every job we do.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  const featuredReviews = reviews.slice(0, 6);

  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, faqSchema]} />

      {/* Hero */}
      <Hero />

      {/* Trust Bar */}
      <TrustBar />

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            label="Our Services"
            title="Junk Removal & Demolition Services"
            subtitle="From single-item pickups to full property cleanouts and demolition, we handle it all with care and professionalism."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Areas Served */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max">
          <SectionHeader
            label="Areas We Serve"
            title="Serving Southwestern Ontario"
            subtitle="Providing reliable junk removal and demolition services across Grand Bend, London, and surrounding communities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Get answers to the most common questions about our junk removal and demolition services."
          />
          <FAQ items={homeFaqs} />
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-brand-dark">
        <div className="container-max">
          <SectionHeader
            label="Reviews"
            title="What Our Customers Say"
            subtitle="Do not just take our word for it. See what homeowners and businesses across Southwestern Ontario have to say."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredReviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                rating={review.rating}
                text={review.text}
                location={review.location}
                service={review.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
