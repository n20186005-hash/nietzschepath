/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 output: 'export' 让 Vercel 原生接管 Next.js 的部署，这能解决 404 和路由问题
  // images: { unoptimized: true } 也可移除，享受 Vercel 的图片优化
};

module.exports = nextConfig;