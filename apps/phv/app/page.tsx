import { HeroSection } from "../components/HeroSection";
import { ServicesOverview } from "../components/ServicesOverview";
import { TeamGrid } from "../components/TeamGrid";
import { BookingCTA } from "../components/BookingCTA";
import site from "../config/site";

const team = [
  {
    name: "Christian",
    title: "Center Stylist",
    photo: "/images/team/team-1.jpg",
    bio: "A Dallas native, Christian has been refining his craft since 2021, specializing in straight razor services including face shaves, head shaves, and meticulous beard lineups. Known for sharp fades and confident shear work, he combines technical skill with attention to detail. Outside the salon, he's an avid pro wrestling fan and a devoted music enthusiast across all genres.",
  },
  {
    name: "Liz",
    title: "Center Stylist",
    photo: "/images/team/team-2.jpg",
  },
  {
    name: "Ginger",
    title: "Center Stylist",
    photo: "/images/team/team-3.jpg",
    bio: "Ginger has been a stylist since 2011 and considers motherhood her greatest achievement. She specializes in refined scissor work and effortless, lived-in texture. Her favorites include executive flowy styles and modern mullets — cuts that blend timeless influence with contemporary edge. Outside the salon, she collects mid-century pieces, paints, plays video games, and appreciates a well-timed meme — so don't hesitate to share one at your next visit!",
  },
  {
    name: "Cindy",
    title: "Manager / Master Stylist",
    photo: "/images/team/team-4.jpg",
    bio: "Cindy is the Salon Director and a Dallas native who has been part of 18|8 Preston Hollow Village for eight years. She's passionate about precision scissor work, crafting cuts that are thoughtfully tailored to each individual. While customized cuts are her specialty, she approaches every service with versatility and intention. Outside the salon, Cindy enjoys discovering new coffee spots around DFW, baking, cheering on the Cowboys, and spending time with family.",
  },
  {
    name: "Adriana",
    title: "Master Stylist",
    photo: "/images/team/team-5.jpg",
    bio: "Adriana is a dual-licensed cosmetologist/barber with eight years at Eighteen Eight. She has a genuine passion for connecting with new clients and enjoys crafting all styles, with a particular love for textured cuts that bring movement and personality to the hair. Outside of work, she spends her time with family, attends concerts and festivals, and rarely misses a Dallas Stars game — hockey is her sport of choice.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection site={site} />
      <div className="relative z-10">
        <ServicesOverview />
        <TeamGrid members={team} />
        <BookingCTA site={site} />
      </div>
    </>
  );
}
