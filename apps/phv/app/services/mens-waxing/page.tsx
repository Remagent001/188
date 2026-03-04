import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Men's Waxing | ${site.seo.title}`,
  description:
    "Professional men's waxing in Dallas — ear, nose, brow, neck, and cheek waxing at 18|8 Preston Hollow Village.",
};

const services = [
  {
    name: "Ear Waxing",
    description:
      "Quick, clean removal of unwanted ear hair — a small detail that makes a big difference in your overall appearance.",
  },
  {
    name: "Nose Waxing",
    description:
      "Safe and effective nose hair removal using professional-grade wax. Far more precise and longer-lasting than trimming.",
  },
  {
    name: "Brow Waxing & Shaping",
    description:
      "Clean up your brow line and define your arch for a polished, well-groomed look. We keep it masculine — never overdone.",
  },
  {
    name: "Brow Waxing & Trimming",
    description:
      "Full brow grooming including wax cleanup and scissors trim to manage length and create a natural, structured shape.",
  },
  {
    name: "Neck Waxing",
    description:
      "Keep your neckline clean and defined between haircuts. Removes stray hair and keeps the back of your neck looking sharp.",
  },
  {
    name: "Cheek Waxing",
    description:
      "Clean up unwanted cheek hair to define your beard line or simply keep a groomed, tidy look at the jawline.",
  },
];

export default function MensWaxingPage() {
  return (
    <ServiceDetailPage
      title="Men's Waxing"
      intro="The details matter. Our professional waxing services keep you looking clean, precise, and polished — targeting the areas that make the biggest difference. All services can be added to any haircut or shave appointment."
      photo="/images/service-waxing.jpg"
      services={services}
      site={site}
    />
  );
}
