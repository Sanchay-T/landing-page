/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.magicui.design',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Exclude blog-template-main from compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/blog-template-main/**'],
    };
    return config;
  },
  // Exclude blog-template-main from TypeScript compilation
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
