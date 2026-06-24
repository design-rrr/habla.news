/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const isStaticExport = process.env.STATIC_EXPORT === "true";

const withPWA = isStaticExport
  ? (config) => config
  : require("next-pwa")({
      dest: "public",
      skipWaiting: true,
      register: isProduction,
      disable: !isProduction,
    });

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
};

if (isStaticExport) {
  // GitHub Pages static export
  nextConfig.output = "export";
  nextConfig.basePath = "/habla.news";
  nextConfig.assetPrefix = "/habla.news/";
  nextConfig.images = { unoptimized: true };
  // PWA and i18n routing disabled — not compatible with static export
} else {
  // Normal Vercel/server deployment
  nextConfig.i18n = {
    defaultLocale: "en",
    locales: ["en","es","ja","de","ru","uk","fa","it","zh","eo","sw","he"],
  };
  nextConfig.async headers() {
    return [{ source: "/.well-known/nostr.json", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] }];
  };
  nextConfig.async rewrites() {
    return [{ source: "/.well-known/nostr.json", destination: "/api/nostr" }];
  };
}

module.exports = withPWA(nextConfig);
