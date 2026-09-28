import s from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={[s.notFoundPage, className].filter(Boolean).join(" ")}>
      <div>NotFoundPage</div>
    </div>
  );
};
export default NotFoundPage;
