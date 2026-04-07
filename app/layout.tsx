import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RightRail from "@/components/RightRail";
import PageTransition from "@/components/PageTransition";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://balispanature.com"),

  title: {
    default: "Bali Spa Nature | Premium Spa Product Manufacturer in Bali",
    template: "%s | Bali Spa Nature",
  },

  description:
    "Eco-luxury spa and hospitality product manufacturing in Bali. Private label and wholesale collections with custom formulation, sustainable production, and export-ready support for global B2B brands.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://balispanature.com",
    siteName: "Bali Spa Nature",
    title: "Bali Spa Nature | Premium Spa Product Manufacturer in Bali",
    description:
      "Eco-luxury spa and hospitality product manufacturing in Bali. Private label and wholesale collections with custom formulation, sustainable production, and export-ready support for global B2B brands.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bali Spa Nature – Premium spa product manufacturing in Bali",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bali Spa Nature | Premium Spa Product Manufacturer in Bali",
    description:
      "Eco-luxury spa and hospitality product manufacturing in Bali. Private label and wholesale collections with custom formulation and sustainable production for global B2B brands.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
   <html lang="en" style={{ overflowY: "scroll", overflowX: "hidden" }}>
  <body
    style={{ overflowY: "scroll", overflowX: "hidden" }}
    className="bg-[var(--page-bg)] text-[var(--foreground)] antialiased"
  >

    <Navbar />
    <RightRail /> 


    <main id="page-container" className="relative w-full overflow-x-hidden bg-[var(--page-bg)]">
  <PageTransition>{children}</PageTransition>
</main>


    <Footer />
    
  </body>
</html>

  );
}
