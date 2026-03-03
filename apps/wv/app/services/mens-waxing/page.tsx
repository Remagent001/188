import { ServiceDetailPage } from "@repo/ui/components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Men's Waxing | ${site.seo.title}`,
  description:
    "Professional men's waxing in Dallas — nose, ear, and eyebrow waxing at 18|8 Uptown – West Village.",
};

const services = [
  {
    name: "Nose or Ear Waxing",
    description:
      "Having stray whiskers protruding from your nose and ears isn't doing you any favors. Professional waxing removes unwanted hair from these hard-to-reach areas safely and effectively — far more thorough than home trimming.",
  },
  {
    name: "Men's Eyebrow Waxing",
    description:
      "Control overgrown eyebrows to create a clean, focused, masculine look. Bushy brows can detract from your overall appearance — our barbers keep it natural and shaped without overdoing it.",
  },
];

export default function MensWaxingPage() {
  return (
    <ServiceDetailPage
      title="Men's Waxing"
      intro="The details matter. Our professional waxing services keep you looking clean, precise, and polished — targeting the areas that make the biggest difference."
      photo="https://www.188palmbeachgardens.com/wp-content/uploads/2021/08/188midtown11b-e1630035246155.jpg"
      services={services}
      site={site}
    />
  );
}
