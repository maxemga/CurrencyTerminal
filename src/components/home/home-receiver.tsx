import cn from "classnames";
import cls from "./home.module.scss";
import { HomeField } from "./receiver-field";
import { HomeSwitcher } from "./switcher";
import { Sources, Switchers } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { selectDirection, setDirection, setFilter } from "src/store";
import { filterSwitchers } from "src/utils";
import { useEffect, useMemo, useState } from "react";
import { FieldProps } from "src/types";

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
        data: directions.data.filter((el) =>
          filterSwitchers[categoryDirection].values.length !== 0
            ? filterSwitchers[categoryDirection].values.includes(el.code)
            : el
        ),
        value: currentDirection,
        status: directions.status,
        switchers: filterSwitchers,
        category: categoryDirection,
        setCategory: setCategoryDirection,
        onChange: (e) => {
          dispatch(setDirection(e));
        },
      },
      [Sources.FILTER]: {
        title: "Получаете",
        data: filter.data
          .find((el) => el.from.code === currentDirection?.code)
          ?.to.filter((el) =>
            filterSwitchers[categoryFilter].values.length !== 0
              ? filterSwitchers[categoryFilter].values.includes(el.code)
              : el
          ),
        value: currentFilter,
        status: filter.status,
        switchers: filterSwitchers,
        category: categoryFilter,
        setCategory: setCategoryFilter,
        onChange: (e) => {
          dispatch(setFilter(e));
        },
      },
    }),
    [
      categoryDirection,
      categoryFilter,
      currentDirection,
      currentFilter,
      directions.data,
      directions.status,
      dispatch,
      filter.data,
      filter.status,
    ]
  );

  useEffect(() => {
    setCategoryFilter(Switchers.ALL);
  }, [currentDirection]);

  useEffect(() => {
    dispatch(setDirection(null));
    dispatch(setFilter(null));
  }, [categoryDirection, dispatch]);

  useEffect(() => {
    dispatch(setFilter(null));
  }, [categoryFilter, dispatch]);

  return (
    <div>
      <h2 className={cn(cls.title)}>{obj[source].title}</h2>
      <HomeSwitcher obj={obj} source={source} />
      <HomeField obj={obj} source={source} />
    </div>
  );
};