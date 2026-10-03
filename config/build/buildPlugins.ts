import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildPaths } from "./types";

export function buildPlugins(
  buildPaths: BuildPaths,
  isDev: boolean,
): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];
}
