import site from "../../../config/site";

export const metadata = {
  title: `Nail Treatments | ${site.seo.title}`,
  description:
    "Men's manicures and pedicures in Dallas. Clean, groomed, and professional nail care at 18|8 Uptown – West Village. No polish required.",
};

const nailServices = [
  {
    name: "Man-icure",
    description:
      "A professional hand grooming service designed for men. Nails are trimmed, filed, and buffed to a clean finish. Cuticles are treated and pushed back, and the hands are exfoliated and moisturized.",
    details: ["Trim, file & buff", "Cuticle treatment", "Exfoliation & moisturize", "No polish required"],
    duration: "~30 minutes",
  },
  {
    name: "Deluxe Man-icure",
    description:
      "The elevated hand treatment. Everything in the classic Man-icure, plus a warm paraffin wax dip that deeply conditions the skin, relieves tension, and leaves hands noticeably softer.",
    details: ["Everything in Man-icure", "Warm paraffin wax dip", "Extended massage"],
    duration: "~45 minutes",
  },
  {
    name: "Pedicure",
    description:
      "A thorough foot grooming service. Nails trimmed and filed, calluses softened and smoothed, cuticles treated, and feet exfoliated and moisturized. Ends with a relaxing foot and lower leg massage.",
    details: ["Trim, file & buff", "Callus treatment", "Exfoliation & moisturize", "Foot massage"],
    duration: "~45 minutes",
  },
  {
    name: "Deluxe Pedicure",
    description:
      "The complete foot and leg treatment. Adds a warm paraffin wax treatment and extended massage for maximum relaxation and skin conditioning. The perfect recovery for active gentlemen.",
    details: ["Everything in Pedicure", "Warm paraffin wax", "Extended leg massage"],
    duration: "~60 minutes",
  },
];

export default function NailTreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Nail Treatments</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Clean, groomed, and professional — no polish required. Our nail services are designed with
          the modern gentleman in mind. Because well-groomed hands and feet are a sign of a man who
          pays attention to the details.
        </p>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Nail Menu</p>
            <h2 className="text-white text-3xl font-bold">Hand & Foot Services</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {nailServices.map((service) => (
              <div key={service.name} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white text-xl font-semibold">{service.name}</h3>
                  <span className="text-white/30 text-xs shrink-0 mt-1">{service.duration}</span>
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

          {/* Note */}
          <div className="mt-10 border border-[#c9a96e]/20 p-6 bg-[#111] text-center">
            <p className="text-white/60 text-sm leading-relaxed">
              All nail services are performed without polish unless requested. Our goal is clean,
              healthy, naturally groomed nails that complement your overall look.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#c9a96e] py-16 px-4 text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-3">
          Groomed from Head to Toe
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book a nail treatment on its own or add it to your next haircut appointment.
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
