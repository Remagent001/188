import type { SiteConfig } from "../types/site";

interface HeroSectionProps {
  site: SiteConfig;
}

export function HeroSection({ site }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image — replace with real salon photo when ready */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80')" }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" aria-hidden="true" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-6 font-medium">
          {site.address.city}, {site.address.state}
        </p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          A Classic Barbershop<br />
          <span className="text-[#c9a96e]">For The Modern Gentleman</span>
        </h1>
        <p className="text-white/70 text-lg mb-4">{site.locationName}</p>
        <p className="text-white/60 text-sm mb-10 max-w-md mx-auto">
          Expert haircuts, straight-razor shaves, hair coloring, and premium grooming services in {site.address.city}, TX.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={site.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c9a96e] hover:bg-[#b8924f] text-black font-bold uppercase tracking-widest px-8 py-4 text-sm transition-colors"
          >
            Book Your Appointment
          </a>
          <a
            href="/services"
            className="border border-white/30 hover:border-[#c9a96e] text-white hover:text-[#c9a96e] font-medium uppercase tracking-widest px-8 py-4 text-sm transition-colors"
          >
            Our Services
          </a>
        </div>

        {/* Location info pill */}
        <div className="mt-12 inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-white/60 text-xs">
          <svg className="w-4 h-4 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>
            {site.address.street}{site.address.suite ? `, ${site.address.suite}` : ""} &nbsp;·&nbsp; {site.phoneFormatted}
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
