/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    // dev 모드에서만 소스 맵 사용
    if (dev) {
      config.devtool = 'eval-source-map'
    }
    return config
  },
}

export default nextConfig
