// module.exports = {
//   reactStrictMode: true,
// }
const withImages = require("next-images");

module.exports = withImages({
  images: {
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    disableStaticImages: true,
    domains: ['storage.googleapis.com', 'firebasestorage.googleapis.com', 'localhost', '127.0.0.1'],
  },
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
    });
    return config;
}
});
