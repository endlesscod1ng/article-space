import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";

type AppButtonVariant = "clear";
type AppButtonColorType = "primary" | "secondary";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  colorType?: AppButtonColorType;
  className?: string;
}

export const AppButton = ({
  children,
  variant = "clear",
  colorType = "primary",
  className,
  ...otherPrope
}: AppButtonProps) => {
  return (
    <button
      {...otherPrope}
      className={[s.appButton, s[variant], s[colorType], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};
