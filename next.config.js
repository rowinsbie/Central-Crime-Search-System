/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ws-public.interpol.int']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
