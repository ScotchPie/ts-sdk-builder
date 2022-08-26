const { resolve, PROJECT_PATH } = require("./constants");
const WebpackBar = require("webpackbar");

module.exports = {
  entry: {
    index: resolve(PROJECT_PATH, "./src/index.ts"),
  },
  output: {
    filename: "ts-sdk-builder.js",
    library: "tsSdkBuilder",
    libraryTarget: "umd",
    libraryExport: "default",
    path: resolve(PROJECT_PATH, "./dist"),
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      "@docs": resolve(__dirname, "../docs"),
      "@public": resolve(__dirname, "../public"),
      "@test": resolve(__dirname, "../test"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new WebpackBar({
      name: "Building...",
      color: "#f29100",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
