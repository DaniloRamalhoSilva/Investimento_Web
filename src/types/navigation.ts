import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  children?: Array<{ href: string; label: string }>;
};

export type NavigationGroup = { title: string; items: NavigationItem[] };
