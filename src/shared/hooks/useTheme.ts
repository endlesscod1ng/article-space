import { useContext } from "react";
import { ThemeContext } from "../../app/providers/ThemeProvider/ThemeContext";
// import { Theme } from "../../app/providers/Theme/ThemeProvider";

// interface UseThemeResult {
//   theme: Theme;
//   changeTheme: () => void;
// }
export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return { theme, changeTheme };
};
