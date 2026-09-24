import { Route, Routes } from "react-router-dom";

import { routesConfig } from "../../../shared/config/routeConfig";

export const AppRouter = () => {
  return (
    <Routes>
      {routesConfig.map((r) => (
        <Route
          path={r.path}
          element={r.element}
        />
      ))}
    </Routes>
  );
};
