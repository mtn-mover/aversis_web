/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment - remove static export config
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig