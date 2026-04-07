import { client } from "./sanity";

export async function getAllProducts() {
  return await client.fetch(`
    *[_type == "product"]{
      _id,
      name,
      price,
      description,
      "imageUrl": image.asset->url,
      "slug": slug.current
    } | order(_createdAt desc)
  `);
}

export async function getProductBySlug(slug) {
  return await client.fetch(`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      price,
      description,
      "imageUrl": image.asset->url,
      "slug": slug.current
    }
  `, { slug });
}
