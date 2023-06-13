import { Sources, Switchers } from "src/enums";
import type { FieldProps } from "src/types";
import cls from "./switcher.module.scss";
import cn from "classnames";

interface Props {
  obj: FieldProps;
  source: Sources;
  title: string;
  key: Switchers;
  currentCategory: Switchers;
}

export const HomeSwitcherItem = ({
  title,
  obj,
  source,
  currentCategory,
}: Props) => {
  const onChange = () => {
    obj[source].setCategory(currentCategory);
  };

  const active = currentCategory === obj[source].category && cls.active;

  return (
    <div onClick={onChange} className={cn(cls.item, active)}>
      <p>{title}</p>
    </div>
  );
};
