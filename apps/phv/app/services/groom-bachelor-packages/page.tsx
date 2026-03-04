import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Groom & Bachelor Packages | ${site.seo.title}`,
  description:
    "Special event grooming packages for grooms and groomsmen in Dallas at 18|8 Preston Hollow Village.",
};

const services = [
  {
    name: "The Groom Package",
    description:
      "The complete grooming experience curated for the groom — Executive haircut with scalp massage, straight-razor shave or beard sculpt, men's facial treatment, nail treatment, and styling. Everything you need to look impeccable on your wedding day.",
  },
  {
    name: "The Groomsmen Package",
    description:
      "Keep the whole crew looking sharp. A streamlined yet elevated service for each member of the wedding party — Classic or Executive haircut, beard trim, and styling. Coordinated group booking available.",
  },
  {
    name: "The Bachelor Party Grooming",
    description:
      "Start the celebration right with everyone looking their best. We accommodate group bookings with full-service options, complimentary beverages, and a private salon experience.",
  },
  {
    name: "Day-Of Touch-Up",
    description:
      "A focused, fast session for the groom on the morning of the wedding. Fresh neckline, beard detail, and final styling — get polished and camera-ready before it's time to walk down the aisle.",
  },
];

export default function GroomBachelorPackagesPage() {
  return (
    <ServiceDetailPage
      title="Groom & Bachelor Packages"
      intro="Your wedding day is one of the most photographed moments of your life. Look your absolute best with our exclusive groom and groomsmen packages. Contact us directly to coordinate your group booking."
      photo="/images/service-groom.jpg"
      services={services}
      site={site}
    />
  );
}
