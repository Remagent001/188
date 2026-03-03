import type { SiteConfig } from "@repo/ui/types/site";

const site: SiteConfig = {
  locationName: "Preston Hollow Village",
  fullName: "18|8 Fine Men's Salon Preston Hollow Village",
  address: {
    street: "7949 Walnut Hill Lane",
    suite: "Suite 125",
    city: "Dallas",
    state: "TX",
    zip: "75230",
    mapsUrl: "https://maps.google.com/?q=7949+Walnut+Hill+Lane+Suite+125+Dallas+TX+75230",
  },
  phone: "2143052579",
  phoneFormatted: "(214) 305-2579",
  hours: [
    { label: "Mon – Thu", time: "10:00 AM – 8:00 PM" },
    { label: "Friday",    time: "10:00 AM – 7:00 PM" },
    { label: "Saturday",  time: "9:00 AM – 7:00 PM" },
    { label: "Sunday",    time: "Closed" },
  ],
  booking: {
    url: "https://www.phorest.com/salon/eighteeneightfinemenssalons1",
  },
  social: {
    // TODO: Add Instagram, Facebook, Yelp URLs for PHV location
    facebook: "https://www.facebook.com/PLACEHOLDER",
    instagram: "https://www.instagram.com/PLACEHOLDER",
    yelp: "https://www.yelp.com/biz/PLACEHOLDER",
  },
  seo: {
    title: "18|8 Fine Men's Salon Preston Hollow Village | Dallas, TX",
    description:
      "A classic barbershop for the modern gentleman in Dallas, TX. Expert haircuts, straight-razor shaves, hair coloring, facials & more at 18|8 Preston Hollow Village.",
  },
};

export default site;
