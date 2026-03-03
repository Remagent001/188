import { ServiceDetailPage } from "@repo/ui/components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Groom & Bachelor Packages | ${site.seo.title}`,
  description:
    "Groom and bachelor grooming packages in Dallas. Look your absolute best on the big day at 18|8 Uptown – West Village.",
};

const services = [
  {
    name: "The Gentleman's Classic",
    description:
      "Features the 18|8 signature Executive Haircut followed by a neck and shoulder massage, shampoo and conditioner treatment, aromatic hot-towel application, and a straight-razor shave with hot lather finishing.",
  },
  {
    name: 'The "You\'re The Man" Package',
    description:
      "Includes everything from the Gentleman's Classic package plus a specialized Man-icure — hydrating hand mask, hand scrub, and cuticle treatment — concluding with a hand and arm massage. The complete experience.",
  },
];

export default function GroomBachelorPackagesPage() {
  return (
    <ServiceDetailPage
      title="Groom & Bachelor Packages"
      intro="Your wedding day is one of the most photographed moments of your life. We offer a full selection of barbershop and salon services to create the perfect look from head to toe — with a comfortable waiting area complete with complimentary beverages and flat screen TVs."
      photo="https://www.188palmbeachgardens.com/wp-content/uploads/2021/09/188midtown14c-scaled-e1642387662768.jpg"
      services={services}
      site={site}
    />
  );
}
