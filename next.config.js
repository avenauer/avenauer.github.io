/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/my-website",
  assetPrefix: "/my-website",
  imagesPublicPath: '/my-website/_next/static/images/',
  images: {
    loader: "akamai",
    path: ""
  }
};

module.exports = nextConfig;
