import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the Sanity client using environment variables
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true",
});

// Initialize the image builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source) => builder.image(source);
console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
