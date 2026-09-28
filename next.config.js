/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Workers (OpenNext) 部署需要 standalone 产物，
  // OpenNext 会读取 .next/standalone 打包 Worker。
  output: "standalone",
};

module.exports = nextConfig;