import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const sanity = () => {
  // Initialize the Sanity client
  const client = createClient({
    projectId: "ugt3hcsc", // Replace with your project ID
    dataset: "production", // Replace with your dataset name
    useCdn: true,          // Use the CDN for faster responses
  });

  // Initialize the image builder
  const builder = imageUrlBuilder(client);

  // Function to generate image URLs
  const urlFor = (source) => builder.image(source);

  return { client, urlFor };
};

export default sanity;
