import { ProductsGrid } from "../../components/ProductsGrid";
import { BookingCTA } from "../../components/BookingCTA";
import site from "../../config/site";

export const metadata = {
  title: `Grooming Products | ${site.seo.title}`,
  description: "Professional men's grooming products at 18|8 Preston Hollow Village Dallas. Reuzel, 18.21 Man Made, and STMNT Grooming Goods — hand-selected by our stylists.",
};

const products = [
  {
    name: "Reuzel",
    description: "Quality men's products for styling and cleaning hair on your face and head. Old-school Rotterdam barbers formulated pomades with a vintage approach to grooming.",
    logo: "/images/Products/Reuzel.png",
  },
  {
    name: "18.21 Man Made",
    description: "Named after Prohibition amendments, professional-grade craft products inspired by bootlegging history. Premium quality for the modern gentleman.",
    logo: "/images/Products/18.21.png",
  },
  {
    name: "STMNT Grooming Goods",
    description: "Developed by modern barbering pioneers, STMNT products are crafted to take grooming to the next level with precision and performance.",
    logo: "/images/Products/stmnt.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] pt-24 pb-16 px-4 text-center">
        <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">
          18|8 Preston Hollow Village
        </p>
        <h1 className="text-[#212934] text-4xl sm:text-5xl font-bold mb-4">Grooming Products</h1>
        <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
        <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
          We carry only the best professional grooming brands — hand-selected by our stylists and
          recommended to keep your look sharp between visits.
        </p>
      </section>

      <ProductsGrid products={products} />

      <section className="bg-[#f5f5f5] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Expert Guidance</p>
          <h2 className="text-[#212934] text-2xl sm:text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <div className="w-12 h-px bg-[#aa0000] mx-auto mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
            Your stylist knows your hair. During every visit, we make personalized product
            recommendations based on your hair type, cut, and lifestyle. Ask at your next appointment.
          </p>
        </div>
      </section>

      <BookingCTA
        site={site}
        heading="Come In & Stock Up"
        subtext="Visit us at Preston Hollow Village to browse our full product selection."
      />
    </>
  );
}
