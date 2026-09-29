import { Route, Routes } from "react-router-dom";

import { routesConfig } from "@/shared/configs/routeConfig";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const AppRouter = () => {
  return (
    <Routes>
      {routesConfig.map((r) => (
        <Route
          key={r.path + r.name}
          path={r.path}
          element={r.element}
        />
      ))}
      <Route
        path={"*"}
        element={<NotFoundPage />}
      />
    </Routes>
  );
};
