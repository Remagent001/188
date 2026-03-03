import site from "../../../config/site";

export const metadata = {
  title: `Scalp Treatments | ${site.seo.title}`,
  description:
    "Specialized scalp treatments for hair loss, dryness, and scalp health in Dallas. Professional care at 18|8 Uptown – West Village.",
};

const treatments = [
  {
    name: "Scalp Analysis",
    description:
      "Before recommending a treatment protocol, we conduct a thorough scalp analysis to assess your hair density, follicle health, and any signs of dryness, oil imbalance, or early-stage thinning.",
    details: ["Professional assessment", "Personalized recommendations", "Complimentary with treatment"],
  },
  {
    name: "Hydrating Scalp Treatment",
    description:
      "Targets dry, flaky, and irritated scalps with deeply nourishing serums and a therapeutic scalp massage. Restores moisture balance and calms inflammation for immediate, lasting relief.",
    details: ["Deep hydration", "Scalp massage", "Anti-itch relief"],
  },
  {
    name: "Hair Loss & Thinning Treatment",
    description:
      "A targeted protocol using stimulating serums and massage techniques designed to increase circulation to the scalp, awaken dormant follicles, and support healthier, fuller hair growth over time.",
    details: ["Stimulating serums", "Follicle activation massage", "Ongoing protocol available"],
  },
  {
    name: "Anti-Dandruff Treatment",
    description:
      "Addresses the root causes of dandruff — fungal buildup, excess oil, and skin cell turnover — with a clarifying treatment that cleans deeply without stripping the scalp's natural barrier.",
    details: ["Clarifying formula", "Balances oil production", "Soothes irritation"],
  },
  {
    name: "Scalp Exfoliation",
    description:
      "A professional-grade scalp exfoliation that removes product buildup, dead skin, and excess sebum — creating the clean foundation your hair needs to grow and look its best.",
    details: ["Removes buildup", "Stimulates growth", "Pairs with any haircut"],
  },
  {
    name: "Oily Scalp Balancing Treatment",
    description:
      "Targets overactive sebaceous glands that cause greasy hair and scalp buildup. Regulates oil production and extends the freshness of your look between washes.",
    details: ["Oil-regulating formula", "Refreshes faster", "Longer-lasting results"],
  },
];

export default function ScalpTreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Services</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Scalp Treatments</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Healthy hair starts at the scalp. Our specialized treatments address the root causes of
          hair loss, dryness, dandruff, and oil imbalance — so your hair grows better, looks better,
          and lasts longer.
        </p>
      </section>

      {/* Why scalp health matters */}
      <section className="bg-[#111] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { label: "Hair Loss", icon: "↓", detail: "Stimulate follicles and improve circulation to slow thinning and encourage regrowth." },
              { label: "Dryness & Flaking", icon: "~", detail: "Restore moisture balance and eliminate dandruff with targeted hydrating treatments." },
              { label: "Oil & Buildup", icon: "○", detail: "Regulate sebum production and clear buildup for a fresher, cleaner scalp environment." },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <span className="text-[#c9a96e] text-3xl font-bold">{item.icon}</span>
                <h3 className="text-white font-semibold">{item.label}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Treatment Menu</p>
            <h2 className="text-white text-3xl font-bold">Scalp Care Services</h2>
            <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {treatments.map((treatment) => (
              <div key={treatment.name} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors flex flex-col gap-4">
                <h3 className="text-white text-lg font-semibold">{treatment.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{treatment.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {treatment.details.map((d) => (
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
          Invest in Your Hair's Future
        </h2>
        <p className="text-black/70 mb-8 text-sm max-w-md mx-auto">
          Book a scalp treatment today, or speak with one of our stylists about a personalized
          protocol.
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
