import { createRoot } from "react-dom/client";
import { App } from "./app/App/App";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./app/providers/ThemeProvider/ThemeProvider";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
