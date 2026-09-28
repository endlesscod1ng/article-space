import { useState } from "react";
import s from "./Sidebar.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

import { Nav } from "@/widgets/Nav";
import ThemeIcon from "@/shared/assets/theme.svg";
import { useTheme } from "@/shared/hooks/useTheme";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { theme, changeTheme } = useTheme();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { t, i18n } = useTranslation();
  return (
    <div
      className={[s.sidebar, collapsed && s.collapsed, className]
        .filter(Boolean)
        .join(" ")}
    >
      <Nav />

      <AppButton onClick={() => setCollapsed((prev) => !prev)}>
        {collapsed ? ">" : "<"}
      </AppButton>

      <div className={`${s.switchewrs}`}>
        <AppButton onClick={changeTheme}>
          <ThemeIcon fill={theme === "dark" ? "#000" : "#fff"} />
        </AppButton>
        <AppButton
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
          }
          colorType="secondary"
        >
          {collapsed ? t("Lang") : t("Language")}
        </AppButton>
      </div>
    </div>
  );
};
