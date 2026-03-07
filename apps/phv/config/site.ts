import type { SiteConfig } from "@repo/ui/types/site";

const site: SiteConfig = {
  locationName: "Preston Hollow Village – Dallas",
  fullName: "18|8 Fine Men's Salon Preston Hollow Village",
  address: {
    street: "7949 Walnut Hill Lane",
    suite: "Suite 125",
    city: "Dallas",
    state: "TX",
    zip: "75230",
    mapsUrl: "https://www.google.com/maps/place/18%2F8+Fine+Men's+Salons+-+Preston+Hollow+Village/@32.8812492,-96.7727938,18.75z/data=!4m15!1m8!3m7!1s0x864e9fc25e7e722f:0xd8e42af220886ac0!2s7949+Walnut+Hill+Ln,+Dallas,+TX+75230!3b1!8m2!3d32.8813252!4d-96.7723675!16s%2Fg%2F11b8yg36m_!3m5!1s0x864e9fc25838d3e1:0x24434360a57ca049!8m2!3d32.8813427!4d-96.7721315!16s%2Fg%2F11bv6pg4w7?entry=ttu",
    appleMapsUrl: "https://maps.apple.com/?place=~f5KqddvtdrXPe",
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
