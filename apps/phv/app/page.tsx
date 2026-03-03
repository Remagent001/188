import { HeroSection } from "@repo/ui/components/HeroSection";
import { ServicesOverview } from "@repo/ui/components/ServicesOverview";
import { TeamGrid } from "@repo/ui/components/TeamGrid";
import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../config/site";

const team = [
  { name: "Stylist Name", title: "Master Stylist" },
  { name: "Stylist Name", title: "Barber" },
  { name: "Stylist Name", title: "Senior Stylist" },
  { name: "Stylist Name", title: "Barber" },
  { name: "Stylist Name", title: "Stylist" },
  { name: "Stylist Name", title: "Master Barber" },
  { name: "Stylist Name", title: "Stylist" },
  { name: "Stylist Name", title: "Barber" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection site={site} />
      <ServicesOverview />
      <TeamGrid members={team} />
      <BookingCTA site={site} />
    </>
  );
}
