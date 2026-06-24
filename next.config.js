/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.ytimg.com', 'wikipedia.org'],
    unoptimized: true, // Ideal for simple exports or Vercel static exports if desired
  },
};

module.exports = nextConfig;
