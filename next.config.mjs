/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Content is read from the filesystem at build time (lib/content.ts); no remote images.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
