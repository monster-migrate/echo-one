/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http'
        hostname: 'img.clerk.com', 
      },
    ],
  },
}

export default nextConfig
