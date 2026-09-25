import { Suspense } from "react";
import "../styles/index.scss";
import { useTheme } from "@/shared/hooks/useTheme";
import { AppRouter } from "../providers/router/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

export function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>{"Loading..."}</div>}>
        <header>
          <Navbar>
            <button onClick={changeTheme}>Theme</button>
          </Navbar>
        </header>
        <main>
          {/* <Sidebar /> */}
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}
