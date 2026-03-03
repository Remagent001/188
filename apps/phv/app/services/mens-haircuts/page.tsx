import site from "../../../config/site";

export const metadata = {
  title: `Men's Haircuts & Styling | ${site.seo.title}`,
  description:
    "Precision men's haircuts in Dallas – Classic Cut, Executive Cut, fades, skin fades, beard trims, and specialty packages. Book at 18|8 Uptown – West Village.",
};

const services = [
  {
    name: "The Classic Cut",
    description:
      "Our signature precision haircut paired with a relaxing shampoo and a hot towel treatment. A complete, timeless experience every visit.",
    details: ["Precision scissor or clipper cut", "Shampoo & conditioning rinse", "Hot towel finish"],
  },
  {
    name: "The Executive Cut",
    description:
      "Step it up with our elevated signature cut, complete with a revitalizing scalp massage that melts the stress of the day away.",
    details: ["Signature precision cut", "Scalp massage", "Styled to perfection"],
  },
  {
    name: "Fade",
    description:
      "Clean, sharp, and perfectly blended. We offer high, low, mid, and taper fade variations — whatever keeps your look on point.",
    details: ["High fade", "Low fade", "Mid fade", "Taper fade"],
  },
  {
    name: "Skin Fade",
    description:
      "The ultimate clean fade taken all the way to the skin for a razor-sharp, ultra-fresh finish that turns heads.",
    details: ["Skin-close clipper work", "Precise blending", "Clean neckline"],
  },
  {
    name: "Master & Young Master",
    description:
      "A bonding experience for fathers and sons (or any adult and child pairing). Both get expert haircuts in a welcoming environment.",
    details: ["Adult precision cut", "Child haircut (under 12)", "Side-by-side experience"],
  },
  {
    name: "Distinguished Master",
    description:
      "Our special pricing for gentlemen 65 and over. Available Sunday through Tuesday before 4:00 PM — our way of honoring those who've earned it.",
    details: ["Available Sun – Tue before 4:00 PM", "65+ clients", "Full precision haircut service"],
  },
  {
    name: "Student Discount",
    description:
      "For students 13 and under. Available Sunday through Tuesday until 4:00 PM. Because great grooming starts early.",
    details: ["Available Sun – Tue until 4:00 PM", "Ages 13 and under", "Full precision haircut"],
  },
  {
    name: "Beard Trim",
    description:
      "Keep your facial hair neat, shaped, and intentional. Our barbers sculpt your beard to complement your cut and your face.",
    details: ["Shape and line-up", "Scissors and clipper detail work", "Finishing product applied"],
  },
];

export default function MensHaircutsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Men's Haircuts & Styling
        </h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Every cut is a craft. Our stylists and barbers bring precision, consistency, and expertise
          to every service — leaving you looking and feeling exceptional.
        </p>
      </section>

      {/* Services list */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">What We Offer</p>
            <h2 className="text-white text-3xl font-bold">Haircut Services</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
          </div>

          <div className="space-y-px bg-white/5">
            {services.map((service) => (
              <div key={service.name} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors">
                <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="flex flex-wrap gap-3">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-[#c9a96e] text-xs uppercase tracking-wider border border-[#c9a96e]/30 px-3 py-1"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#c9a96e] py-16 px-4 text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-3">
          Ready for Your Best Cut Yet?
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book your appointment online in seconds — or give us a call.
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
