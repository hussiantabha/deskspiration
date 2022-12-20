/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "external-preview.redd.it",
      "pbs.twimg.com",
      "i.ytimg.com",
      "preview.redd.it",
    ],
  },
};

module.exports = nextConfig;
