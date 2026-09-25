import { ReactNode } from "react";
import s from "./Navbar.module.scss";
import { routesConfig } from "@/shared/config/routeConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
  children?: ReactNode;
  className?: string;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <>
      {children}
      <nav className={[s.navbar, className].filter(Boolean).join(" ")}>
        {routesConfig.map((r) => (
          <AppLink to={r.path}>{r.name}</AppLink>
        ))}
      </nav>
    </>
  );
};
