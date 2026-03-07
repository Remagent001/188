import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `Specials & Offers | ${site.seo.title}`,
  description: "Current specials and promotions at 18|8 Fine Men's Salon Uptown – West Village Dallas.",
};

export default function SpecialsPage() {
  return (
    <>
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Deals & Promotions</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Specials</h1>
        <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Check back regularly for our latest promotions, seasonal offers, and member discounts.
        </p>
      </section>
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/30 text-sm">Current specials coming soon.</p>
        </div>
      </section>
      <BookingCTA site={site} heading="Book Your Appointment" subtext="Take advantage of our current offers — book online today." />
    </>
  );
}
