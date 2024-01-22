/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['@tauri-apps/api', '@tanstack/react-query'],
};

module.exports = nextConfig;
