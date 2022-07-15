/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "/my-website",
  assetPrefix: "/my-website",
  images: {
    loader: "akamai",
    path: "my-website/assets/temp"
  }
};

module.exports = nextConfig;
