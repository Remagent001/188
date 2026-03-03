import { ServiceDetailPage } from "@repo/ui/components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Scalp Treatments | ${site.seo.title}`,
  description:
    "The 18|8 Scalpmetics treatment for men in Dallas. Healthy hair starts with a healthy scalp at 18|8 Uptown – West Village.",
};

const services = [
  {
    name: "18|8 Scalpmetics Treatment",
    description:
      "Designed just for men, our Scalpmetics treatment transforms any scalp from dry and itchy to perfectly healthy in just 20 minutes. The process involves a moisturizing and exfoliating deep scalp massage, washing away dead skin cells, excess oils, and dirt. Healthy hair starts with a healthy scalp.",
  },
];

export default function ScalpTreatmentsPage() {
  return (
    <ServiceDetailPage
      title="Scalp Treatments"
      intro="Healthy hair starts with a healthy scalp. Our professional scalp treatments address dryness, buildup, and irritation — leaving your scalp refreshed and your hair looking its best."
      photo="https://www.188palmbeachgardens.com/wp-content/uploads/2021/09/188midtown14c-scaled-e1642387662768.jpg"
      services={services}
      site={site}
    />
  );
}
