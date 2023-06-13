import cn from "classnames";
import { useEffect } from "react";
import { HomeComponent } from "src/components";
import { useAppDispatch } from "src/hooks";
import { getDirections, getFilter } from "src/store";

export const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDirections());
    dispatch(getFilter());
  }, [dispatch]);

  return (
    <div className={cn("home")}>
      <HomeComponent />
    </div>
  );
};
