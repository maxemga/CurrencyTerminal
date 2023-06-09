import cls from "./theme-toggler.module.scss";
import cn from "classnames";
import { useTheme } from "src/context";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className={cn(cls.theme_toggler)}>
      {theme?.toUpperCase()}
    </div>
  );
};
