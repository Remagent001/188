import site from "../../../config/site";

export const metadata = {
  title: `Groom & Bachelor Packages | ${site.seo.title}`,
  description:
    "Special event grooming packages for grooms and groomsmen in Dallas. Look your absolute best on the big day at 18|8 Uptown – West Village.",
};

const packages = [
  {
    name: "The Groom Package",
    tag: "For the Main Event",
    description:
      "The complete grooming experience curated for the groom. Everything you need to look and feel impeccable on your wedding day — from your cut to the final detail.",
    includes: [
      "Executive haircut with scalp massage",
      "Straight-razor shave or beard sculpt",
      "Men's facial treatment",
      "Nail treatment (Man-icure)",
      "Styling and finishing",
    ],
  },
  {
    name: "The Groomsmen Package",
    tag: "For the Whole Party",
    description:
      "Keep the whole crew looking sharp. A streamlined yet elevated grooming service for each member of the wedding party — coordinated, efficient, and exceptional.",
    includes: [
      "Classic or Executive haircut",
      "Beard trim and line-up",
      "Styling and finishing",
      "Coordinated group booking",
    ],
  },
  {
    name: "The Bachelor Party Grooming",
    tag: "Pre-Event Prep",
    description:
      "Start the bachelor celebration right — with everyone looking their best before the night begins. We accommodate group bookings with full-service options for every member.",
    includes: [
      "Haircuts for the group",
      "Beard trims and grooming",
      "Complimentary beverages",
      "Private salon experience",
    ],
  },
  {
    name: "Day-Of Touch-Up",
    tag: "Wedding Day",
    description:
      "A focused, fast session for the groom on the morning of the wedding. Get polished and camera-ready before it's time to walk down the aisle.",
    includes: [
      "Fresh neckline and shape-up",
      "Beard detail and touch-up",
      "Final styling",
      "~45 minutes",
    ],
  },
];

export default function GroomBachelorPackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Groom & Bachelor Packages
        </h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Your wedding day is one of the most photographed moments of your life. Look your absolute
          best with our exclusive groom and groomsmen packages — tailored, coordinated, and
          unforgettable.
        </p>
      </section>

      {/* Packages */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Special Packages</p>
            <h2 className="text-white text-3xl font-bold">Event Grooming Packages</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
            <p className="text-white/50 text-sm mt-4 max-w-lg mx-auto">
              We accommodate groups of all sizes. Contact us directly to coordinate your wedding
              party booking and we'll arrange the scheduling to fit your timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors flex flex-col gap-4">
                <div>
                  <p className="text-[#c9a96e] text-xs uppercase tracking-[0.3em] mb-2">{pkg.tag}</p>
                  <h3 className="text-white text-xl font-semibold">{pkg.name}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{pkg.description}</p>
                <div className="mt-2">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Includes:</p>
                  <ul className="space-y-1.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="text-[#c9a96e] text-xs">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Group booking note */}
          <div className="mt-10 border border-[#c9a96e]/20 p-8 bg-[#111] text-center">
            <p className="text-[#c9a96e] text-xs uppercase tracking-widest font-semibold mb-3">
              Group Bookings
            </p>
            <p className="text-white text-lg font-semibold mb-3">
              Booking for the Whole Party?
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-6">
              We love accommodating wedding parties. Call us directly to discuss your timeline,
              group size, and the services you'd like for each member. We'll make it seamless.
            </p>
            <a
              href={`tel:${site.phone}`}
              className="inline-block bg-[#c9a96e] hover:bg-[#b8924f] text-black font-bold uppercase tracking-widest px-8 py-3 text-sm transition-colors"
            >
              Call {site.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#c9a96e] py-16 px-4 text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-3">
          Look Your Best on the Big Day
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book your groom or groomsmen package now — we recommend securing your date well in advance.
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
