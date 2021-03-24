const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "babel-loader",
      },
      //   {
      //     test: /\.js$/,
      //     enforce: "pre",
      //     use: ["source-map-loader"],
      //   },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/assets/index.html",
    }),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".json", "ts"],
  },
};
