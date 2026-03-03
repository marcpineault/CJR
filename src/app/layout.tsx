import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://completejunkremoval.ca"),
  title: {
    default: "Junk Removal Grand Bend ON | Complete Junk Removal & Demolition",
    template: "%s | Complete Junk Removal",
  },
  description:
    "Fast, affordable junk removal in Grand Bend, London, and Lambton Shores Ontario. Same-day service, transparent pricing, free estimates. Call 519-870-9136.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Complete Junk Removal",
  },
  robots: {
    index: true,
    follow: true,
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
