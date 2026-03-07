import type { SiteConfig } from "../types/site";

interface VisitUsSectionProps {
  site: SiteConfig;
}

export function VisitUsSection({ site }: VisitUsSectionProps) {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background interior photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/visit-bg.jpg')",
          opacity: 0.2,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Find Us</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Visit Us Today</h2>
          <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Address */}
          <div className="space-y-3">
            <div className="w-10 h-10 border border-[#aa0000] flex items-center justify-center mx-auto">
              <svg className="w-5 h-5 text-[#aa0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white text-xs uppercase tracking-widest font-semibold">Location</h3>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 text-sm leading-relaxed hover:text-[#aa0000] transition-colors block"
            >
              {site.address.street}<br />
              {site.address.suite && <>{site.address.suite}<br /></>}
              {site.address.city}, {site.address.state} {site.address.zip}
            </a>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <div className="w-10 h-10 border border-[#aa0000] flex items-center justify-center mx-auto">
              <svg className="w-5 h-5 text-[#aa0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white text-xs uppercase tracking-widest font-semibold">Hours</h3>
            <ul className="space-y-1.5">
              {site.hours.map((h) => (
                <li key={h.label} className="text-sm flex justify-center gap-3">
                  <span className="text-white/50 w-20 text-right">{h.label}</span>
                  <span className={h.time === "Closed" ? "text-red-400" : "text-white/80"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone + Book */}
          <div className="space-y-3">
            <div className="w-10 h-10 border border-[#aa0000] flex items-center justify-center mx-auto">
              <svg className="w-5 h-5 text-[#aa0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-white text-xs uppercase tracking-widest font-semibold">Call Us</h3>
            <a
              href={`tel:${site.phone}`}
              className="text-white/70 text-sm hover:text-[#aa0000] transition-colors block"
            >
              {site.phoneFormatted}
            </a>
            <div className="pt-2">
              <a
                href={site.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#aa0000] hover:bg-[#880000] text-black font-bold uppercase tracking-widest px-8 py-3 text-xs transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
