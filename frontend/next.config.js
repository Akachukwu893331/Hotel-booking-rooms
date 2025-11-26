const nextConfig = {
  reactStrictMode: true,

   eslint: {
    // Warning: Disables ESLint during builds
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_BASE_URL: process.env.API_BASE_URL
  }
};

module.exports = nextConfig;
