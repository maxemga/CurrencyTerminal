import cn from "classnames";
import { Sources, Switchers } from "src/enums";
import { FieldProps } from "src/types";
import cls from "./switcher.module.scss";

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