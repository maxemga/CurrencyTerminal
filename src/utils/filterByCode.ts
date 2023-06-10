import { Switchers } from "src/enums";
import { Direction } from "src/types";
import { filterSwitchers } from "./constants";

export const filterByCode = (arr: Direction[], category: Switchers) =>
  arr.filter((el) =>
    filterSwitchers[category].values.length !== 0
      ? filterSwitchers[category].values.includes(el.code)
      : el
  );
