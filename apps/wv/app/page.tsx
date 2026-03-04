import { HeroSection } from "@repo/ui/components/HeroSection";
import { ServicesOverview } from "@repo/ui/components/ServicesOverview";
import { TeamGrid } from "@repo/ui/components/TeamGrid";
import { VisitUsSection } from "@repo/ui/components/VisitUsSection";
import { BookingCTA } from "@repo/ui/components/BookingCTA";
import site from "../config/site";

// Replace with real stylist names, titles, and photos when available
const team = [
  { name: "Stylist Name", title: "Master Stylist",  photo: "/images/team/team-1.jpg" },
  { name: "Stylist Name", title: "Senior Stylist",  photo: "/images/team/team-2.jpg" },
  { name: "Stylist Name", title: "Stylist",         photo: "/images/team/team-3.jpg" },
  { name: "Stylist Name", title: "Barber",          photo: "/images/team/team-4.jpg" },
  { name: "Stylist Name", title: "Stylist",         photo: "/images/team/team-5.jpg" },
  { name: "Stylist Name", title: "Senior Stylist",  photo: "/images/team/team-6.jpg" },
  { name: "Stylist Name", title: "Master Barber",   photo: "/images/team/team-7.jpg" },
  { name: "Stylist Name", title: "Stylist",         photo: "/images/team/team-8.jpg" },
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
