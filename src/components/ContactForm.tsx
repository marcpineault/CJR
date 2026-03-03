"use client";

import { useState } from "react";
import { Send, Upload } from "lucide-react";

export default function ContactForm() {
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
          Message Sent!
        </h3>
        <p className="text-gray-600">
          Thank you for reaching out. We will get back to you within a few hours.
          For immediate assistance, call us at{" "}
          <a href="tel:5198709136" className="text-brand-green font-semibold">
            519-870-9136
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-brand-black mb-1.5"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-brand-black mb-1.5"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm"
            placeholder="(519) 000-0000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-brand-black mb-1.5"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-brand-black mb-1.5"
        >
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm bg-white"
        >
          <option value="">Select a service</option>
          <option value="Residential Junk Removal">
            Residential Junk Removal
          </option>
          <option value="Commercial Junk Removal">
            Commercial Junk Removal
          </option>
          <option value="Garden & Yard Waste">Garden & Yard Waste</option>
          <option value="Residential Demolition">
            Residential Demolition
          </option>
          <option value="Commercial Demolition">Commercial Demolition</option>
          <option value="Debris Removal">Debris Removal</option>
          <option value="Estate Cleanout">Estate Cleanout</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-brand-black mb-1.5"
        >
          Tell Us About Your Project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors text-sm resize-none"
          placeholder="Describe what you need removed, your location, and any details that would help us give you an accurate quote..."
        />
      </div>

      <div>
        <label
          htmlFor="photo"
          className="block text-sm font-semibold text-brand-black mb-1.5"
        >
          Upload Photos (optional)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-green/50 transition-colors cursor-pointer">
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            multiple
            className="hidden"
          />
          <label htmlFor="photo" className="cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              Click to upload or drag photos here
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Sending photos helps us provide more accurate quotes
            </p>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full btn-primary text-base py-4"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
}
