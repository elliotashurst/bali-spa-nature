import { groq } from "next-sanity";
import { client } from "./sanity";

// 🧴 Fetch all products
export async function getProducts() {
  return await client.fetch(
    groq`*[_type == "product"]{
      _id,
      name,
      slug,
      description,
      "imageUrl": image.asset->url,
      price
    } | order(_createdAt desc)`
  );
}

// 🧴 Fetch single product by slug
export async function getProduct(slug) {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      description,
      "imageUrl": image.asset->url,
      price
    }`,
    { slug }
  );
}
