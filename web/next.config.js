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
      {
        source: "/info-til-utstillere",
        destination: "/bli-utstiller",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
