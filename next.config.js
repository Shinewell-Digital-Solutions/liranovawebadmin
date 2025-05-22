/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // Updated API endpoints
    URL: "https://liranovawebapi.shinewell.in/api/admin",
    storageURL: "https://liranovawebapi.shinewell.in",
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liranovawebapi.shinewell.in",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "liranovawebapi.shinewell.in",
      },
      // {
      //   protocol: "http",
      //   hostname: "laravel.pixelstrap.net/fastkart",
      // },
      // {
      //   protocol: "https",
      //   hostname: "laravel.pixelstrap.net/fastkart",
      // },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
