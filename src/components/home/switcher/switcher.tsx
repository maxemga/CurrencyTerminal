import cn from "classnames";
import { Sources, Switchers } from "src/enums";
import { FieldProps } from "src/types";
import { HomeSwitcherItem } from "./item";
import cls from "./switcher.module.scss";

interface Props {
  obj: FieldProps;
  source: Sources;
}

export const HomeSwitcher = ({ obj, source }: Props) => {
  return (
    <div className={cn(cls.switcher)}>
      {Object.entries(obj[source].switchers).map(([key, { title }]) => (
        <HomeSwitcherItem
          source={source}
          title={title}
          key={key as Switchers}
          currentCategory={key as Switchers}
          obj={obj}
        />
      ))}
    </div>
  );
};
