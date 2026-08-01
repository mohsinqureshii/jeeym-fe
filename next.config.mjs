/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: export plain HTML/CSS/JS to `out/` so it can be
  // served from any static host (Cloudflare Pages/Workers, S3, nginx…).
  output: "export",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
