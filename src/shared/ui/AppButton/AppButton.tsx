import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";

type AppButtonVariant = "clear";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  className?: string;
}

export const AppButton = ({
  children,
  variant = "clear",
  className,
  ...otherPrope
}: AppButtonProps) => {
  return (
    <button
      {...otherPrope}
      className={[s.appButton, s[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
};
