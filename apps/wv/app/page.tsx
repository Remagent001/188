import { HeroSection } from "@repo/ui/components/HeroSection";
import { ServicesOverview } from "@repo/ui/components/ServicesOverview";
import { TeamGrid } from "@repo/ui/components/TeamGrid";
import { VisitUsSection } from "@repo/ui/components/VisitUsSection";
import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../config/site";

// Replace with real stylist names, titles, and photos when available
const team = [
  { name: "Stylist Name", title: "Master Stylist",  photo: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Stylist Name", title: "Senior Stylist",  photo: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Stylist Name", title: "Stylist",         photo: "https://randomuser.me/api/portraits/women/10.jpg" },
  { name: "Stylist Name", title: "Barber",          photo: "https://randomuser.me/api/portraits/women/17.jpg" },
  { name: "Stylist Name", title: "Stylist",         photo: "https://randomuser.me/api/portraits/women/20.jpg" },
  { name: "Stylist Name", title: "Senior Stylist",  photo: "https://randomuser.me/api/portraits/women/26.jpg" },
  { name: "Stylist Name", title: "Master Barber",   photo: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Stylist Name", title: "Stylist",         photo: "https://randomuser.me/api/portraits/women/44.jpg" },
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
