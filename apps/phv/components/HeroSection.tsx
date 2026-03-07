import type { SiteConfig } from "@repo/ui/types/site";

interface HeroSectionProps {
  site: SiteConfig;
}

export function HeroSection({ site }: HeroSectionProps) {
  return (
    <div className="relative">
      {/* Fixed background image — stays in place while content scrolls */}
      <div
        className="fixed inset-0 bg-cover bg-left bg-no-repeat bg-white z-0"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* Scrollable content layer */}
      <section className="relative z-10 min-h-screen flex flex-col justify-start">
        {/* Content — right side, top area */}
        <div className="w-full flex justify-end px-8 sm:px-16 pt-28 sm:pt-36">
          <div className="max-w-lg text-right">

            <h1 className="text-[#aa0000] font-bold uppercase leading-none mb-4"
              style={{ fontSize: "min(8vw, 10rem)", letterSpacing: "0.12em", fontFamily: "'Bebas Neue', sans-serif" }}>
              18|8 Fine Men's Salons
            </h1>

            <p className="text-[#212934] text-xl sm:text-2xl italic" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.25em" }}>
              {site.locationName}
            </p>

            <div className="w-16 h-px bg-[#aa0000]/40 my-8 ml-auto" />

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
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
                className="border border-[#212934]/50 hover:border-[#212934] text-[#212934] font-medium uppercase tracking-widest px-10 py-4 text-sm transition-colors bg-white/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
              >
                Our Services
              </a>
            </div>

            {/* Address + phone pill */}
            <div className="mt-10 inline-flex items-center gap-3 border border-[#212934]/20 bg-white/80 backdrop-blur-sm px-5 py-3 text-[#212934]/60 text-xs">
              <svg className="w-4 h-4 text-[#aa0000]/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#aa0000] transition-colors">
                  {site.address.street}{site.address.suite ? `, ${site.address.suite}` : ""}, {site.address.city}, {site.address.state} {site.address.zip}
                </a>
                {" "}&nbsp;&middot;&nbsp;{" "}
                <a href={`tel:${site.phone}`} className="hover:text-[#aa0000] transition-colors">
                  {site.phoneFormatted}
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-[#212934]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>
    </div>
  );
}
