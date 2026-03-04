import type { SiteConfig } from "../types/site";

interface BookingCTAProps {
  site: SiteConfig;
  heading?: string;
  subtext?: string;
}

export function BookingCTA({
  site,
  heading = "Ready to Look Your Best?",
  subtext = "Book your appointment online — it only takes a minute.",
}: BookingCTAProps) {
  return (
    <section className="bg-[#aa0000] py-16 px-4 text-center">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
      <p className="text-white/80 mb-8 text-sm max-w-md mx-auto">{subtext}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={site.booking.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#212934] hover:bg-black text-white font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
        >
          Book Now
        </a>
        <a
          href={`tel:${site.phone}`}
          className="border-2 border-white hover:bg-white hover:text-[#aa0000] text-white font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
        >
          Call {site.phoneFormatted}
        </a>
      </div>
    </section>
  );
}
