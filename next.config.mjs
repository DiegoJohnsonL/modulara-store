/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "placehold.co",
                protocol: "https",
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
