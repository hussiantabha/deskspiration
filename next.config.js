/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "external-preview.redd.it",
      "pbs.twimg.com",
      "i.ytimg.com",
      "preview.redd.it",
      "rdl.ink",
    ],
  },
};

module.exports = nextConfig;
