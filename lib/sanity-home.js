// lib/sanity-home.js
import { client } from "./sanity";

/**
 * Small home-fetch helper — keeps your existing san ity client file untouched.
 * Returns first document of type 'home' with title/subtitle and hero image.
 */
export async function getSanityHome() {
  const query = `*[_type == "home"][0]{
    title,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    "plantImage": plantImage.asset->url
  }`;
  return client.fetch(query);
}
