import type { SiteConfig } from "@repo/ui/types/site";

const site: SiteConfig = {
  locationName: "Uptown – West Village",
  fullName: "18|8 Fine Men's Salon Uptown – West Village",
  address: {
    street: "3699 McKinney Ave",
    suite: "Suite 402",
    city: "Dallas",
    state: "TX",
    zip: "75204",
    mapsUrl: "https://www.google.com/maps/place/18%2F8+Fine+Men's+Salons+-+Dallas/@32.809337,-96.796878,20z/data=!4m6!3m5!1s0x864e9ed410184a6f:0x374c19c2117e17e8!8m2!3d32.809337!4d-96.796878",
  },
  phone: "2143052079",
  phoneFormatted: "(214) 305-2079",
  hours: [
    { label: "Mon – Fri", time: "10:00 AM – 8:00 PM" },
    { label: "Saturday",  time: "9:00 AM – 7:00 PM" },
    { label: "Sunday",    time: "10:00 AM – 6:00 PM" },
  ],
  booking: {
    url: "https://www.phorest.com/salon/eighteeneightfinemenssalons",
  },
  social: {
    // TODO: Add Instagram, Facebook, Yelp URLs for WV location
    facebook: "https://www.facebook.com/PLACEHOLDER",
    instagram: "https://www.instagram.com/PLACEHOLDER",
    yelp: "https://www.yelp.com/biz/PLACEHOLDER",
  },
  seo: {
    title: "18|8 Fine Men's Salon Uptown – West Village | Dallas, TX",
    description:
      "A classic barbershop for the modern gentleman in Dallas, TX. Expert haircuts, straight-razor shaves, hair coloring, facials & more at 18|8 Uptown – West Village.",
  },
};

export default site;
