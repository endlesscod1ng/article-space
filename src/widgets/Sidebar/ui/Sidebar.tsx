import { useState } from "react";
import s from "./Sidebar.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

import { Nav } from "@/widgets/Nav";
import ThemeIcon from "@/shared/assets/theme.svg";
import { useTheme } from "@/shared/hooks/useTheme";
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { theme, changeTheme } = useTheme();
  const [collapsed, setCollapsed] = useState<boolean>(true);
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

      <AppButton onClick={changeTheme}>
        <ThemeIcon fill={theme === "dark" ? "#000" : "#fff"} />
      </AppButton>
    </div>
  );
};
