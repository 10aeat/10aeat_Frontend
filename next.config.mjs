/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    // dev 모드에서만 소스 맵 사용
    if (dev) {
      config.devtool = 'eval-source-map'
    }
    return config
  },
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
}

export default nextConfig
