import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

const BASE_URL = "https://balispanature.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/private-label`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wholesale`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic product pages from Sanity
  let productRoutes: MetadataRoute.Sitemap = [];
  try {
    const slugs: string[] = await client.fetch(
      `*[_type=="product" && defined(slug.current)].slug.current`
    );

    productRoutes = (slugs || []).map((slug) => ({
      url: `${BASE_URL}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (err) {
    // If Sanity is down during build, the sitemap still renders static routes.
    console.error("Sitemap product fetch failed:", err);
  }

  return [...staticRoutes, ...productRoutes];
}
