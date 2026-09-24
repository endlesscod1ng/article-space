import { createContext } from "react";
import { Theme } from "./ThemeProvider";

interface ThemeContextValue {
  theme?: Theme;
  changeTheme?: () => void;
}
export const ThemeContext = createContext<ThemeContextValue>({});
