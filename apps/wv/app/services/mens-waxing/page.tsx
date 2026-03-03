import site from "../../../config/site";

export const metadata = {
  title: `Men's Waxing | ${site.seo.title}`,
  description:
    "Professional men's waxing services in Dallas — ear, nose, brow, and more. Clean and precise at 18|8 Uptown – West Village.",
};

const waxingServices = [
  {
    name: "Ear Waxing",
    description:
      "Quick, clean removal of unwanted ear hair — a small detail that makes a big difference in your overall appearance.",
  },
  {
    name: "Nose Waxing",
    description:
      "Safe and effective nose hair removal using professional-grade wax. Far more precise and longer-lasting than trimming.",
  },
  {
    name: "Brow Waxing & Shaping",
    description:
      "Clean up your brow line and define your arch for a polished, well-groomed look. We keep it masculine — never overdone.",
  },
  {
    name: "Brow Waxing & Trimming",
    description:
      "Full brow grooming including wax cleanup and scissors trim to manage length and create a natural, structured shape.",
  },
  {
    name: "Neck Waxing",
    description:
      "Keep your neckline clean and defined between haircuts. Removes stray hair and keeps the back of your neck looking sharp.",
  },
  {
    name: "Cheek Waxing",
    description:
      "Clean up unwanted cheek hair to define your beard line or simply keep a groomed, tidy look at the jawline.",
  },
];

export default function MensWaxingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Men's Waxing</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          The details matter. Our professional waxing services keep you looking clean, precise, and
          polished — targeting the areas that make the biggest difference in your overall groomed
          appearance.
        </p>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Waxing Menu</p>
            <h2 className="text-white text-3xl font-bold">Waxing Services</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
            <p className="text-white/50 text-sm mt-4 max-w-lg mx-auto">
              All waxing services use professional-grade, low-temperature wax formulas designed for
              sensitive skin. Quick, effective, and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {waxingServices.map((service) => (
              <div key={service.name} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors flex flex-col gap-3">
                <h3 className="text-white text-lg font-semibold">{service.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Add-on note */}
          <div className="mt-10 border border-[#c9a96e]/20 p-6 bg-[#111]">
            <p className="text-[#c9a96e] text-xs uppercase tracking-widest font-semibold mb-2">
              Add to Any Service
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Waxing services can be added to any haircut or shave appointment. Ask your stylist or
              barber to include them during booking, and we'll take care of the details seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#c9a96e] py-16 px-4 text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-3">
          Stay Sharp in Every Detail
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book a waxing service alongside your next appointment, or on its own.
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
