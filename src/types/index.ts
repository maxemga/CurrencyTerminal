import { ChangeEvent } from "react";
import { Statuses, Switchers } from "src/enums";

export interface Field {
  data?: Direction[];
  title: string;
  value: Direction | null;
  status: Statuses;
  category: Switchers;
  setCategory: (value: Switchers) => void;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export type FieldProps = {
  [key in string]: Field;
};

export interface Direction {
  code: string;
  name: string;
}

export interface Filter {
  from: Direction;
  to: Direction[];
}
