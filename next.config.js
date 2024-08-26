/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ["localhost"],
  },
  publicRuntimeConfig: {
    strapiUrl: "http://localhost:1337",
  },
  fallback: {
    fs: false,
    tls: false,
    net: false,
    child_process: false,
  },
};

module.exports = nextConfig;
