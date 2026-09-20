import { Routes, Route } from "react-router";
import s from "./App.module.scss";
import { HomePage } from "../../pages/HomePage";
import { ArticlesPage } from "../../pages/ArticlesPage";

export function App() {
  return (
    <div className={s.app}>
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
    </div>
  );
}
