import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Complete Junk Removal. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://completejunkremoval.ca/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-heading">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Information We Collect
              </h2>
              <p>
                When you contact Complete Junk Removal through our website, phone,
                text, or email, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Your name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Service address or general location</li>
                <li>Details about the junk removal or demolition service you need</li>
                <li>Photos you send us for quoting purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Schedule and perform junk removal or demolition services</li>
                <li>Communicate with you about your service</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information only when necessary to
                complete the services you requested, comply with legal obligations,
                or protect our rights.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Cookies and Analytics
              </h2>
              <p>
                Our website may use cookies and analytics tools to understand how
                visitors use our site. This helps us improve the user experience.
                You can disable cookies in your browser settings at any time.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Data Security
              </h2>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, use, or disclosure. However, no method
                of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Your Rights
              </h2>
              <p>
                You have the right to request access to, correction of, or deletion
                of your personal information. To make a request, contact us at{" "}
                <a
                  href="mailto:info@completejunkremoval.ca"
                  className="text-brand-green font-semibold hover:text-brand-green-light transition-colors"
                >
                  info@completejunkremoval.ca
                </a>{" "}
                or call{" "}
                <a
                  href="tel:5198709136"
                  className="text-brand-green font-semibold hover:text-brand-green-light transition-colors"
                >
                  519-870-9136
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, please contact
                us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:5198709136"
                    className="text-brand-green font-semibold"
                  >
                    519-870-9136
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@completejunkremoval.ca"
                    className="text-brand-green font-semibold"
                  >
                    info@completejunkremoval.ca
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
