import { ReactNode } from "react";
import s from "./Navbar.module.scss";

interface NavbarProps {
  children?: ReactNode;
  className?: string;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <header className={[s.navbar, className].filter(Boolean).join(" ")}>
      {children}
    </header>
  );
};
