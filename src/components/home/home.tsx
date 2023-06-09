import cls from "./home.module.scss";
import cn from "classnames";
import { HomeReceiver } from "./home-receiver";
import { Sources } from "src/enums";

export const HomeComponent = () => {
  return (
    <div className={cn(cls.home_card)}>
      <HomeReceiver source={Sources.DIRECTION} />
      <HomeReceiver source={Sources.FILTER} />
    </div>
  );
};
