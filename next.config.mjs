/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image1.jdomni.in',
            port: '',
            pathname: '/banner/**',
          },
        ],
      },
};

export default nextConfig;
