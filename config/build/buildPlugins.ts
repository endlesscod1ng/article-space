import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildPaths } from "./types";

export function buildPlugins(buildPaths: BuildPaths): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
  ];
}
