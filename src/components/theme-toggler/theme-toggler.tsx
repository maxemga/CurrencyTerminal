import { useTheme } from "src/context";
import cls from "./theme-toggler.module.scss";
import cn from "classnames";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className={cn(cls.theme_toggler)}>
      {theme?.toUpperCase()}
    </div>
  );
};
