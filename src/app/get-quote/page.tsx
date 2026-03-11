import { Metadata } from "next";
import {
  Phone,
  Star,
  Shield,
  Clock,
  Truck,
  Recycle,
  CheckCircle2,
} from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import ReviewCard from "@/components/ReviewCard";
import reviews from "../../../data/reviews.json";

export const metadata: Metadata = {
  title: "Get a Free Junk Removal Quote — Complete Junk Removal",
  description:
    "Get a free, no-obligation junk removal estimate in Grand Bend, London & Southwestern Ontario. Same-day service available. Call 519-870-9136.",
  alternates: {
    canonical: "https://completejunkremoval.ca/get-quote",
  },
  openGraph: {
    title: "Get a Free Junk Removal Quote — Complete Junk Removal",
    description:
      "Fast, affordable junk removal starting at $150. Same-day service. Free estimates. Call 519-870-9136.",
    images: [
      {
        url: "/images/complete-junk-removal-trailer.webp",
        width: 1200,
        height: 630,
        alt: "Complete Junk Removal truck and trailer",
      },
    ],
  },
};

const featuredReviews = reviews.filter((r) => r.rating === 5).slice(0, 3);

const items = [
  "Furniture & Mattresses",
  "Appliances",
  "Yard Waste & Brush",
  "Garage & Basement Cleanouts",
  "Construction Debris",
  "Hot Tubs & Sheds",
  "Estate Cleanouts",
  "E-Waste & Electronics",
];

export default function GetQuotePage() {
  return (
    <>
      {/* Hero — phone-first CTA */}
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left — headline + phone */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green-light mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-green-light animate-pulse" />
                Same-Day Service Available
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-heading">
                Get Your Free
                <br />
                Junk Removal Quote
              </h1>
              <p className="mt-4 text-lg text-gray-400 max-w-lg">
                Tell us what you need gone — we&apos;ll give you an honest price
                and haul it away fast. No hidden fees, no surprises.
              </p>

              {/* Phone CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:5198709136"
                  className="inline-flex items-center justify-center gap-3 bg-brand-green text-white font-bold text-xl px-8 py-4 rounded-xl hover:bg-brand-green-light transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  519-870-9136
                </a>
                <a
                  href="sms:5198709136"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/20 transition-colors text-sm"
                >
                  Or text us a photo for a quick quote
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  5.0 Star Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-brand-green-light" />
                  500+ Jobs Done
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-brand-green-light" />
                  Fully Insured
                </span>
              </div>
            </div>

            {/* Right — quote form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="font-heading text-xl font-bold text-brand-black mb-1">
                Request Your Free Estimate
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                Fill this out and we&apos;ll get back to you fast.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-2">
              We Haul It All
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              What We Remove
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 p-3 rounded-lg bg-brand-cream"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                <span className="text-sm font-medium text-brand-black">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us What You Need Gone",
                desc: "Call, text, or fill out the form above. Send photos for the fastest quote.",
              },
              {
                step: "2",
                title: "Get Your Free Quote",
                desc: "We'll give you an honest, upfront price. No hidden fees. No surprises.",
              },
              {
                step: "3",
                title: "We Haul It Away",
                desc: "We show up on time, load everything up, and leave your space clean.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-green flex items-center justify-center">
                  <span className="text-white font-heading font-extrabold text-xl">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-600 mb-8">
              We charge by volume — you only pay for the space your junk takes up
              in our trailer. No hourly rates. No surprise fees.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { size: "1/4 Load", price: "$150" },
                { size: "1/2 Load", price: "$300" },
                { size: "3/4 Load", price: "$450" },
                { size: "Full Load", price: "$575+" },
              ].map((tier) => (
                <div
                  key={tier.size}
                  className="card text-center p-5"
                >
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    {tier.size}
                  </p>
                  <p className="font-heading text-3xl font-extrabold text-brand-green">
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Exact pricing depends on items and accessibility. We always quote
              before we start.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Fully Licensed & Insured",
                desc: "Complete liability coverage on every job",
              },
              {
                icon: Clock,
                title: "Same-Day Service",
                desc: "Call before noon, we can come today",
              },
              {
                icon: Recycle,
                title: "Eco-Friendly Disposal",
                desc: "We donate and recycle whenever possible",
              },
              {
                icon: Star,
                title: "5-Star Rated",
                desc: "500+ jobs completed with top reviews",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-brand-dark">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading text-white">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <ReviewCard
                key={review.name}
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

      {/* Final CTA */}
      <section className="bg-brand-green py-12 md:py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-heading mb-4">
            Ready to Get Rid of Your Junk?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Call now for a free estimate. Same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:5198709136"
              className="inline-flex items-center gap-3 bg-white text-brand-green font-bold text-xl px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6" />
              519-870-9136
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/30 transition-colors"
            >
              Fill Out the Form Above
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Footer */}
      <section className="bg-brand-dark py-8 border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Proudly serving Grand Bend, London, Lambton Shores, Exeter,
            Bayfield, Zurich, Strathroy, St. Thomas and surrounding areas.
          </p>
        </div>
      </section>
    </>
  );
}
