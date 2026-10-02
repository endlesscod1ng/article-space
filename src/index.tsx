import { createRoot } from "react-dom/client";
import { App } from "./app/App/App";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./app/providers/ThemeProvider/ThemeProvider";

import "@/shared/configs/i18n";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/ErrorBoundary";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
