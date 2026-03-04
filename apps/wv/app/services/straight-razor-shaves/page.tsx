import { ServiceDetailPage } from "@repo/ui/components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Straight-Razor Shaves | ${site.seo.title}`,
  description:
    "Classic straight-razor shaves in Dallas — hot towel, warm lather, executive shave with mini facial at 18|8 Uptown – West Village.",
};

const services = [
  {
    name: "Classic Straight Razor Shave",
    description:
      "Our classic shave includes a hot towel cleanse, hot lather application, a close straight-razor shave, and a hot towel finish. Repeated visits help exfoliate your skin and stimulate collagen production for smoother, firmer skin over time.",
  },
  {
    name: "Executive Shave with Mini Facial",
    description:
      "Our premium shave experience combines the classic straight razor shave with a rejuvenating face treatment including face cleanser and a rejuvenating moisture treatment.",
  },
  {
    name: "Head Shave",
    description:
      "A full head shave featuring a scalp-cleansing shampoo, a neck massage, a hot towel steam and lather, and a straight-edge blade with cold towel finish.",
  },
];

export default function StraightRazorShavesPage() {
  return (
    <ServiceDetailPage
      title="Straight-Razor Shaves"
      photo="/images/service-shaves.jpg"
      services={services}
      site={site}
    />
  );
}
