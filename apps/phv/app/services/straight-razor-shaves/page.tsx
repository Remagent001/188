import site from "../../../config/site";

export const metadata = {
  title: `Straight-Razor Shaves | ${site.seo.title}`,
  description:
    "The closest shave of your life. Classic straight-razor shaves with warm lather, hot towel finish at 18|8 Uptown – West Village, Dallas TX.",
};

const shaveSteps = [
  {
    step: "01",
    title: "Pre-Shave Hot Towel",
    description:
      "We begin by draping a steaming hot towel across your face to open the pores, soften the hair follicles, and prepare your skin for the closest possible shave.",
  },
  {
    step: "02",
    title: "Warm Lather Application",
    description:
      "Premium warm shaving lather is worked into the beard using a traditional brush, ensuring every hair is lifted, coated, and primed for the blade.",
  },
  {
    step: "03",
    title: "The Straight Razor Shave",
    description:
      "Our barbers wield a precision straight razor with the skill that comes from years of dedicated practice. The result is an impossibly close, smooth shave that cartridge blades simply cannot replicate.",
  },
  {
    step: "04",
    title: "Second Pass & Refinement",
    description:
      "A second pass against the grain ensures completeness and catches any remaining stubble, leaving the skin flawlessly smooth.",
  },
  {
    step: "05",
    title: "Cold Towel & Aftershave",
    description:
      "A cold towel closes the pores and calms the skin. We finish with a soothing aftershave balm to hydrate, protect, and leave you feeling refreshed.",
  },
];

export default function StraightRazorShavesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Straight-Razor Shaves</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          The closest shave you've ever had. This is a ritual — not just a service. Our barbers
          deliver the classic straight-razor experience with expert precision and old-world attention
          to detail.
        </p>
      </section>

      {/* Ritual steps */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">The Experience</p>
            <h2 className="text-white text-3xl font-bold">The Shave Ritual</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
          </div>

          <div className="space-y-px bg-white/5">
            {shaveSteps.map((item) => (
              <div key={item.step} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors flex gap-8">
                <span className="text-[#c9a96e]/30 text-4xl font-bold tabular-nums shrink-0 leading-none pt-1">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on note */}
      <section className="bg-[#111] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Pair It</p>
          <h2 className="text-white text-2xl font-bold mb-4">Combine with a Haircut</h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
            For the complete transformation, add a straight-razor shave to any haircut service.
            Arrive as you are — leave looking and feeling exceptional. Ask your barber about the
            full grooming experience when you book.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#c9a96e] py-16 px-4 text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-3">
          Experience the Perfect Shave
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book your straight-razor shave today — online or by phone.
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
