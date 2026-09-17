export type BuildMode = "development" | "production";

export interface BuilPaths {
  entry: string;
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
  buildPaths: BuilPaths;
  isDev: boolean;
  port: number;
}
