import { Suspense, useEffect } from "react";
import { AppRouter } from "../providers/router/AppRouter";
import { Sidebar } from "@/widgets/Sidebar";
import { useTheme } from "@/shared/hooks/useTheme";
import "../styles/index.scss";
import { PageLoader } from "@/widgets/PageLoader";

export function App() {
  const { theme } = useTheme();
  // useEffect(() => {
  //   if (true) {
  //     throw new Error();
  //   }
  // }, []);
  // 10:07
  return (
    <div className={`app ${theme}`}>
      <header></header>
      <main>
        <Sidebar />
        <Suspense fallback={<PageLoader />}>
          <AppRouter />
        </Suspense>
      </main>
    </div>
  );
}
