import { ServicesOverview } from "../../components/ServicesOverview";
import { BookingCTA } from "../../components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `Services | ${site.seo.title}`,
  description: "Explore our full range of men's grooming services — haircuts, straight-razor shaves, hair coloring, facials, waxing, scalp treatments, and groom packages.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] pt-24 pb-16 px-4 text-center">
        <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">
          18|8 Preston Hollow Village
        </p>
        <h1 className="text-[#212934] text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
        <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          Every service is performed with precision and care, in a space designed exclusively for men.
          From a classic cut to a full grooming package, we have you covered.
        </p>
      </section>
      <ServicesOverview />
      <BookingCTA site={site} />
    </>
  );
}
