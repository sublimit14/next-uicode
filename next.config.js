/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [`${process.env.IMG_HOST}`],
  },
}

module.exports = nextConfig;
