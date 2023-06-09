import { SingleValue } from "react-select";
import { Statuses, Switchers } from "src/enums";
import { SwitchersType } from "src/utils";
import { Direction } from "./directions";

export interface Field {
  data?: Direction[];
  title: string;
  value: Direction | null;
  status: Statuses;
  switchers: SwitchersType;
  category: Switchers;
  setCategory: (value: Switchers) => void;
  onChange: (value: SingleValue<Direction>) => void;
}

export type FieldProps = {
  [key in string]: Field;
};
