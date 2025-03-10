/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const path = require('path');

const { withSentryConfig } = require('@sentry/nextjs');


const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@abis': path.resolve(__dirname, './src/abis'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@atoms': path.resolve(__dirname, './src/atoms'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@twabDelegator': path.resolve(__dirname, './src/views/TwabDelegator'),
      '@twabRewards': path.resolve(__dirname, './src/views/TwabRewards'),
    };
    return config
  }
}

module.exports = withSentryConfig(withBundleAnalyzer(nextConfig), sentryWebpackPluginOptions);
