/** @type {import('next').NextConfig} */

const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin/dist/index');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });
    // config.plugins.push(
    //   new MiniCssExtractPlugin({
    //     // Options similar to the same options in webpackOptions.output
    //     // both options are optional
    //     filename: 'static/chunks/pages/[contenthash].css',
    //     chunkFilename: 'static/chunks/pages/[contenthash].css',
    //   })
    // );

    // config.module.rules.push({
    //   test: /\.(sa|sc|c)ss$/i,
    //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    // });
    return config;
  },
};

module.exports = nextConfig;
