import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "u8s15rc8",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

// safe homepage fetcher
export async function getSanityHome() {
  try {
    const data = await client.fetch(`
      *[_type == "homepage"][0]{
        heroTitle,
        heroSubtitle,
        "heroPlant": heroPlantImage.asset->url,
        heroCtaPrimary { label, href },
        heroCtaSecondary { label, href },
        usp[] { title, text, "iconUrl": icon.asset->url }
      }
    `);
    return data || null;
  } catch (err) {
    console.error("getSanityHome error", err);
    return null;
  }
}
