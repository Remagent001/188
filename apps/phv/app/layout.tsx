import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import site from "../config/site";

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header site={site} />
        <main className="pt-[88px]">{children}</main>
        <Footer site={site} />
      </body>
    </html>
  );
}
