/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // Modern formats with fallbacks
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // External images configuration for fakestore API
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Additional optimizations
  experimental: {
    // Enable faster builds and smaller bundles
    optimizePackageImports: ["lucide-react"],
  },
};

module.exports = nextConfig;
