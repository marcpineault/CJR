import { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import CTABanner from "@/components/CTABanner";
import SchemaMarkup from "@/components/SchemaMarkup";
import reviews from "../../../data/reviews.json";

export const metadata: Metadata = {
  title: "Customer Reviews — 5-Star Junk Removal Grand Bend & London ON",
  description:
    "Read real 5-star customer reviews for Complete Junk Removal in Grand Bend, London & Southwestern Ontario. See why homeowners and businesses trust us for junk removal and demolition.",
  alternates: {
    canonical: "https://completejunkremoval.ca/reviews",
  },
  openGraph: {
    title: "Customer Reviews — Complete Junk Removal",
    description: "5-star rated junk removal and demolition services in Grand Bend & London Ontario.",
    images: [{ url: "/images/team-group-photo.webp", width: 1200, height: 630, alt: "Complete Junk Removal 5-star rated team" }],
  },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Complete Junk Removal",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(reviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
    },
  })),
};

export default function ReviewsPage() {
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <>
      <SchemaMarkup schema={aggregateRatingSchema} />

      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green-light mb-3">
              Reviews
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-heading">
              What Our Customers Say
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              We are proud of the relationships we build with our customers.
              Here is what homeowners and businesses across Southwestern Ontario
              have to say about working with us.
            </p>

            {/* Rating Summary */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-5xl font-extrabold text-white font-heading">
                  {avgRating.toFixed(1)}
                </span>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Based on {reviews.length} reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-brand-dark">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, index) => (
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

      {/* Leave a Review */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading mb-4">
            Had a Great Experience?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We would love to hear from you! Leave us a review on Google and help
            other homeowners find reliable junk removal services in their area.
          </p>
          <a
            href="https://share.google/rcAIVYZ6qY3ZdHZZv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            Leave a Google Review
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
