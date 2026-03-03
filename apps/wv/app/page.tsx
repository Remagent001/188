import { HeroSection } from "@repo/ui/components/HeroSection";
import { ServicesOverview } from "@repo/ui/components/ServicesOverview";
import { TeamGrid } from "@repo/ui/components/TeamGrid";
import { VisitUsSection } from "@repo/ui/components/VisitUsSection";
import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../config/site";

// Replace with real stylist names, titles, and photos when available
const team = [
  { name: "Stylist Name", title: "Master Stylist",  photo: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/44.jpg" },
  { name: "Stylist Name", title: "Senior Stylist",   photo: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/71.jpg" },
  { name: "Stylist Name", title: "Stylist",          photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Stylist Name", title: "Master Barber",    photo: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Stylist Name", title: "Stylist",          photo: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/22.jpg" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection site={site} />
      <ServicesOverview />
      <TeamGrid members={team} />
      <VisitUsSection site={site} />
      <BookingCTA site={site} />
    </>
  );
}
