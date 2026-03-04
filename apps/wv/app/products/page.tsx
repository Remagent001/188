import { ProductsGrid } from "@repo/ui/components/ProductsGrid";
import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `Grooming Products | ${site.seo.title}`,
  description:
    "Professional men's grooming products available at 18|8 Uptown – West Village. Reuzel, 18.21 Man Made, and STMNT Grooming Goods — hand-selected by our stylists.",
};

const products = [
  {
    name: "Reuzel",
    description:
      "Quality men's products for styling and cleaning hair on your face and head. Old-school Rotterdam barbers formulated pomades with a vintage approach to grooming.",
    logo: "/images/Products/Reuzel.png",
  },
  {
    name: "18.21 Man Made",
    description:
      "Named after Prohibition amendments, professional-grade craft products inspired by bootlegging history. Premium quality for the modern gentleman.",
    logo: "/images/Products/18.21.png",
  },
  {
    name: "STMNT Grooming Goods",
    description:
      "Developed by modern barbering pioneers, STMNT products are crafted to take grooming to the next level with precision and performance.",
    logo: "/images/Products/stmnt.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-16 px-4 text-center">
        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">
          18|8 Uptown – West Village
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Grooming Products</h1>
        <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-5" />
        <p className="text-white/50 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          We carry only the best professional grooming brands — hand-selected by our stylists and
          recommended to keep your look sharp between visits.
        </p>
      </section>

      {/* Products grid */}
      <ProductsGrid products={products} />

      {/* Styling advice section */}
      <section className="bg-[#111] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] mb-3">Expert Guidance</p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
            Not Sure What You Need?
          </h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
            Your stylist knows your hair. During every visit, we make personalized product
            recommendations based on your hair type, cut, and lifestyle. No guesswork — just the
            right products for you. Ask at your next appointment and we'll set you up.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA
        site={site}
        heading="Come In & Stock Up"
        subtext="Visit us in West Village to browse our full product selection and get expert recommendations from your stylist."
      />
    </>
  );
}
