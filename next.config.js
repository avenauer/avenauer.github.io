/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  basePath: `${isProd ? "/my-website" : ""}`,
  output: "standalone",
  images: {
    loader: "akamai",
    path: ""
  }
};

module.exports = nextConfig;
