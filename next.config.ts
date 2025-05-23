/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: './', // ✅ critical to fix relative path issues
};

export default nextConfig;
