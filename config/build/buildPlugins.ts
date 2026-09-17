import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuilPaths } from "./types";

export function buildPlugins(buildPaths: BuilPaths): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
    }),
    new ProgressPlugin(),
  ];
}
