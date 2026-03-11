"use client";

import { useState } from "react";
import { Send, Phone } from "lucide-react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xjkvqzpb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      alert("Something went wrong. Please call us at 519-870-9136 instead.");
    }
  }

  if (submitted) {
    return (
      <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-green/10 flex items-center justify-center">
          <Send className="w-8 h-8 text-brand-green" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-brand-black mb-2">
          Request Received!
        </h3>
        <p className="text-gray-600">
          We&apos;ll get back to you within a few hours with your free estimate.
          Need it faster?
        </p>
        <a
          href="tel:5198709136"
          className="inline-flex items-center gap-2 mt-4 btn-primary text-base py-3 px-6"
        >
          <Phone className="w-5 h-5" />
          Call 519-870-9136
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_source" value="meta-ad-landing" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-name"
            className="block text-sm font-semibold text-brand-black mb-1.5"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="quote-name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm"
            placeholder="Full name"
          />
        </div>
        <div>
          <label
            htmlFor="quote-phone"
            className="block text-sm font-semibold text-brand-black mb-1.5"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="quote-phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm"
            placeholder="(519) 000-0000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="quote-items"
          className="block text-sm font-semibold text-brand-black mb-1.5"
        >
          What do you need removed? *
        </label>
        <textarea
          id="quote-items"
          name="message"
          required
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm resize-none"
          placeholder="e.g. Old couch, broken appliances, garage full of junk..."
        />
      </div>

      <div>
        <label
          htmlFor="quote-location"
          className="block text-sm font-semibold text-brand-black mb-1.5"
        >
          Your City / Area
        </label>
        <select
          id="quote-location"
          name="location"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm bg-white"
        >
          <option value="">Select your area</option>
          <option value="Grand Bend">Grand Bend</option>
          <option value="London">London</option>
          <option value="Lambton Shores">Lambton Shores</option>
          <option value="Exeter">Exeter</option>
          <option value="Bayfield">Bayfield</option>
          <option value="Zurich">Zurich</option>
          <option value="Strathroy">Strathroy</option>
          <option value="St. Thomas">St. Thomas</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" className="w-full btn-primary text-base py-4">
        <Send className="w-5 h-5" />
        Get My Free Estimate
      </button>

      <p className="text-center text-xs text-gray-500">
        No obligation. We respond within a few hours.
      </p>
    </form>
  );
}
