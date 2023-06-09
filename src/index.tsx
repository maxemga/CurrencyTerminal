import ReactDOM from "react-dom/client";
import { App } from "./app";

import { ThemeProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
