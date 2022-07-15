/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "/my-website",
  images: {
    loader: "akamai",
    path: ""
  }
};

module.exports = nextConfig;
