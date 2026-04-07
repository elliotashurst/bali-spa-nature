import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import TrustSection from "@/components/TrustSection";

export default function HomePage() {
  return (
    <div className="page-safe">
      <HeroSection
        title={`Naturally Formulated.\nMindfully Manufactured.\nExclusively Yours.`}
        subtitle="Eco-luxury spa and hospitality product manufacturing in Bali."
        ctaPrimary={{ label: "Create Your Brand", href: "/private-label" }}
        ctaSecondary={{ label: "View Products", href: "/products" }}
        plantImage="/hero-rice.jpg"
      />

      {/* subtle transition from dark hero to light sections */}
      <div className="h-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),transparent)]" />

      <USPSection />
      <TrustSection />
    </div>
  );
}
