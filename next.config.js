/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.dicebear.com',
            
          },
        ],
      },
    experimental: {
        serverActions: true,
      },
    
}

module.exports = nextConfig
