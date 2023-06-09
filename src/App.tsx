import { store } from "./store";
import { Provider } from "react-redux";
import { HomeScreen } from "./screens";
import { useTheme } from "./context";
import cn from "classnames";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </div>
  );
};
