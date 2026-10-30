import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel runs full Next.js (API routes enabled).
  // For Network Solutions static FTP builds, use: OUTPUT_EXPORT=1 npm run build
  ...(process.env.OUTPUT_EXPORT === "1" ? { output: "export" as const } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
