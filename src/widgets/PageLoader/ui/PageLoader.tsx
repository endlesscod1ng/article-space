import { Loader } from "@/shared/ui/Loader/Loader";
import s from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div
      className={[s.pageLoader, "page", className].filter(Boolean).join(" ")}
    >
      <Loader />
    </div>
  );
};
