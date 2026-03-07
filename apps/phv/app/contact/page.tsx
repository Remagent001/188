import { ContactSection } from "../../components/ContactSection";
import { BookingCTA } from "../../components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `Contact & Location | ${site.seo.title}`,
  description:
    "Visit 18|8 Fine Men's Salon Preston Hollow Village at 7949 Walnut Hill Lane, Suite 125, Dallas TX 75230. Call us at (214) 305-2579 or book online.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5f5f5] pt-24 pb-16 px-4 text-center">
        <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">
          18|8 Preston Hollow Village
        </p>
        <h1 className="text-[#212934] text-4xl sm:text-5xl font-bold mb-4">Visit Us</h1>
        <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          We're located at Preston Hollow Village in North Dallas. Stop by, call, or send us a
          message — we'd love to hear from you.
        </p>
      </section>

      {/* Quick info bar */}
      <section className="bg-[#f5f5f5] py-8 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-[#aa0000] text-xs uppercase tracking-widest mb-1">Address</p>
            <p className="text-gray-600 text-sm">
              7949 Walnut Hill Lane, Suite 125
              <br />
              Dallas, TX 75230
            </p>
          </div>
          <div>
            <p className="text-[#aa0000] text-xs uppercase tracking-widest mb-1">Phone</p>
            <a
              href={`tel:${site.phone}`}
              className="text-gray-600 hover:text-[#212934] text-sm transition-colors"
            >
              {site.phoneFormatted}
            </a>
          </div>
          <div>
            <p className="text-[#aa0000] text-xs uppercase tracking-widest mb-1">Hours</p>
            <div className="text-gray-600 text-sm space-y-0.5">
              {site.hours.map((h) => (
                <p key={h.label}>
                  <span className="text-gray-400">{h.label}:</span>{" "}
                  <span className={h.time === "Closed" ? "text-red-500" : ""}>{h.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact section with map and form */}
      <ContactSection
        site={site}
        mapEmbedUrl="https://maps.google.com/maps?q=18%2F8+Fine+Men's+Salons+Preston+Hollow+Village+Dallas+TX&output=embed"
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
