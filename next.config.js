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
      pathname: "**",
    },
    {
      protocol: "http",
      hostname: "127.0.0.1",
      pathname: "/**",
    },
    {
      protocol: "http",
      hostname: "liranovawebapi.shinewell.in",
      pathname: "**",
    },
  ],
},
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
