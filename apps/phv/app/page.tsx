import { HeroSection } from "../components/HeroSection";
import { ServicesOverview } from "../components/ServicesOverview";
import { TeamGrid } from "../components/TeamGrid";
import { BookingCTA } from "../components/BookingCTA";
import site from "../config/site";

// Placeholder team — replace names, titles, and photos with real ones
const team = [
  { name: "Stylist Name", title: "Master Stylist",  photo: "https://randomuser.me/api/portraits/men/36.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/48.jpg" },
  { name: "Stylist Name", title: "Senior Stylist",   photo: "https://randomuser.me/api/portraits/men/62.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/78.jpg" },
  { name: "Stylist Name", title: "Stylist",          photo: "https://randomuser.me/api/portraits/women/32.jpg" },
  { name: "Stylist Name", title: "Master Barber",    photo: "https://randomuser.me/api/portraits/men/58.jpg" },
  { name: "Stylist Name", title: "Stylist",          photo: "https://randomuser.me/api/portraits/women/71.jpg" },
  { name: "Stylist Name", title: "Barber",           photo: "https://randomuser.me/api/portraits/men/27.jpg" },
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
