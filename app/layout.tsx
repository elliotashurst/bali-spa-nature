import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RightRail from "@/components/RightRail";
import PageTransition from "@/components/PageTransition";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balispanature.com"),

  title: {
    default: "Bali Spa Nature | Spa & Hospitality Product Manufacturing in Indonesia",
    template: "%s | Bali Spa Nature",
  },

  description:
    "Bali Spa Nature manufactures spa and personal care products in Indonesia for hospitality and wellness operators. Private label manufacturing and wholesale supply structured for consistency, compliance, and long-term partnerships.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://balispanature.com",
    siteName: "Bali Spa Nature",
    title:
      "Bali Spa Nature | Spa & Hospitality Product Manufacturing in Indonesia",
    description:
      "Manufacturing spa and personal care products in Indonesia for hotels, resorts, and wellness operators. Private label and wholesale supply structured for repeatability and long-term partnerships.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bali Spa Nature – Manufacturing spa and hospitality products in Indonesia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bali Spa Nature | Spa & Hospitality Product Manufacturing in Indonesia",
    description:
      "Private label manufacturing and wholesale supply of spa and personal care products in Indonesia for hospitality and wellness businesses.",
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
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      style={{ overflowY: "scroll", overflowX: "hidden" }}
    >
      <body
        style={{ overflowY: "scroll", overflowX: "hidden" }}
        className="bg-[var(--page-bg)] text-[var(--foreground)] antialiased"
      >
        <Navbar />
        <RightRail />

        <main
          id="page-container"
          className="relative w-full overflow-x-hidden bg-[var(--page-bg)]"
        >
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
      </body>
    </html>
  );
}