import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the Sanity client
export const client = createClient({
  projectId: "ugt3hcsc", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-01-01", // Add a specific API version
  useCdn: true, // Use the CDN for faster responses
});

// Initialize the image builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source) => builder.image(source);


