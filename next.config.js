/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  mode: 'production',
  // disable: process.env.NODE_ENV === 'development',
})


const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
