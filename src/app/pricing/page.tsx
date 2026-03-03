import { Metadata } from "next";
import { MessageCircle, Truck, Info } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Junk Removal Pricing Grand Bend & London ON",
  description:
    "Transparent junk removal pricing in Grand Bend & London Ontario. Volume-based rates, free estimates, no hidden fees. Call 519-870-9136.",
  alternates: {
    canonical: "https://completejunkremoval.ca/pricing",
  },
};

const loadSizes = [
  {
    name: "Small Load",
    description: "Single items or a few bags",
    examples: "A few boxes, a single appliance, small furniture piece",
    price: "From $150",
    fill: "25%",
  },
  {
    name: "Quarter Load",
    description: "About ¼ of our trailer",
    examples: "Several bags, a couple of furniture pieces, small cleanout",
    price: "From $250",
    fill: "25%",
  },
  {
    name: "Half Load",
    description: "About ½ of our trailer",
    examples: "Room cleanout, garage cleanup, moderate renovation debris",
    price: "From $375",
    fill: "50%",
  },
  {
    name: "Three-Quarter Load",
    description: "About ¾ of our trailer",
    examples: "Multiple rooms, large garage, significant debris",
    price: "From $475",
    fill: "75%",
  },
  {
    name: "Full Load",
    description: "Full trailer load",
    examples: "Whole-home cleanout, major renovation, full estate cleanout",
    price: "From $575",
    fill: "100%",
  },
];

const pricingFaqs = [
  {
    question: "How do you determine the price?",
    answer:
      "Our pricing is based on the volume of space your items take up in our trailer. We provide a free estimate before any work begins, so you know exactly what to expect. There are no hidden fees — the price we quote is the price you pay.",
  },
  {
    question: "Is there a minimum charge?",
    answer:
      "Yes, our minimum charge starts at $150 for small loads like a single item or a few bags. This covers our travel time, labour, and responsible disposal. Even for small jobs, we provide the same professional service.",
  },
  {
    question: "What is included in the price?",
    answer:
      "Everything. Our price includes labour, loading, transportation, and disposal or recycling fees. We do all the heavy lifting — you do not need to move items to the curb or prepare anything. Just point and we handle the rest.",
  },
  {
    question: "How can I get a more accurate quote?",
    answer:
      "The easiest way is to text us a photo at 519-870-9136. We can usually give you a quote within minutes based on photos. For larger or more complex jobs, we will come out for a free on-site estimate.",
  },
  {
    question: "Do demolition jobs have different pricing?",
    answer:
      "Yes, demolition projects are priced on a project basis depending on the scope, materials, accessibility, and disposal requirements. Contact us for a free demolition estimate — we will walk the site with you and provide a detailed quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green-light mb-3">
              Pricing
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-heading">
              Transparent, Volume-Based Pricing
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              No surprises, no hidden fees. Our junk removal pricing is based on
              how much space your items take up in our trailer. Get a free
              estimate before we start.
            </p>
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              Pay Only for the Space You Use
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We charge based on the volume of junk loaded into our trailer.
              More stuff means a bigger load, but you only pay for what you use.
              Every quote includes labour, loading, hauling, and disposal.
            </p>
          </div>

          {/* Load Size Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {loadSizes.map((load) => (
              <div
                key={load.name}
                className="card text-center flex flex-col items-center"
              >
                {/* Trailer visual */}
                <div className="w-full h-28 bg-gray-100 rounded-lg mb-4 relative overflow-hidden border border-gray-200">
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">
                    {/* Trailer shape */}
                    <div className="w-full h-24 border-2 border-gray-300 rounded-t-md relative bg-white">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-brand-green/20 transition-all"
                        style={{ height: load.fill }}
                      />
                      {/* Items representation */}
                      <div
                        className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-center gap-0.5 p-1"
                        style={{ height: load.fill }}
                      >
                        {Array.from({
                          length: Math.ceil(parseInt(load.fill) / 10),
                        }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-brand-green/40 rounded-sm"
                            style={{
                              width: `${8 + Math.random() * 12}px`,
                              height: `${8 + Math.random() * 16}px`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Wheels */}
                  <div className="absolute bottom-0 left-3 w-3 h-3 bg-gray-400 rounded-full" />
                  <div className="absolute bottom-0 right-3 w-3 h-3 bg-gray-400 rounded-full" />
                </div>

                <h3 className="font-heading text-lg font-bold text-brand-black">
                  {load.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {load.description}
                </p>
                <p className="text-2xl font-extrabold text-brand-green font-heading mb-2">
                  {load.price}
                </p>
                <p className="text-xs text-gray-400">{load.examples}</p>
              </div>
            ))}
          </div>

          {/* Text a photo CTA */}
          <div className="mt-12 bg-brand-cream rounded-2xl p-8 md:p-10 max-w-3xl mx-auto text-center">
            <MessageCircle className="w-10 h-10 text-brand-green mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-brand-black mb-2">
              Text Us a Photo for a Quick Quote
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              The fastest way to get an accurate price is to text us photos of
              what you need removed. We will respond with a quote, usually
              within minutes.
            </p>
            <a
              href="sms:5198709136"
              className="btn-primary text-base px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Text 519-870-9136
            </a>
          </div>
        </div>
      </section>

      {/* Demolition Pricing */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
                Demolition Services
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading mb-4">
                Demolition Pricing
              </h2>
              <p className="text-gray-600 mb-4">
                Demolition projects are quoted on a project basis, as every job
                is unique. Factors that affect pricing include:
              </p>
              <ul className="space-y-3">
                {[
                  "Size and scope of the structure",
                  "Materials involved (wood, concrete, metal)",
                  "Accessibility and site conditions",
                  "Disposal and recycling requirements",
                  "Required permits and safety measures",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="font-heading text-xl font-bold mb-4">
                Common Demolition Projects
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Deck Removal", range: "$500 – $2,500+" },
                  { label: "Shed Demolition", range: "$400 – $1,500+" },
                  { label: "Fence Removal", range: "$300 – $1,200+" },
                  { label: "Hot Tub Removal", range: "$400 – $800+" },
                  { label: "Interior Demolition", range: "$1,000 – $5,000+" },
                  { label: "Garage Demolition", range: "$2,000 – $6,000+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-brand-green">
                      {item.range}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                * Prices are estimates. Contact us for a free, accurate quote
                for your specific project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              Everything Is Included
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No hidden fees, no surprise charges. Here is what every job
              includes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Truck,
                title: "Loading & Hauling",
                desc: "We do all the heavy lifting and load everything into our trailer.",
              },
              {
                icon: Truck,
                title: "Transportation",
                desc: "We transport your junk to the appropriate disposal or recycling facility.",
              },
              {
                icon: Truck,
                title: "Disposal & Recycling",
                desc: "All disposal fees are included. We sort and recycle whenever possible.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              Pricing Questions
            </h2>
          </div>
          <FAQ items={pricingFaqs} />
        </div>
      </section>

      <CTABanner
        title="Get Your Free Estimate Today"
        subtitle="Call, text, or send us photos for a fast, accurate quote. No obligation."
      />
    </>
  );
}
