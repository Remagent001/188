import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Facial Hair Sculpting | ${site.seo.title}`,
  description:
    "Expert beard shaping, mustache styling, and precision edge-ups in Dallas. Look sharp and defined at 18|8 Fine Men's Salon Preston Hollow Village.",
};

const services = [
  {
    name: "Beard Shaping & Design",
    description:
      "A precision beard sculpt that defines your natural shape and enhances your facial structure. We work with your growth pattern to create clean lines and a sharp, intentional look.",
  },
  {
    name: "Mustache Styling",
    description:
      "Expert trimming and shaping of your mustache. Whether you prefer a classic look or something more distinctive, we'll keep it neat, proportional, and perfectly groomed.",
  },
  {
    name: "Full Beard Trim",
    description:
      "Comprehensive beard grooming from cheek line to neckline. Includes a hot towel treatment to soften the hair, followed by precise trimming to your preferred length and shape.",
  },
  {
    name: "Beard & Haircut Combo",
    description:
      "The complete package — a precision haircut paired with a full beard sculpt. Look cohesive from the top of your head to the bottom of your beard. Our most popular combination service.",
  },
];

export default function FacialHairSculptingPage() {
  return (
    <ServiceDetailPage
      title="Facial Hair Sculpting"
      intro="Your beard and mustache deserve the same precision and care as your haircut. Our stylists expertly shape, define, and sculpt your facial hair to complement your features — keeping you looking sharp, intentional, and polished."
      photo="/images/service-sculpting.jpg"
      services={services}
      site={site}
    />
  );
}
