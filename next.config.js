// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching,
//   disable: process.env.NODE_ENV === "development",
// });

// const nextConfig = withPWA({
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "drive.google.com",
//       },
//     ],
//   },
// });
// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig