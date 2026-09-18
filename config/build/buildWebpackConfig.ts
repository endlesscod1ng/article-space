import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig({
  mode,
  buildPaths,
  port,
  isDev,
}: BuildOptions): Configuration {
  return {
    mode,
    entry: buildPaths.entry,
    output: {
      path: buildPaths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(buildPaths),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(port) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
}
