import { Routes, Route } from "react-router";
import { HomePage } from "../../pages/HomePage";
import { ArticlesPage } from "../../pages/ArticlesPage";
import { Suspense, useState } from "react";
import "../styles/index.scss";

export function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>{"Loading..."}</div>}>
        <header>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Theme
          </button>
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
