import site from "../../../config/site";

export const metadata = {
  title: `Men's Facials | ${site.seo.title}`,
  description:
    "Rejuvenating facial treatments designed specifically for men's skin. Deep cleanse, exfoliation, and hydration at 18|8 Uptown – West Village in Dallas.",
};

const facialServices = [
  {
    name: "Classic Men's Facial",
    description:
      "A foundational facial treatment designed for men's thicker, oilier skin. Deep cleansing, steam, professional extractions, and a hydrating mask leave your skin refreshed and revitalized.",
    details: ["Steam & deep cleanse", "Professional extractions", "Hydrating mask", "~50 minutes"],
  },
  {
    name: "Executive Facial",
    description:
      "Our premium facial experience combines advanced exfoliation with intensive hydration. Ideal for clients dealing with stress, environmental exposure, or the visible effects of aging.",
    details: ["Advanced exfoliation", "Collagen-boosting treatment", "Targeted serums", "~75 minutes"],
  },
  {
    name: "Express Facial",
    description:
      "When you're short on time but need to look your best. A focused cleansing and brightening treatment that makes a noticeable difference in under 30 minutes.",
    details: ["Quick cleanse & tone", "Brightening treatment", "~30 minutes"],
  },
  {
    name: "Anti-Aging Facial",
    description:
      "Targeted treatment using peptide-rich formulas and firming techniques to reduce the appearance of fine lines, improve skin elasticity, and restore a youthful complexion.",
    details: ["Peptide-rich serums", "Firming massage", "Eye treatment included", "~60 minutes"],
  },
];

export default function MensFacialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Men's Facials</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Your skin deserves as much attention as your cut. Our facial treatments are formulated and
          delivered specifically for men — addressing the unique challenges of men's skin with
          results you'll actually see and feel.
        </p>
      </section>

      {/* Why men's facials */}
      <section className="bg-[#111] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Why It Matters</p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">
            Skincare Designed for Men
          </h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mb-8" />
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
            Men's skin is structurally different — thicker, with larger pores and more active
            sebaceous glands. Daily shaving adds another layer of stress. Our treatments are
            specifically calibrated for these realities, using professional-grade products that
            cleanse deeply, calm irritation, and restore balance without over-stripping or feminizing
            the process.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Facial Menu</p>
            <h2 className="text-white text-3xl font-bold">Choose Your Treatment</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {facialServices.map((service) => (
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
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#c9a96e] py-16 px-4 text-center">
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-3">
          Treat Your Skin Right
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book a facial treatment online or give us a call to find the right option for your skin.
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
