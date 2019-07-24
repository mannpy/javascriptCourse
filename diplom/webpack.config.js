const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "./src/js")],
        loader: "babel-loader",
        exclude: /(node_modules)/,
      }
    ]
  },
};
