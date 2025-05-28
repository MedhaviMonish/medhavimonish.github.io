/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  output: isExport ? 'export' : undefined,
  basePath: isExport ? "/medhavimonish.github.io" : "",
  assetPrefix: isExport ? "/medhavimonish.github.io/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
