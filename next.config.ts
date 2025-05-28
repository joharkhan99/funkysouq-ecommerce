import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // in next.js we need to specificy the hostname of the images urls
  images: {
    remotePatterns: [
      {
        hostname: "cdn.pixabay.com",
      }
    ]
  }
};

export default nextConfig;
