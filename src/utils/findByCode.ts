import { Switchers } from "src/enums";
import type { Direction, Filter } from "src/types";
import { filterSwitchers } from "./constants";

export const findByCode = (
  arr: Filter[],
  direction: Direction | null,
  category: Switchers
) =>
  arr
    .find((el) => el.from.code === direction?.code)
    ?.to.filter((el) =>
      filterSwitchers[category].values.length !== 0
        ? filterSwitchers[category].values.includes(el.code)
        : el
    );
