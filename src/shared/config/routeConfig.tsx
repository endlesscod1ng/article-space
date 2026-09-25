import { ReactNode } from "react";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { HomePage } from "@/pages/HomePage";

const routePath = {
  main: "/",
  articles: "/articles",
} as const;

type RoutePath = (typeof routePath)[keyof typeof routePath];

interface RoutesConfigType {
  name: string;
  path: RoutePath;
  element: ReactNode;
}
export const routesConfig: RoutesConfigType[] = [
  { name: "Home", path: "/", element: <HomePage /> },
  { name: "Articles", path: "/articles", element: <ArticlesPage /> },
];
