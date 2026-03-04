import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Straight-Razor Shaves | ${site.seo.title}`,
  description:
    "Classic straight-razor shaves in Dallas — hot towel, warm lather, executive shave with mini facial at 18|8 Preston Hollow Village.",
};

const services = [
  {
    name: "Classic Straight Razor Shave",
    description:
      "A steaming hot towel opens the pores and softens the hair, followed by warm lather and a precision straight-razor shave. Finished with a cold towel and soothing aftershave balm.",
  },
  {
    name: "Executive Shave with Mini Facial",
    description:
      "Our premium shave experience combines the classic straight razor shave with a rejuvenating face treatment including face cleanser and a rejuvenating moisture treatment.",
  },
  {
    name: "Head Shave",
    description:
      "A full head shave featuring a scalp-cleansing shampoo, a neck massage, a hot towel steam and lather, and a straight-edge blade with cold towel finish.",
  },
];

export default function StraightRazorShavesPage() {
  return (
    <ServiceDetailPage
      title="Straight-Razor Shaves"
      intro="The closest shave you've ever had. Our barbers deliver the classic straight-razor experience with expert precision and old-world attention to detail."
      photo="/images/service-shaves.jpg"
      services={services}
      site={site}
    />
  );
}
