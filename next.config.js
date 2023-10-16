/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'digitalassets.tesla.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
