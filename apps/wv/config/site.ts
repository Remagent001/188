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
    mapsUrl: "https://maps.google.com/?q=3699+McKinney+Ave+Suite+402+Dallas+TX+75204",
  },
  phone: "2143052079",
  phoneFormatted: "(214) 305-2079",
  hours: [
    { label: "Mon – Fri", time: "10:00 AM – 8:00 PM" },
    { label: "Saturday",  time: "9:00 AM – 7:00 PM" },
    { label: "Sunday",    time: "10:00 AM – 6:00 PM" },
  ],
  booking: {
    // TODO: Replace with Phorest booking URL from developer
    url: "https://PLACEHOLDER-wv.phorest.com",
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
