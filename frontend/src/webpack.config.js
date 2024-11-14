import path from "path";

module.exports = {
  entry: "./src/index.js", // точка входа
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Алиас для папки src
    },
    extensions: [".js", ".jsx", ".scss", ".css"], // Разрешаемые расширения файлов
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // Лоадеры для CSS и SASS
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Лоадеры для шрифтов
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
