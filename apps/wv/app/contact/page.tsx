import { ContactSection } from "@repo/ui/components/ContactSection";
import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `Contact & Location | ${site.seo.title}`,
  description:
    "Visit 18|8 Fine Men's Salon Uptown – West Village at 3699 McKinney Ave, Suite 402, Dallas TX 75204. Call us at (214) 305-2079 or book online.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">
          18|8 Uptown – West Village
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Visit Us</h1>
        <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          We're located in West Village in Uptown Dallas. Stop by, call, or send us a message —
          we'd love to hear from you.
        </p>
      </section>

      {/* Quick info bar */}
      <section className="bg-[#111] py-8 px-4 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-[#aa0000] text-xs uppercase tracking-widest mb-1">Address</p>
            <p className="text-white/70 text-sm">
              3699 McKinney Ave, Suite 402
              <br />
              Dallas, TX 75204
            </p>
          </div>
          <div>
            <p className="text-[#aa0000] text-xs uppercase tracking-widest mb-1">Phone</p>
            <a
              href={`tel:${site.phone}`}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              {site.phoneFormatted}
            </a>
          </div>
          <div>
            <p className="text-[#aa0000] text-xs uppercase tracking-widest mb-1">Hours</p>
            <div className="text-white/70 text-sm space-y-0.5">
              {site.hours.map((h) => (
                <p key={h.label}>
                  <span className="text-white/40">{h.label}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact section with map and form */}
      <ContactSection
        site={site}
        mapEmbedUrl="https://maps.google.com/maps?q=3699+McKinney+Ave+Dallas+TX+75204&output=embed"
      />

      {/* Booking CTA */}
      <BookingCTA
        site={site}
        heading="Ready to Book?"
        subtext="Schedule your appointment online or call us — we'll get you taken care of."
      />
    </>
  );
}
