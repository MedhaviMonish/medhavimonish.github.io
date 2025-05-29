/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  output: isExport ? 'export' : undefined,
  basePath: isExport ? "" : "",
  assetPrefix: isExport ? "" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
