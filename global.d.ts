declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}
declare module "*.module.sass" {
  const classes: Record<string, string>;
  export default classes;
}
declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.scss";
declare module "*.sass";
declare module "*.css";

declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff";
declare module "*.woff2";

declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
