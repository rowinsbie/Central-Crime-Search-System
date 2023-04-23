/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ws-public.interpol.int','www.fbi.gov']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
