import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import site from "../../../config/site";

export const metadata = {
  title: `Nail Treatments | ${site.seo.title}`,
  description:
    "Men's manicures and pedicures in Dallas. Clean, groomed, and professional nail care at 18|8 Preston Hollow Village.",
};

const services = [
  {
    name: "Man-icure",
    description:
      "A professional hand grooming service designed for men. Nails are trimmed, filed, and buffed to a clean finish. Cuticles are treated and pushed back, and the hands are exfoliated and moisturized.",
  },
  {
    name: "Deluxe Man-icure",
    description:
      "Everything in the classic Man-icure, plus a warm paraffin wax dip that deeply conditions the skin, relieves tension, and leaves hands noticeably softer.",
  },
  {
    name: "Pedicure",
    description:
      "A thorough foot grooming service. Nails trimmed and filed, calluses softened and smoothed, cuticles treated, and feet exfoliated and moisturized. Ends with a relaxing foot and lower leg massage.",
  },
  {
    name: "Deluxe Pedicure",
    description:
      "Adds a warm paraffin wax treatment and extended massage for maximum relaxation and skin conditioning. The perfect recovery for active gentlemen.",
  },
];

export default function NailTreatmentsPage() {
  return (
    <ServiceDetailPage
      title="Nail Treatments"
      intro="Clean, groomed, and professional — no polish required. Our nail services are designed with the modern gentleman in mind. Well-groomed hands and feet are a sign of a man who pays attention to the details."
      photo="/images/service-nails.jpg"
      services={services}
      site={site}
    />
  );
}
