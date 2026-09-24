import { Suspense } from "react";
import "../styles/index.scss";
import { useTheme } from "../../shared/hooks/useTheme";
import { AppRouter } from "../providers/router/AppRouter";

export function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>{"Loading..."}</div>}>
        <header>
          <button onClick={changeTheme}>Theme</button>
        </header>
        <AppRouter />
      </Suspense>
    </div>
  );
}
