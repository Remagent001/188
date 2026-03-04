import { ServiceDetailPage } from "@repo/ui/components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Hair Coloring & Blending | ${site.seo.title}`,
  description:
    "Professional men's hair coloring and gray blending in Dallas. Semi-permanent and permanent options at 18|8 Preston Hollow Village.",
};

const services = [
  {
    name: "Men's Gray Blending",
    description:
      "If you think going gray is a bad thing, trust us: nothing is more appealing than a man who wears his gray hair tastefully. We help you achieve the perfect ratio of color and gray tones for a natural, distinguished appearance.",
  },
  {
    name: "Permanent Hair Coloring",
    description:
      "Long-lasting hair color with a consultation required for first-time clients. Our stylists will match your desired result and deliver consistent, natural-looking color. Call to schedule.",
  },
  {
    name: "Highlights",
    description:
      "An excellent way to bring out the nuance of your hair color, with options for subtle or pronounced styles. Our expert stylists create looks tailored to your individual features. Call to schedule.",
  },
];

export default function HairColoringPage() {
  return (
    <ServiceDetailPage
      title="Hair Coloring & Blending"
      photo="/images/service-hair-coloring.jpg"
      services={services}
      site={site}
    />
  );
}
