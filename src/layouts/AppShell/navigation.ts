import {
  Activity,
  FileText,
  LayoutDashboard,
  Settings,
  UserRound,
} from "lucide-react";

import type { NavigationGroup } from "@/types/navigation";

export const navigationGroups: NavigationGroup[] = [
  {
    title: "Principal",
    items: [
      { href: "/", icon: LayoutDashboard, label: "Dashboard" },
      { href: "/registros", icon: FileText, label: "Registros" },
    ],
  },
  {
    title: "Configuração",
    items: [
      { href: "/status", icon: Activity, label: "Status" },
      { href: "/configuracoes", icon: Settings, label: "Configurações" },
      { href: "/perfil", icon: UserRound, label: "Perfil" },
    ],
  },
];
