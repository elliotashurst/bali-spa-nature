export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bali Spa Nature",
          url: "https://www.balispanature.com",
          logo: "https://www.balispanature.com/logo.png",
          sameAs: [
            "https://www.instagram.com/balispanature",
            "https://www.linkedin.com/company/balispanature"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Sales",
            email: "info@balispanature.com"
          }
        })
      }}
    />
  );
}

export function ProductSchema({ product }) {
  if (!product) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.imageUrl,
          brand: {
            "@type": "Brand",
            name: "Bali Spa Nature"
          }
        })
      }}
    />
  );
}

export function ReviewSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "120"
        })
      }}
    />
  );
}
