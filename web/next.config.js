/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  experimental: {
    scrollRestoration: true,
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
      {
        source: "/nyhetsbrev",
        destination:
          "https://etiv-zcmp.maillist-manage.eu/ua/Optin?od=12ba7e11d358&zx=14ac23b5bd&tD=171b28f16c47a06&sD=171b28f16c4884d",
        permanent: false,
        basePath: false,
      },
    ]
  },
}

module.exports = nextConfig
