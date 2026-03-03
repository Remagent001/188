export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  yelp?: string;
}

export interface Hours {
  label: string;
  time: string;
}

export interface SiteConfig {
  locationName: string;       // e.g. "Uptown – West Village"
  fullName: string;           // e.g. "18|8 Fine Men's Salon Uptown – West Village"
  address: {
    street: string;
    suite?: string;
    city: string;
    state: string;
    zip: string;
    mapsUrl: string;
  };
  phone: string;
  phoneFormatted: string;
  hours: Hours[];
  booking: {
    url: string;              // Phorest booking URL — placeholder until dev provides it
    iosApp?: string;
    androidApp?: string;
  };
  social: SocialLinks;
  seo: {
    title: string;
    description: string;
  };
}
