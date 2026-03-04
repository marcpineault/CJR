import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Complete Junk Removal. Read our terms and conditions for junk removal and demolition services.",
  alternates: {
    canonical: "https://completejunkremoval.ca/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-heading">
              Terms of Service
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
                Services
              </h2>
              <p>
                Complete Junk Removal provides junk removal, demolition, debris
                cleanup, and related services in Grand Bend, London, and
                Southwestern Ontario. All services are subject to availability
                and scheduling.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Estimates and Pricing
              </h2>
              <p>
                We provide free, no-obligation estimates for all jobs. Estimates
                are based on the information you provide and a visual assessment
                of the items to be removed or work to be done. Final pricing may
                differ from the estimate if the actual scope of work differs from
                what was originally described.
              </p>
              <p className="mt-4">
                Payment is due upon completion of the service unless otherwise
                agreed in writing. We accept cash, e-transfer, and major credit
                cards.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Cancellations
              </h2>
              <p>
                You may cancel or reschedule a booking at any time before the
                scheduled service. We appreciate as much notice as possible so we
                can accommodate other customers. There is no cancellation fee.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Prohibited Items
              </h2>
              <p>
                For safety and regulatory reasons, we cannot remove the following
                items:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Hazardous materials (chemicals, solvents, pesticides)</li>
                <li>Asbestos or asbestos-containing materials</li>
                <li>Biological or medical waste</li>
                <li>Explosives, ammunition, or firearms</li>
                <li>Radioactive materials</li>
                <li>Paint and paint thinners (in bulk quantities)</li>
              </ul>
              <p className="mt-4">
                If you are unsure whether an item can be removed, please contact
                us before your appointment.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Liability and Insurance
              </h2>
              <p>
                Complete Junk Removal carries comprehensive commercial general
                liability insurance. We take every precaution to protect your
                property during service. In the unlikely event of damage caused
                by our team, we will work with you to resolve the issue promptly
                and fairly.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Customer Responsibilities
              </h2>
              <p>
                You are responsible for ensuring that the items you want removed
                belong to you or that you have authorization to dispose of them.
                You are also responsible for providing safe and reasonable access
                to the items or work area.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Disposal
              </h2>
              <p>
                We sort all items and make every effort to donate, recycle, or
                repurpose materials whenever possible. Items that cannot be
                donated or recycled are disposed of at licensed facilities in
                accordance with Ontario regulations.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Website Use
              </h2>
              <p>
                The content on this website is provided for general informational
                purposes only. While we strive to keep information accurate and
                up to date, we make no guarantees about the completeness or
                accuracy of the content.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Changes to These Terms
              </h2>
              <p>
                We reserve the right to update these terms at any time. Changes
                will be posted on this page with an updated date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-extrabold text-brand-black tracking-heading mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about these terms, please contact us:
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
