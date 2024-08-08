/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "specials-images.forbesimg.com",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
