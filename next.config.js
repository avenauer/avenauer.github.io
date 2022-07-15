/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  basePath: "/my-website",
  assetPrefix: isProd ? 'https://avenauer.github.io' : '',
  images: {
    loader: "akamai",
    path: ""
  }
};

module.exports = nextConfig;
