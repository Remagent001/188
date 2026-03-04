import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Men's Haircuts | ${site.seo.title}`,
  description:
    "Precision men's haircuts in Dallas — Classic Cut, Executive Cut, fades, skin fades, beard trims, and more at 18|8 Preston Hollow Village.",
};

const services = [
  {
    name: "The Classic Cut",
    description:
      "Our signature precision haircut paired with a relaxing shampoo and a hot towel treatment. A complete, timeless experience every visit.",
  },
  {
    name: "The Executive Cut",
    description:
      "Step it up with our elevated signature cut, complete with a revitalizing scalp massage that melts the stress of the day away.",
  },
  {
    name: "Fade",
    description:
      "Clean, sharp, and perfectly blended. We offer high, low, mid, and taper fade variations — whatever keeps your look on point.",
  },
  {
    name: "Skin Fade",
    description:
      "The ultimate clean fade taken all the way to the skin for a razor-sharp, ultra-fresh finish that turns heads.",
  },
  {
    name: "Master & Young Master",
    description:
      "A bonding experience for fathers and sons. Both get expert haircuts in a welcoming environment, side by side.",
  },
  {
    name: "Distinguished Master (65+)",
    description:
      "Special pricing for gentlemen 65 and over. Available Sunday through Tuesday before 4:00 PM — our way of honoring those who've earned it.",
  },
  {
    name: "Student Discount",
    description:
      "For students 13 and under. Available Sunday through Tuesday until 4:00 PM. Because great grooming starts early.",
  },
  {
    name: "Beard Trim",
    description:
      "Keep your facial hair neat, shaped, and intentional. Our barbers sculpt your beard to complement your cut and your face.",
  },
];

export default function MensHaircutsPage() {
  return (
    <ServiceDetailPage
      title="Men's Haircutting Services"
      photo="/images/service-haircuts.jpg"
      services={services}
      site={site}
    />
  );
}
