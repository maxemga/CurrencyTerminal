import { HomeReceiver } from "./home-receiver";
import { ThemeToggler } from "../theme-toggler";
import { Sources } from "src/enums";
import cls from "./home.module.scss";
import cn from "classnames";

export const HomeComponent = () => {
  return (
    <div className={cn(cls.home_card)}>
      <HomeReceiver source={Sources.DIRECTION} />
      <HomeReceiver source={Sources.FILTER} />
      <ThemeToggler />
    </div>
  );
};
