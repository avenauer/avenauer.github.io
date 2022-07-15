/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "/my-website",
  images: {
    domains: ["localhost", "avenauer.github.com"],
    loader: "akamai",
    path: `assets/temp`
  }
};

module.exports = nextConfig;
