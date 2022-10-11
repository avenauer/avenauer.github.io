/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    assetPrefix: isProd ? "https://marcinbieszka.com" : undefined
  }
};

module.exports = nextConfig;
