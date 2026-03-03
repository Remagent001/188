import site from "../../../config/site";

export const metadata = {
  title: `Hair Coloring & Blending | ${site.seo.title}`,
  description:
    "Professional men's hair coloring and gray blending in Dallas. Semi-permanent and permanent options at 18|8 Uptown – West Village.",
};

const coloringServices = [
  {
    name: "Gray Blending",
    description:
      "A seamless, natural-looking blend that softens gray without erasing it entirely. Perfect for the gentleman who wants a more youthful, polished appearance without looking overdone.",
    details: ["Semi-permanent formula", "Natural finish", "Fades gracefully"],
  },
  {
    name: "Full Gray Coverage",
    description:
      "Complete, consistent coverage that delivers rich, uniform color from root to tip. Permanent formulas ensure long-lasting results that stay true between visits.",
    details: ["Permanent formula", "Full root-to-tip coverage", "Matched to your natural tone"],
  },
  {
    name: "Semi-Permanent Color",
    description:
      "A lower-commitment option that enhances your natural color with added depth and dimension. Gradually fades for a soft, low-maintenance result.",
    details: ["No harsh chemicals", "Fades naturally", "Enhances existing tone"],
  },
  {
    name: "Root Touch-Up",
    description:
      "Between full color appointments, keep your look fresh and consistent with a targeted root application. In and out with zero compromise.",
    details: ["Targeted application", "Quick appointment", "Seamless blend"],
  },
];

export default function HairColoringPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Hair Coloring & Blending
        </h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Whether you want to subtly blend gray, go for full coverage, or experiment with a new
          shade, our colorists deliver results tailored precisely to your goals and complexion.
        </p>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Color Services</p>
            <h2 className="text-white text-3xl font-bold">Find Your Perfect Shade</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
            <p className="text-white/50 text-sm mt-4 max-w-lg mx-auto">
              All color services include a thorough consultation to match your desired result. We use
              professional-grade formulas for clean, predictable, and lasting color.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {coloringServices.map((service) => (
              <div key={service.name} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors flex flex-col gap-4">
                <h3 className="text-white text-xl font-semibold">{service.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{service.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {service.details.map((d) => (
                    <li
                      key={d}
                      className="text-[#c9a96e] text-xs uppercase tracking-wider border border-[#c9a96e]/30 px-3 py-1"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 border border-[#c9a96e]/20 p-6 bg-[#111]">
            <p className="text-[#c9a96e] text-xs uppercase tracking-widest font-semibold mb-2">
              Consultation Included
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Every color service begins with a one-on-one consultation. Your stylist will review
              your hair history, desired outcome, and the best formula to get you there. Pricing is
              determined at consultation based on service type and hair length.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#c9a96e] py-16 px-4 text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-3">
          Ready for a Fresh Look?
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book your color consultation online or call us to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={site.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-[#111] text-white font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Book Now
          </a>
          <a
            href={`tel:${site.phone}`}
            className="border-2 border-black hover:bg-black hover:text-white text-black font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Call {site.phoneFormatted}
          </a>
        </div>
      </section>
    </>
  );
}
