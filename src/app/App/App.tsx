import { Suspense } from "react";
import "../styles/index.scss";
import { useTheme } from "@/shared/hooks/useTheme";
import { AppRouter } from "../providers/router/AppRouter";

import { Sidebar } from "@/widgets/Sidebar";
import ThemeIcon from "@/shared/assets/theme.svg";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

export function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>{"Loading..."}</div>}>
        <header></header>
        <main>
          <Sidebar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}
