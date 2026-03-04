import { Metadata } from "next";
import Image from "next/image";
import { Shield, Recycle, Heart, MapPin, Users, Award } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Us — Local Junk Removal Team Grand Bend & London ON",
  description:
    "Meet the Complete Junk Removal team — locally owned, fully insured junk removal and demolition experts serving Grand Bend, London, Lambton Shores & Southwestern Ontario since day one.",
  alternates: {
    canonical: "https://completejunkremoval.ca/about",
  },
  openGraph: {
    title: "About Complete Junk Removal — Your Local Junk Removal Experts",
    description:
      "Locally owned and operated junk removal and demolition team serving Grand Bend, London & Southwestern Ontario.",
    images: [
      {
        url: "/images/team-group-photo.webp",
        width: 1200,
        height: 630,
        alt: "Complete Junk Removal team standing with their fleet of trucks",
      },
    ],
  },
};

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every job starts with listening. We take the time to understand your needs and deliver a service that exceeds expectations. Your satisfaction is not negotiable.",
  },
  {
    icon: Recycle,
    title: "Responsible Disposal",
    description:
      "We sort every load to donate, recycle, or repurpose as much as possible. We work with local charities and recycling centres to keep reusable materials out of the landfill.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "We carry comprehensive liability insurance on every job. You can trust that your property is fully protected while we work. Peace of mind comes standard.",
  },
  {
    icon: MapPin,
    title: "Proudly Local",
    description:
      "We live and work in the communities we serve. When you hire Complete Junk Removal, you are supporting a local business that cares about Southwestern Ontario.",
  },
  {
    icon: Users,
    title: "Reliable Team",
    description:
      "Our crew is professional, punctual, and respectful. We show up on time, work efficiently, and leave your space cleaner than we found it. Every single time.",
  },
  {
    icon: Award,
    title: "Fair & Transparent",
    description:
      "No hidden fees, no bait-and-switch pricing. We give you an honest quote upfront and stick to it. What we quote is what you pay — guaranteed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="relative bg-brand-dark py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team-group-photo.webp"
            alt="Complete Junk Removal team members standing together in front of their truck fleet"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/70" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green-light mb-3">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-heading">
              Your Local Junk Removal Experts
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              Complete Junk Removal is a locally owned and operated junk removal
              and demolition company based in Grand Bend, Ontario, proudly
              serving London and communities across Southwestern Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-5xl">
          {/* Team photo */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <Image
              src="/images/owner-with-fleet.webp"
              alt="Complete Junk Removal owner standing proudly with the company truck fleet and dump trailers"
              width={1200}
              height={600}
              className="w-full h-64 md:h-96 object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading mb-6">
                  Built on Hard Work and Community Trust
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Complete Junk Removal started with a simple idea: provide
                    honest, reliable junk removal services to the communities we
                    call home. Based in Grand Bend, Ontario, we saw a need for a
                    junk removal company that truly cares about its customers and
                    the environment.
                  </p>
                  <p>
                    What began as a small operation has grown into a trusted name
                    across Southwestern Ontario. From residential cleanouts in
                    Lambton Shores to commercial demolition projects in London, we
                    have built our reputation one job at a time — through hard
                    work, fair pricing, and a commitment to doing things right.
                  </p>
                  <p>
                    We are not a franchise. We are not a call centre that
                    dispatches strangers to your door. We are your neighbours. We
                    live in these communities, we shop at the same stores, and we
                    take pride in keeping our region clean and beautiful.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/junk-hauling-walkway.webp"
                    alt="Complete Junk Removal crew hauling bags and items from a residential property"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <div className="bg-brand-cream rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Why Local Matters
                  </h3>
                  <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                      When you hire a local company, your money stays in the
                      community. We hire locally, we use local suppliers, and we
                      donate usable items to local charities. That is the kind of
                      impact a national franchise simply cannot offer.
                    </p>
                    <p>
                      Being local also means we know the area. We know which
                      recycling centres accept which materials. We know the roads,
                      the neighbourhoods, and the regulations. And we know that our
                      reputation depends on every single job we do.
                    </p>
                    <p>
                      When you call Complete Junk Removal, you are talking to the
                      people who will actually be doing the work. That direct
                      relationship is something we value deeply, and it is why our
                      customers keep coming back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-brand-cream">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green mb-3">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card">
                <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-black mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl text-center">
          <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-heading mb-4">
            Licensed & Fully Insured
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Complete Junk Removal carries comprehensive commercial general
            liability insurance. Every member of our team is covered, and your
            property is protected on every job. We are happy to provide proof of
            insurance upon request. Your peace of mind is our priority.
          </p>
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green font-semibold px-6 py-3 rounded-full text-sm">
            <Shield className="w-5 h-5" />
            Full Liability Coverage on Every Job
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Work With a Team You Can Trust?"
        subtitle="Get a free, no-obligation estimate from your local junk removal experts."
      />
    </>
  );
}
