import path from "path";

import { Configuration } from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuidlEnv } from "./config/build/types";

export default (env: BuidlEnv): Configuration => {
  const mode = env.mode || "development";
  const PORT = env.port || 3030;

  const isDev = mode === "development";

  const buildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    src: path.resolve(__dirname, "src"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(__dirname, "public", "favicon.ico"),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    buildPaths,
    isDev,
    port: PORT,
  });

  return config;
};
