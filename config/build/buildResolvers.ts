import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types";

export function buildResolvers(buildPaths: BuildPaths): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    alias: {
      "@": buildPaths.src,
    },
  };
}
