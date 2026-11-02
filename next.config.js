/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Workers (OpenNext) 部署需要 standalone 产物，
  // OpenNext 会读取 .next/standalone 打包 Worker。
  output: "standalone",
  // Preserve incoming data and asset paths during canonical-origin redirects.
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig;