import s from "./Nav.module.scss";
import { routesConfig } from "@/shared/config/routeConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  return (
    <>
      <nav className={[s.nav, className].filter(Boolean).join(" ")}>
        {routesConfig.map((r) => (
          <AppLink to={r.path}>{r.name}</AppLink>
        ))}
      </nav>
    </>
  );
};
