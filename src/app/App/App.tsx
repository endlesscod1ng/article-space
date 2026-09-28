import { Suspense } from "react";
import { AppRouter } from "../providers/router/AppRouter";
import { Sidebar } from "@/widgets/Sidebar";
import { useTheme } from "@/shared/hooks/useTheme";
import "../styles/index.scss";



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
