import { Suspense } from "react";
import "../styles/index.scss";
import { useTheme } from "../../shared/hooks/useTheme";
import { AppRouter } from "../providers/router/AppRouter";
import { Navbar } from "../../widgets/Navbar";

export function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>{"Loading..."}</div>}>
        <Navbar>
          <button onClick={changeTheme}>Theme</button>
        </Navbar>
        <AppRouter />
      </Suspense>
    </div>
  );
}
