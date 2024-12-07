import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add Sanity's CDN domain for `next/image`
    domains: ["cdn.sanity.io"],
  },
  // You can add other Next.js configuration options here
};

export default nextConfig;
