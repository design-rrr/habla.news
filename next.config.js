/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const isStaticExport = process.env.STATIC_EXPORT === "true";
const path = require("path");
const emptyModule = path.resolve("./src/empty-module.js");

const withPWA = isStaticExport
  ? (config) => config
  : require("next-pwa")({
      dest: "public",
      skipWaiting: true,
      register: isProduction,
      disable: !isProduction,
    });

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["@void-cat/api"],
};

if (isStaticExport) {
  nextConfig.output = "export";
  nextConfig.basePath = "/habla.news";
  nextConfig.assetPrefix = "/habla.news/";
  nextConfig.images = { unoptimized: true };
} else {
  nextConfig.i18n = {
    defaultLocale: "en",
    locales: [
      "en",
      "es",
      "ja",
      "de",
      "ru",
      "uk",
      "fa",
      "it",
      "zh",
      "eo",
      "sw",
      "he",
    ],
  };
  nextConfig.headers = async () => [
    {
      source: "/.well-known/nostr.json",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    },
  ];
  nextConfig.rewrites = async () => [
    {
      source: "/.well-known/nostr.json",
      destination: "/api/nostr",
    },
  ];
}

module.exports = withPWA(nextConfig);
