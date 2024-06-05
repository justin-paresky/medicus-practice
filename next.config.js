/** @returns {Promise<import('next').NextConfig>} */
module.exports = () => {
  return {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
};
