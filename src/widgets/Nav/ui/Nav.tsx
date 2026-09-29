import s from "./Nav.module.scss";
import { routesConfig } from "@/shared/configs/routeConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  const { t} = useTranslation();

  return (
    <>
      <nav className={[s.nav, className].filter(Boolean).join(" ")}>
        {routesConfig.map((r) => (
          <AppLink
            key={r.path + r.name}
            to={r.path}
          >
            {t(`${r.name}`)}
          </AppLink>
        ))}
      </nav>
    </>
  );
};
