import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Hair Coloring & Blending | ${site.seo.title}`,
  description:
    "Professional men's hair coloring and gray blending in Dallas. Semi-permanent and permanent options at 18|8 Preston Hollow Village.",
};

const services = [
  {
    name: "Gray Blending",
    description:
      "A seamless, natural-looking blend that softens gray without erasing it entirely. Perfect for the gentleman who wants a more youthful, polished appearance without looking overdone.",
  },
  {
    name: "Full Gray Coverage",
    description:
      "Complete, consistent coverage that delivers rich, uniform color from root to tip. Permanent formulas ensure long-lasting results that stay true between visits.",
  },
  {
    name: "Semi-Permanent Color",
    description:
      "A lower-commitment option that enhances your natural color with added depth and dimension. Gradually fades for a soft, low-maintenance result.",
  },
  {
    name: "Root Touch-Up",
    description:
      "Between full color appointments, keep your look fresh and consistent with a targeted root application. In and out with zero compromise.",
  },
];

export default function HairColoringPage() {
  return (
    <ServiceDetailPage
      title="Hair Coloring & Blending"
      intro="Whether you want to subtly blend gray, go for full coverage, or experiment with a new shade, our colorists deliver results tailored precisely to your goals and complexion. Every service includes a one-on-one consultation."
      photo="/images/service-hair-coloring.jpg"
      services={services}
      site={site}
    />
  );
}
