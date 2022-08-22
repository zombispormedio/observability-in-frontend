"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Base configuration for the CLI, core, and examples.
 */

module.exports = {
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
