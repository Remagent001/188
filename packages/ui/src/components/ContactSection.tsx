"use client";

import { useState } from "react";
import type { SiteConfig } from "../types/site";
import { MapLink } from "./MapLink";

interface ContactSectionProps {
  site: SiteConfig;
  mapEmbedUrl?: string;
}

export function ContactSection({ site, mapEmbedUrl }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire up to form submission service (Formspree, Resend, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);
  }

  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Get In Touch</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Contact Us</h2>
          <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#aa0000] text-xs uppercase tracking-widest font-semibold mb-3">Address</h3>
              <MapLink
                mapsUrl={site.address.mapsUrl}
                appleMapsUrl={site.address.appleMapsUrl}
                className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed"
              >
                {site.address.street}<br />
                {site.address.suite && <>{site.address.suite}<br /></>}
                {site.address.city}, {site.address.state} {site.address.zip}
              </MapLink>
            </div>
            <div>
              <h3 className="text-[#aa0000] text-xs uppercase tracking-widest font-semibold mb-3">Phone</h3>
              <a href={`tel:${site.phone}`} className="text-white/70 hover:text-white transition-colors text-sm">
                {site.phoneFormatted}
              </a>
            </div>
            <div>
              <h3 className="text-[#aa0000] text-xs uppercase tracking-widest font-semibold mb-3">Hours</h3>
              <ul className="space-y-2">
                {site.hours.map((h) => (
                  <li key={h.label} className="flex justify-between max-w-xs text-sm">
                    <span className="text-white/50">{h.label}</span>
                    <span className={h.time === "Closed" ? "text-red-400" : "text-white/80"}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map embed */}
            <div className="aspect-video bg-[#141414] overflow-hidden">
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon location map"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">
                  Map coming soon
                </div>
              )}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-white font-semibold mb-6">Send Us a Message</h3>
            {submitted ? (
              <div className="bg-[#aa0000]/10 border border-[#aa0000]/30 p-6 text-[#aa0000] text-sm">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#aa0000] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#aa0000] hover:bg-[#880000] text-black font-bold uppercase tracking-widest py-4 text-sm transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
