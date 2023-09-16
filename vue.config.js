const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  // pages: {
  //   entry: "src/main.js",
  //   template: "public/index.html",
  //   filename: "index.html",
  // },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@": path.resolve(__dirname, "./"),
      },
    },
  },
});
