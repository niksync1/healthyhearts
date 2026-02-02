/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Disable built-in image optimization on hosts that don't support
    // the Next.js image optimization API (some managed hosts).
    // This makes `<Image />` serve the source directly.
    unoptimized: true,
    domains: [],
  },
}

module.exports = nextConfig
