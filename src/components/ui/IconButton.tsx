import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  label: string;
  variant?: "default" | "ghost";
};

export function IconButton({
  className,
  icon,
  label,
  variant = "default",
  ...props
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn("icon-button", `icon-button--${variant}`, className)}
      title={label}
      type="button"
      {...props}
    >
      {icon}
    </button>
  );
}
