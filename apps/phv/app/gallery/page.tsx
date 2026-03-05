import site from "../../config/site";

export const metadata = {
  title: `Gallery | ${site.seo.title}`,
  description: "Photos from 18|8 Fine Men's Salon Preston Hollow Village Dallas.",
};

export default function GalleryPage() {
  return (
    <section className="bg-[#f5f5f5] pt-24 pb-16 px-4 text-center min-h-screen">
      <p className="text-[#aa0000] text-xs uppercase tracking-[0.4em] mb-3">Our Work</p>
      <h1 className="text-[#212934] text-4xl sm:text-5xl font-bold mb-4">Gallery</h1>
      <div className="w-12 h-px bg-[#aa0000] mx-auto mt-5" />
      <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
        Photos coming soon. Follow us on social media for our latest work.
      </p>
    </section>
  );
}
