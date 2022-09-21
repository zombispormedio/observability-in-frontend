"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

/**
 * Base configuration for the CLI, core, and examples.
 */

const webpackConfig = {
  mode: "development",
  entry: "./src/index.tsx", // Default for boilerplate generation.
  output: {
    path: path.resolve("dist"),
    filename: "deck.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [require.resolve("file-loader")],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // Default for boilerplate generation.
  plugins: [
    new HtmlWebpackPlugin({
      title: "Observability in frontend: React ❤️ OpenTelemetry",
      template: "./src/index.html",
    }),
  ],
};

if (process.env.NODE_ENV === "production") {
  webpackConfig.plugins.push(
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      navigateFallback: "index.html",
    })
  );
}

module.exports = webpackConfig;
