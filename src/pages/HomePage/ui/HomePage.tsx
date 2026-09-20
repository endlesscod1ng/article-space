import s from "./HomePage.module.scss";

interface HomePageProps {
  className?: string;
}

const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={[s.homePage, className].filter(Boolean).join(" ")}>
      <div>HomePage</div>
    </div>
  );
};
export default HomePage;
