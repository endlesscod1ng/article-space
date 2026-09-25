import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";
import s from "./AppLink.module.scss";

type AppLinkColorType = "primary" | "secondary";

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  colorType?: AppLinkColorType;
  className?: string;
}

export const AppLink = ({
  children,
  colorType = "secondary",
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      {...otherProps}
      className={[s.appLink, s[colorType], className].filter(Boolean).join(" ")}
    >
      {children}
    </Link>
  );
};
