import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const scssLoader = {
    test: /\.(sc|sa|c)ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            namedExport: false,
            exportLocalsConvention: "as-is",
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      ,
      "sass-loader",
    ],
  };
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|git|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  return [tsLoader, scssLoader, svgLoader];
}
