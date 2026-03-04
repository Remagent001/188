import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Scalp Treatments | ${site.seo.title}`,
  description:
    "Specialized scalp treatments for hair loss, dryness, and scalp health in Dallas at 18|8 Preston Hollow Village.",
};

const services = [
  {
    name: "Scalp Analysis",
    description:
      "Before recommending a treatment protocol, we conduct a thorough scalp analysis to assess your hair density, follicle health, and any signs of dryness, oil imbalance, or early-stage thinning.",
  },
  {
    name: "Hydrating Scalp Treatment",
    description:
      "Targets dry, flaky, and irritated scalps with deeply nourishing serums and a therapeutic scalp massage. Restores moisture balance and calms inflammation for immediate, lasting relief.",
  },
  {
    name: "Hair Loss & Thinning Treatment",
    description:
      "A targeted protocol using stimulating serums and massage techniques designed to increase circulation to the scalp, awaken dormant follicles, and support healthier, fuller hair growth over time.",
  },
  {
    name: "Anti-Dandruff Treatment",
    description:
      "Addresses the root causes of dandruff — fungal buildup, excess oil, and skin cell turnover — with a clarifying treatment that cleans deeply without stripping the scalp's natural barrier.",
  },
  {
    name: "Scalp Exfoliation",
    description:
      "A professional-grade scalp exfoliation that removes product buildup, dead skin, and excess sebum — creating the clean foundation your hair needs to grow and look its best.",
  },
  {
    name: "Oily Scalp Balancing Treatment",
    description:
      "Targets overactive sebaceous glands that cause greasy hair and scalp buildup. Regulates oil production and extends the freshness of your look between washes.",
  },
];

export default function ScalpTreatmentsPage() {
  return (
    <ServiceDetailPage
      title="Scalp Treatments"
      intro="Healthy hair starts at the scalp. Our specialized treatments address the root causes of hair loss, dryness, dandruff, and oil imbalance — so your hair grows better, looks better, and lasts longer."
      photo="/images/service-scalp.jpg"
      services={services}
      site={site}
    />
  );
}
