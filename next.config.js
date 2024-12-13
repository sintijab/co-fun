const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  bbasePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.ASSET_PREFIX || "",
  output: 'export',
  images: { unoptimized: true },
};
module.exports = { nextConfig };
