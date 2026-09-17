import path from "path";

import { Configuration } from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

const mode = "development";
const isDev = mode === "development";
const buildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico"),
};

const config: Configuration = buildWebpackConfig({ mode, buildPaths, isDev });

export default config;
