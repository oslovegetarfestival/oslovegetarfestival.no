/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  async redirects() {
    return [
      {
        source: "/omoss",
        destination: "/om-oss",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
