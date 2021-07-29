const path = require("path");
const MODE = "development";
const enabledSourceMap = MODE === "development";
module.exports = {
  mode: MODE,
  entry: ["./src/js/main.js", "./src/css/style.scss", "./src/css/form.scss"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "docs/js"),
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  target: ["web", "es5"],
};
