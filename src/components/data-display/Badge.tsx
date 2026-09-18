import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Badge({
  children,
  variant = "neutral",
}: {
  children: ReactNode;
  variant?: "neutral" | "success" | "warning" | "danger";
}) {
  return <span className={cn("badge", `badge--${variant}`)}>{children}</span>;
}
