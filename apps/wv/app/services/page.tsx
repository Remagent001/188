import { ServicesOverview } from "@repo/ui/components/ServicesOverview";
import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `Services | ${site.seo.title}`,
  description:
    "Explore our full range of men's grooming services — haircuts, straight-razor shaves, hair coloring, facials, waxing, scalp treatments, facial hair sculpting, and groom packages.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">
          18|8 Uptown – West Village
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Every service is performed with precision and care, in a space designed exclusively for men.
          From a classic cut to a full grooming package, we have you covered.
        </p>
      </section>

      {/* Services grid */}
      <ServicesOverview />

      {/* Booking CTA */}
      <BookingCTA site={site} />
    </>
  );
}
