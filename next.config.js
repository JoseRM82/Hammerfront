/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

module.exports = {
  env: {
    BASE_URL: 'https://hammer-backend.onrender.com/api/',
  }
}