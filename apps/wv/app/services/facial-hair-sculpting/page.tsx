import site from "../../../config/site";

export const metadata = {
  title: `Facial Hair Sculpting | ${site.seo.title}`,
  description:
    "Expert beard shaping, mustache styling, and precision edge-ups in Dallas. Look sharp and defined at 18|8 Uptown – West Village.",
};

const sculptingServices = [
  {
    name: "Beard Shaping & Design",
    description:
      "A precision beard sculpt that defines your natural shape and enhances your facial structure. We work with your growth pattern to create clean lines and a sharp, intentional look.",
    details: ["Shape & define", "Edge-up & clean lines", "Hot towel finish", "~20 minutes"],
  },
  {
    name: "Mustache Styling",
    description:
      "Expert trimming and shaping of your mustache. Whether you prefer a classic look or something more distinctive, we'll keep it neat, proportional, and perfectly groomed.",
    details: ["Trim & shape", "Edge-up", "Styling product applied", "~15 minutes"],
  },
  {
    name: "Full Beard Trim",
    description:
      "Comprehensive beard grooming from cheek line to neckline. Includes a hot towel treatment to soften the hair, followed by precise trimming to your preferred length and shape.",
    details: ["Hot towel prep", "Full trim & shape", "Neckline & cheek lines", "~25 minutes"],
  },
  {
    name: "Beard & Haircut Combo",
    description:
      "The complete package — a precision haircut paired with a full beard sculpt. Look cohesive from the top of your head to the bottom of your beard. Our most popular combination service.",
    details: ["Full haircut", "Beard shaping & trim", "Hot towel finish", "~60 minutes"],
  },
];

export default function FacialHairSculptingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Facial Hair Sculpting</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Your beard and mustache deserve the same precision and care as your haircut. Our stylists
          expertly shape, define, and sculpt your facial hair to complement your features — keeping
          you looking sharp, intentional, and polished.
        </p>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Sculpting Menu</p>
            <h2 className="text-white text-3xl font-bold">Beard & Mustache Services</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {sculptingServices.map((service) => (
              <div key={service.name} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white text-xl font-semibold">{service.name}</h3>
                </div>
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

          <div className="mt-10 border border-[#c9a96e]/20 p-6 bg-[#111] text-center">
            <p className="text-white/60 text-sm leading-relaxed">
              All facial hair sculpting services include a professional consultation to discuss your
              goals and the best approach for your face shape and hair type.
            </p>
          </div>
        </div>
      </section>

      {/* Feature photo */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/service-sculpting.jpg"
            alt="Facial Hair Sculpting at 18|8 Uptown – West Village"
            className="w-full object-cover max-h-96"
          />
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#c9a96e] py-16 px-4 text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-3">
          Look Sharp. Stay Defined.
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book your facial hair sculpting appointment online or add it to your next haircut.
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
            className="border-2 border-black hover:bg-black hover:text-[#c9a96e] text-black font-bold uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            Call {site.phoneFormatted}
          </a>
        </div>
      </section>
    </>
  );
}
