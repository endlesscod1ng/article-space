import { ReactNode, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export type Theme = "dark" | "light";
const LOCAL_STOIRAGE_THEME_KEY = "theme";
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STOIRAGE_THEME_KEY) as Theme) || "dark",
  );
  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case "dark":
        newTheme = "light";
        break;
      case "light":
        newTheme = "dark";
        break;
      default:
        newTheme = "dark";
        break;
    }
    localStorage.setItem(LOCAL_STOIRAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };
  
  const defaultProps = useMemo(
    () => ({
      theme,
      changeTheme: toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};
