/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/_next/static" : "",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
