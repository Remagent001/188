import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "18|8 Fine Men's Salon Dallas, TX | Find Your Location",
  description:
    "18|8 Fine Men's Salon has two premium locations in Dallas, TX. Visit us at Uptown – West Village or Preston Hollow Village for expert haircuts, shaves, and grooming.",
  openGraph: {
    title: "18|8 Fine Men's Salon Dallas, TX",
    description: "Two premium men's salon locations in Dallas, TX.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
