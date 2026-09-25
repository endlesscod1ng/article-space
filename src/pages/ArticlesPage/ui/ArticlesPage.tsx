import s from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div
      className={[s.articlesPage, "page", className].filter(Boolean).join(" ")}
    >
      <div>ArticlesPage</div>
    </div>
  );
};
export default ArticlesPage;
