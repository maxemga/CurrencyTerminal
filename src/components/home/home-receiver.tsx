import { HomeField } from "./receiver-field";
import { HomeSwitcher } from "./switcher";
import { Sources, Switchers } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { selectDirection, setDirection, setFilter } from "src/store";
import { filterByCode, findByCode } from "src/utils";
import { useEffect, useMemo, useState } from "react";
import type { FieldProps } from "src/types";
import cn from "classnames";
import cls from "./home.module.scss";

interface Props {
  source: Sources;
}

export const HomeReceiver = ({ source }: Props) => {
  const [categoryDirection, setCategoryDirection] = useState(Switchers.ALL);
  const [categoryFilter, setCategoryFilter] = useState(Switchers.ALL);

  const { filter, directions, currentDirection, currentFilter } =
    useAppSelector(selectDirection);
  const dispatch = useAppDispatch();

  const obj: FieldProps = useMemo(
    () => ({
      [Sources.DIRECTION]: {
        title: "Отдаете",
        data: filterByCode(directions.data, categoryDirection),
        value: currentDirection,
        status: directions.status,
        category: categoryDirection,
        setCategory: setCategoryDirection,
        onChange: (e) => dispatch(setDirection(JSON.parse(e.target.value))),
      },
      [Sources.FILTER]: {
        title: "Получаете",
        data: findByCode(filter.data, currentDirection, categoryFilter),
        value: currentFilter,
        status: filter.status,
        category: categoryFilter,
        setCategory: setCategoryFilter,
        onChange: (e) => dispatch(setFilter(JSON.parse(e.target.value))),
      },
    }),
    [
      categoryDirection,
      categoryFilter,
      currentDirection,
      currentFilter,
      directions.data,
      directions.status,
      filter.data,
      filter.status,
      dispatch,
    ]
  );

  useEffect(() => {
    const direction = obj[Sources.DIRECTION].data![0];

    if (!direction) return;
    dispatch(setDirection(direction));
  }, [directions, categoryDirection]);

  useEffect(() => {
    const directions = obj[Sources.FILTER].data;

    if (!directions) return;
    dispatch(setFilter(directions[0]));
  }, [filter, categoryFilter, currentDirection]);

  useEffect(() => {
    setCategoryFilter(Switchers.ALL);
  }, [currentDirection]);

  return (
    <div>
      <h2 className={cn(cls.title)}>{obj[source].title}</h2>
      <HomeSwitcher obj={obj} source={source} />
      <HomeField obj={obj} source={source} />
    </div>
  );
};
