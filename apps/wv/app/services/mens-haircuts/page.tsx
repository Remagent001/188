import { ServiceDetailPage } from "@repo/ui/components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Men's Haircuts | ${site.seo.title}`,
  description:
    "Precision men's haircuts in Dallas – Classic Cut, Executive Cut, fades, skin fades, beard trims, and more at 18|8 Uptown – West Village.",
};

const services = [
  {
    name: "The Classic Cut",
    description:
      "The classic cut is all business; just the perfect haircut with some added 18|8 touches will leave you looking classically classy. Sit down with our professional stylist and enjoy a precision haircut, a refreshing shampoo and conditioner treatment, and a relaxing hot towel finish.",
  },
  {
    name: "The Executive Cut",
    description:
      "Our signature cut, the Executive haircut still gives you that perfect haircut, but adds on a stress-relieving scalp massage to help melt those worries away.",
  },
  {
    name: "Fade",
    description:
      "High, low, mid, or taper — let our skilled barbers create your style.",
  },
  {
    name: "Skin Fade",
    description:
      "Blend to the skin for a sharp, bold style.",
  },
  {
    name: "Master & Young Master Haircuts",
    description:
      "Nothing says bonding like getting a haircut together. We'll have you and your young one looking sharper than ever before with a Classic Haircut and a Young Master Haircut, both including a scalp-cleansing shampoo, scalp-moisturizing conditioner, complete with a hot towel finish.",
  },
  {
    name: "Distinguished Master (65+ Years)",
    description:
      "We'll make sure you age gracefully — you may be older, but you can still look incredible. Come in Sunday–Tuesday before 4 PM to take advantage of this offer.",
  },
  {
    name: "Student (w/ ID Sun – Tue until 4 PM)",
    description:
      "Students 13 and under receive a discounted price.",
  },
  {
    name: "Beard Trim (with Clipper)",
    description:
      "A beard is more than an accessory. It's a statement & a personal choice. And in many ways, a work of art. You owe it to your face to get your beard trimmed by an expert.",
  },
];

export default function MensHaircutsPage() {
  return (
    <ServiceDetailPage
      title="Men's Haircutting Services"
      photo="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
      services={services}
      site={site}
    />
  );
}
