import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Men's Skin Treatments | ${site.seo.title}`,
  description:
    "Rejuvenating skin treatments designed specifically for men. Deep cleanse, exfoliation, and hydration at 18|8 Fine Men's Salon Preston Hollow Village in Dallas.",
};

const services = [
  {
    name: "Classic Men's Facial",
    description:
      "A foundational facial treatment designed for men's thicker, oilier skin. Deep cleansing, steam, professional extractions, and a hydrating mask leave your skin refreshed and revitalized.",
  },
  {
    name: "Executive Facial",
    description:
      "Our premium facial experience combines advanced exfoliation with intensive hydration. Ideal for clients dealing with stress, environmental exposure, or the visible effects of aging.",
  },
  {
    name: "Express Facial",
    description:
      "When you're short on time but need to look your best. A focused cleansing and brightening treatment that makes a noticeable difference in under 30 minutes.",
  },
  {
    name: "Anti-Aging Facial",
    description:
      "Targeted treatment using peptide-rich formulas and firming techniques to reduce the appearance of fine lines, improve skin elasticity, and restore a youthful complexion.",
  },
];

export default function MensSkinTreatmentsPage() {
  return (
    <ServiceDetailPage
      title="Men's Skin Treatments"
      intro="Your skin deserves as much attention as your cut. Our treatments are formulated specifically for men — addressing the unique challenges of men's skin with results you'll actually see and feel."
      photo="/images/service-facials.jpg"
      services={services}
      site={site}
    />
  );
}
