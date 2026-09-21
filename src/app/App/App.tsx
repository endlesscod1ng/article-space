import { Routes, Route } from "react-router";
import { HomePage } from "../../pages/HomePage";
import { ArticlesPage } from "../../pages/ArticlesPage";
import { Suspense } from "react";
import "../styles/index.scss";
import { useTheme } from "../../shared/hooks/useTheme";

export function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>{"Loading..."}</div>}>
        <header>
          <button onClick={changeTheme}>Theme</button>
        </header>
        <Routes>
          <Route
            path={"/"}
            element={<HomePage />}
          />
          <Route
            path={"/articles"}
            element={<ArticlesPage />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}
