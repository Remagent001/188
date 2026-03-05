import type { SiteConfig } from "@repo/ui/types/site";

interface HeroSectionProps {
  site: SiteConfig;
}

export function HeroSection({ site }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-[#212934] overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')", opacity: 0.4 }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 w-full px-8 sm:px-16 pb-20 sm:pb-28 self-end">

        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-bold uppercase leading-none mb-4"
          style={{ letterSpacing: "0.12em", fontFamily: "'Bebas Neue', sans-serif" }}>
          18|8 Fine Men's Salon
        </h1>

        <p className="text-white text-xl sm:text-2xl italic" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.25em" }}>
          {site.locationName}
        </p>

        <div className="w-16 h-px bg-white/40 my-8" />

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={site.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#aa0000] hover:bg-[#880000] text-white font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Book Your Appointment
          </a>
          <a
            href="/services"
            className="border border-white/50 hover:border-white text-white font-medium uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Our Services
          </a>
        </div>

        {/* Address + phone pill */}
        <div className="mt-20 inline-flex items-center gap-3 border border-white/20 bg-black/30 backdrop-blur-sm px-5 py-3 text-white/70 text-xs">
          <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>
            <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {site.address.street}{site.address.suite ? `, ${site.address.suite}` : ""}, {site.address.city}, {site.address.state} {site.address.zip}
            </a>
            {" "}&nbsp;&middot;&nbsp;{" "}
            <a href={`tel:${site.phone}`} className="hover:text-white transition-colors">
              {site.phoneFormatted}
            </a>
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
