export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/commerce' : '',
  assetPrefix: isProd ? '/commerce/' : '',
  images: { unoptimized: true },
  output: 'export', // Ensures Next.js does static export
};
