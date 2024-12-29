const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.ASSET_PREFIX || "",
  output: 'export',
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/socket.io',
        destination: 'https://socket-io-3i32.onrender.com/socket.io',
      },
    ]
  },
};
module.exports = nextConfig;
