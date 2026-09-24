export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  src: string;
  build: string;
  html: string;
  favicon: string;
}

export interface BuidlEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  buildPaths: BuildPaths;
  isDev: boolean;
  port: number;
}
