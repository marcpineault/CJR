import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SchemaMarkup, { localBusinessSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact Us — Free Junk Removal Estimate Grand Bend & London ON",
  description:
    "Get a free junk removal or demolition estimate in Grand Bend, London & Southwestern Ontario. Call 519-870-9136, text us photos for a quick quote, or fill out our contact form. Same-day service available.",
  alternates: {
    canonical: "https://completejunkremoval.ca/contact",
  },
  openGraph: {
    title: "Contact Complete Junk Removal — Free Estimates",
    description: "Call 519-870-9136 or text us photos for a fast, free junk removal quote in Grand Bend & London ON.",
    images: [{ url: "/images/owner-with-fleet.jpg", width: 1200, height: 630, alt: "Contact Complete Junk Removal for a free estimate" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-green-light mb-3">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-heading">
              Get Your Free Estimate
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              Ready to get rid of your junk? Call us, text us a photo, or fill
              out the form below. We respond quickly and provide free,
              no-obligation estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black mb-1">
                        Call Us
                      </h3>
                      <a
                        href="tel:5198709136"
                        className="text-brand-green font-bold text-lg hover:text-brand-green-light transition-colors"
                      >
                        519-870-9136
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Call or text anytime
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black mb-1">
                        Text a Photo
                      </h3>
                      <p className="text-sm text-gray-600">
                        Send us photos of what you need removed for a fast,
                        accurate quote.
                      </p>
                      <a
                        href="sms:5198709136"
                        className="inline-block mt-2 text-brand-green font-semibold text-sm hover:text-brand-green-light transition-colors"
                      >
                        Text 519-870-9136
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@completejunkremoval.ca"
                        className="text-brand-green font-semibold text-sm hover:text-brand-green-light transition-colors"
                      >
                        info@completejunkremoval.ca
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black mb-1">
                        Service Area
                      </h3>
                      <p className="text-sm text-gray-600">
                        Grand Bend, London, Lambton Shores, Exeter, Bayfield,
                        Zurich, Strathroy, St. Thomas
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black mb-1">
                        Business Hours
                      </h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Monday – Friday: 7:00 AM – 7:00 PM</p>
                        <p>Saturday: 8:00 AM – 5:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-brand-cream">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">
            Our Service Area
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185470.73874961536!2d-81.8836!3d43.3134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ecd3a0a5fd403%3A0x5037b28c7231b60!2sGrand%20Bend%2C%20Lambton%20Shores%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Complete Junk Removal service area - Grand Bend, Ontario"
            />
          </div>
        </div>
      </section>
    </>
  );
}
