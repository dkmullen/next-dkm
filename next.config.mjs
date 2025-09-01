import createMDX from '@next/mdx';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [new URL('https://img.youtube.com/vi/**')]
      },
      pageExtensions: ['mdx', 'js'],
};

export default withMDX(nextConfig);
