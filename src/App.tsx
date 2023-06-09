import { store } from "./store";
import { Provider } from "react-redux";
import { HomeScreen } from "./screens";
import cn from "classnames";
import "./styles/index.scss";

export const App = () => {
  const theme = "light"; // FIX ME

  return (
    <div className={cn("app", theme)}>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </div>
  );
};
