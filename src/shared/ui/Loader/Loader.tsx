import s from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={[s["lds-ellipsis"]].filter(Boolean).join(" ")}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
