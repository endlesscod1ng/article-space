import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import { buildPlugins } from "./buildPlugins";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig({
  mode,
  buildPaths,
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
      rules: buildRules(),
    },
    resolve: buildResolvers(),
  };
}
