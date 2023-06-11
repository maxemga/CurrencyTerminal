import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Theme } from "src/enums";

interface Props {
  children: ReactNode;
}

interface Values {
  theme?: Theme;
  toggleTheme?: () => void;
}

export const ThemeContext = createContext<Values>({});

const defaultTheme = (localStorage.getItem("theme") as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
