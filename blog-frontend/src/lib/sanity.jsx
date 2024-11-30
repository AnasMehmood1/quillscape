import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the Sanity client
const client = createClient({
  projectId: "ugt3hcsc", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-01-01", // Add a specific API version
  useCdn: true, // Use the CDN for faster responses
});

// Initialize the image builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source) => builder.image(source);

export default client;

// Fetch all blog posts
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "author": author->name,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      publishedAt,
    }
  `);
}

// Fetch a single blog post by slug
export async function getBlogPost(slug) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      "author": author->name,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      publishedAt,
    }
  `,
    { slug }
  );
}
