/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A long-lived `next dev` owns `.next`. Setting NEXT_BUILD_DIR lets a
  // verification build run beside it without evicting the dev server's cache:
  //   NEXT_BUILD_DIR=.next-build npm run build
  // Unset (Vercel, plain local builds) it stays the default `.next`.
  distDir: process.env.NEXT_BUILD_DIR || ".next",
  // Every design screenshot comes off `next dev`, and the dev indicator is a
  // fixed badge that lands in the bottom-left of all of them.
  devIndicators: false,
};

export default nextConfig;
