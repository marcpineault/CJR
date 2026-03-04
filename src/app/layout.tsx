import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://completejunkremoval.ca"),
  title: {
    default: "Junk Removal Grand Bend & London ON | Complete Junk Removal & Demolition",
    template: "%s | Complete Junk Removal",
  },
  description:
    "Fast, affordable junk removal and demolition in Grand Bend, London, Lambton Shores & Southwestern Ontario. Same-day service, transparent pricing, free estimates. Fully insured. Call 519-870-9136.",
  keywords: [
    "junk removal Grand Bend",
    "junk removal London Ontario",
    "demolition services Ontario",
    "furniture removal Grand Bend",
    "estate cleanout London ON",
    "yard waste removal",
    "bin rental Lambton Shores",
    "shed demolition Ontario",
    "deck removal London",
    "commercial junk removal",
    "Complete Junk Removal",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Complete Junk Removal",
    images: [
      {
        url: "/images/team-trucks-fleet.jpg",
        width: 1200,
        height: 630,
        alt: "Complete Junk Removal team with fleet of trucks in Southwestern Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Grand Bend & London ON | Complete Junk Removal",
    description:
      "Fast, affordable junk removal and demolition in Grand Bend, London & Southwestern Ontario. Same-day service. Call 519-870-9136.",
    images: ["/images/team-trucks-fleet.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://completejunkremoval.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
