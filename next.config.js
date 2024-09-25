/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        tls: false,
        net: false,
        child_process: false,
      };
    }

    return config;
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ["localhost","127.0.0.1", 'api.mydopaclass.com', 'panel.mydopaclass.com'],
  },
  publicRuntimeConfig: {
    strapiUrl: "http://127.0.0.1:1337",
  },
};

module.exports = nextConfig;
