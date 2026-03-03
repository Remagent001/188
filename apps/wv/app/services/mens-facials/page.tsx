import { ServiceDetailPage } from "@repo/ui/components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Men's Facials | ${site.seo.title}`,
  description:
    "The 18|8 SkinMetics facial treatment designed specifically for men. Deep cleanse, exfoliation, and hydration in Dallas at 18|8 Uptown – West Village.",
};

const services = [
  {
    name: "18|8 SkinMetics Treatment",
    description:
      "Men's skin has unique needs to stay healthy compared to women's skin, which is why we crafted our SkinMetics treatment to cater specifically to what guys need. The treatment includes deep cleaning to remove accumulated dirt and oil, exfoliation to eliminate impurities, and hydration with essential moisture, vitamins, and minerals — plus a neck, shoulder, and scalp massage. 45 minutes.",
  },
];

export default function MensFacialsPage() {
  return (
    <ServiceDetailPage
      title="Men's Facials"
      intro="Your skin deserves as much attention as your cut. Our facial treatments are formulated and delivered specifically for men — addressing the unique challenges of men's skin with results you'll actually see and feel."
      photo="https://www.188palmbeachgardens.com/wp-content/uploads/2021/08/188midtown8b-e1630035388512.jpg"
      services={services}
      site={site}
    />
  );
}
