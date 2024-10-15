/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["picsum.photos"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
