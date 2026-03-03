import { ServiceDetailPage } from "@repo/ui/components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Nail Treatments | ${site.seo.title}`,
  description:
    "The 18|8 Man-icure in Dallas — cuticle care, nail trimming, hand mask, and hand and arm massage at 18|8 Uptown – West Village.",
};

const services = [
  {
    name: "18|8 Man-icure",
    description:
      "Over the course of 30 minutes, we cover all of the bases to rejuvenate your nails — from cuticle care and nail trimming to a hand mask full of essential vitamins and minerals for healthier looking nails and a scrub for a refreshingly clean feeling. Add in a hand and arm massage and a cold beverage to top off the whole experience, and you'll be wondering why you didn't start getting manicures years ago.",
  },
];

export default function NailTreatmentsPage() {
  return (
    <ServiceDetailPage
      title="Nail Treatments"
      intro="Clean, groomed, and professional — no polish required. Our nail services are designed with the modern gentleman in mind."
      photo="https://www.188palmbeachgardens.com/wp-content/uploads/2021/08/188midtown8b-e1630035388512.jpg"
      services={services}
      site={site}
    />
  );
}
