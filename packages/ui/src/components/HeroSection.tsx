import type { SiteConfig } from "../types/site";

interface HeroSectionProps {
  site: SiteConfig;
}

export function HeroSection({ site }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background — actual 18|8 salon interior */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/hero-bg.jpg')",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 bg-black/55"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://www.188palmbeachgardens.com/wp-content/uploads/2021/08/cropped-188-Stacked-Black-White-Text-Transparent.png"
            alt="18|8 Fine Men's Salon"
            className="h-24 object-contain"
          />
        </div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          A Classic Barbershop<br />
          <span className="text-[#c9a96e]">For The Modern Gentleman</span>
        </h1>

        <p className="text-white/80 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          In {site.locationName}, we&rsquo;ve re-imagined and recreated the experience of
          the old barbershop for the modern man &mdash; masterful haircuts, precision
          straight-razor shaves, and premium grooming services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={site.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a96e] hover:bg-[#b8924f] text-black font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Book Your Appointment
          </a>
          <a
            href="/services"
            className="border border-white/50 hover:border-[#c9a96e] text-white hover:text-[#c9a96e] font-medium uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Our Services
          </a>
        </div>

        {/* Address + phone pill */}
        <div className="mt-12 inline-flex items-center gap-3 border border-white/20 bg-black/30 backdrop-blur-sm px-5 py-3 text-white/70 text-xs">
          <svg className="w-4 h-4 text-[#c9a96e] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>
            {site.address.street}{site.address.suite ? `, ${site.address.suite}` : ""}{" "}
            &nbsp;&middot;&nbsp;{" "}
            <a href={`tel:${site.phone}`} className="hover:text-[#c9a96e] transition-colors">
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
