/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [new URL('https://img.youtube.com/vi/**')]
  },
};

export default nextConfig;
